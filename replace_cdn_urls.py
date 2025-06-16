import os
import re
import urllib.parse

# Which file extensions to process
TEXT_FILE_EXTENSIONS = ['.html', '.js', '.css', '.ts', '.jsx', '.tsx']

# Match Glitch CDN URLs
cdn_pattern = re.compile(
    r'https://cdn\.glitch(?:\.com|\.global)/[^/]+/([^?\s"\')]+)(?:\?[^"\')\s]*)?'
)

# Path to local asset directory
local_asset_path = './glitch-assets/'

# Root directory of your project
project_dir = './'

changed_files = []

for root, dirs, files in os.walk(project_dir):
    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if ext in TEXT_FILE_EXTENSIONS:
            full_path = os.path.join(root, file)
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()

            def replacer(match):
                encoded_path = match.group(1)  # e.g. '5f40a...%2Fimage1.jpeg'
                decoded_path = urllib.parse.unquote(encoded_path)  # → '5f40a.../image1.jpeg'
                filename = os.path.basename(decoded_path)          # → 'image1.jpeg'
                return local_asset_path + filename                 # → './glitch-assets/image1.jpeg'

            new_content, count = cdn_pattern.subn(replacer, content)

            if count > 0:
                changed_files.append(full_path)
                with open(full_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✅ Replaced {count} link(s) in: {full_path}")

if not changed_files:
    print("⚠️ No Glitch CDN URLs found.")
else:
    print("\n🎉 All CDN links successfully replaced with local image paths.")

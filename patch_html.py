import os
import glob

html_files = glob.glob('/Users/akki/Documents/blackspace-web/public/project/*.html')

for f in html_files:
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('<meta name="viewport" content="width=1440">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">')
    content = content.replace('body { min-width: 1440px; }', 'body { min-width: auto; overflow-x: hidden; }')
    
    with open(f, 'w') as file:
        file.write(content)

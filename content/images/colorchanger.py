
# code that changes a specific color in all SVG files in a folder to a new color
from pathlib import Path
import re

# Change this to your SVG folder
FOLDER = Path(r"C:\Users\fpols\Documents\...")


# Exact color found in your SVG
OLD_COLOR = "#d3d3d3"

# New grey with L = 40
NEW_COLOR = "#666666"

def process_svg(file_path):
    content = file_path.read_text(encoding="utf-8")

    # Match only the exact original color (case-insensitive)
    # Avoid accidentally matching part of a longer hex code
    pattern = re.compile(
        re.escape(OLD_COLOR) + r"(?![0-9a-fA-F])",
        re.IGNORECASE
    )

    updated, count = pattern.subn(NEW_COLOR, content)

    if count > 0:
        file_path.write_text(updated, encoding="utf-8")
        print(f"Updated {file_path.name}: {count} replacements")
    else:
        print(f"Skipped {file_path.name}: color not found")


def main():
    files = list(FOLDER.glob("*.svg"))

    print(f"Found {len(files)} SVG files.\n")

    for file_path in files:
        process_svg(file_path)

    print("\nDone!")


if __name__ == "__main__":
    main()

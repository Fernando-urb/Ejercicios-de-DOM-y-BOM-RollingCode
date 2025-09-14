#!/bin/bash

# Exit on any error
set -e

echo "Building the project..."

# Build Tailwind CSS
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify

# Create a temporary directory for deployment
TEMP_DIR="$(mktemp -d)"

# Copy all necessary files to the temp directory
cp -r src/ "$TEMP_DIR/"
cp index.html "$TEMP_DIR/"
cp 404.html "$TEMP_DIR/"
cp CNAME "$TEMP_DIR/"
cp _config.yml "$TEMP_DIR/"

# If you have any other files that need to be included, add them here
# cp -r other_files/ "$TEMP_DIR/"

echo "Deploying to GitHub Pages..."

# Check if the git repository exists, if not initialize it
if [ ! -d ".git" ]; then
    git init
    git checkout -b main
    git add .
    git commit -m "Initial commit"
fi

# Add the GitHub repository as a remote if it doesn't exist
if ! git remote | grep -q origin; then
    echo "Please enter your GitHub repository URL (e.g., https://github.com/username/repository.git):"
    read REPO_URL
    git remote add origin "$REPO_URL"
fi

# Create or update the gh-pages branch
git checkout --orphan gh-pages

# Remove all files except the ones we want to keep
find . -maxdepth 1 ! -name 'src' ! -name 'index.html' ! -name '404.html' ! -name 'CNAME' ! -name '_config.yml' ! -name '.git' ! -name '.gitignore' ! -name 'node_modules' -exec rm -rf {} +

# Move files from temp directory to current directory
cp -r "$TEMP_DIR/"* .

# Clean up the temp directory
rm -rf "$TEMP_DIR"

# Add all files to git
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f origin gh-pages

# Switch back to the main branch
git checkout main

echo "Deployment completed successfully!"
echo "Your site should be live at: https://fer-nan-d0.github.io/Ejercicios-5/"
echo "(It might take a few minutes for the changes to be visible)"

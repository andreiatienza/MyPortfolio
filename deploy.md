# How to Host Your Portfolio on GitHub Pages

## Step-by-Step Guide

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `MyPortfolio` or `portfolio`)
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (you already have these)
7. Click **"Create repository"**

### Step 2: Update Vite Config (Already Done)

The `vite.config.ts` has been updated with the base path. **Important**: Change `/MyPortfolio/` to match your actual repository name!

### Step 3: Initialize Git and Push to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Build Your Project

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

This creates a `dist` folder with your production-ready files.

### Step 5: Deploy to GitHub Pages

You have two options:

#### Option A: Using GitHub Actions (Recommended - Automatic)

1. Create a folder `.github/workflows` in your project root
2. Create a file named `deploy.yml` in that folder
3. Copy the GitHub Actions workflow (see below)
4. Commit and push:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

#### Option B: Manual Deployment (Simple)

1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "tsc && vite build",
     "preview": "vite preview",
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select:
   - **Option A users**: `gh-pages` branch (if using manual deployment)
   - **Option B users**: `GitHub Actions` (if using automatic deployment)
5. Click **Save**
6. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Important Notes

- **Update the base path** in `vite.config.ts` to match your repository name
- If your repo is named `portfolio`, change base to `/portfolio/`
- If your repo is named `MyPortfolio`, keep it as `/MyPortfolio/`
- The site may take a few minutes to deploy after pushing

## Troubleshooting

- **404 Error**: Make sure the base path in `vite.config.ts` matches your repository name exactly
- **Blank Page**: Check browser console for errors, ensure all assets are loading
- **Styles Not Loading**: Verify the base path is correct in vite.config.ts


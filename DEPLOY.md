# Deploying bassamarnaout.github.io

The site is four static files with no build step:

- `index.html`
- `styles.css`
- `script.js`
- `Bassam_Arnaout_CV.pdf` (the CV without the phone number, used by the "Download CV" button)

## One-time setup (needs your GitHub account)

1. Sign in to GitHub as **bassamarnaout** and create a **public** repository named exactly `bassamarnaout.github.io`.
2. Upload the four files to the root of the `main` branch, using "Add file → Upload files" on GitHub or the commands below:
   ```sh
   git init && git add index.html styles.css script.js Bassam_Arnaout_CV.pdf
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/bassamarnaout/bassamarnaout.github.io.git
   git push -u origin main
   ```
3. In the repository, open **Settings → Pages**. Set "Deploy from a branch" to `main` / `(root)`, then save.
4. After a minute or two, open https://bassamarnaout.github.io. HTTPS is turned on automatically.

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Updating later

- **CV:** replace `Bassam_Arnaout_CV.pdf` with a new file that has the same name. Make sure it has **no phone number** (open it and check before uploading).
- **Text:** all content is in `index.html`. Colors for both themes are the CSS variables at the top of `styles.css`.
- **Photo:** the "BA" circle is a placeholder. Send a photo if you'd like it replaced.

# Canvas & Upholstery Business Website

A modern, sleek website for a Canvas and Upholstery business, built with React and Material UI. Easily deployable to GitHub Pages.

## Features

- Modern, responsive Material UI design
- Home, About Us, Our Work (gallery), and Contact Us pages
- Image and video showcase
- Contact form integrated with [Web3Forms](https://web3forms.com/)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set your Web3Forms Access Key**

   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/Contact.js` with your key from web3forms.com.

3. **Add your images/videos**
   - Place your media in `public/gallery/` and update the `galleryData` array in `src/pages/OurWork.js` accordingly.

4. **Run locally**:
   ```bash
   npm start
   ```

5. **Deploy to GitHub Pages**:
   - Update `homepage` in `package.json` to your repo URL.
   - Run:
     ```bash
     npm run deploy
     ```

## Folder Structure

- `src/` – React app source
- `public/gallery/` – Place your images/videos here
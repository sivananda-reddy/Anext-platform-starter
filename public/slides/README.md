# Presentation Slides

Place your slide images here.

## How to Add Slides:

1. **Convert your PPT slides to images** (PNG or JPG format)
   - You can export slides from PowerPoint: File → Export → Change File Type → PNG or JPEG
   - Or use online tools to convert PPT to images

2. **Name your slide images** (e.g., `slide-1.png`, `slide-2.png`, etc.)

3. **Place them in this folder** (`/public/slides/`)

4. **Update the slides array** in `/app/radio-calibration/page.jsx`:
   ```javascript
   const slides = [
       { src: '/slides/slide-1.png', alt: 'Slide 1: Introduction' },
       { src: '/slides/slide-2.png', alt: 'Slide 2: Problem Statement' },
       { src: '/slides/slide-3.png', alt: 'Slide 3: Solution Overview' },
       // Add more slides as needed
   ];
   ```

## Alternative: Embed from Google Drive or OneDrive

If you prefer to host slides online, you can also use embed URLs or direct image links in the slides array.


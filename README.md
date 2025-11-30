# Andrew Gibson Portfolio

Custom-built portfolio website showcasing learning experience design and UX development work.

## 🎨 Features

- **Dark Blue Monochromatic Theme** - Minimalist design with Montserrat typography
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **FAB Navigation** - Floating Action Button that appears on scroll for better UX
- **Interactive Elements** - Smooth scrolling, hover effects, and animations
- **Embedded Volcano Simulator** - Live educational tool demonstration
- **Alpha Showcase** - Dedicated section for prototype/concept projects
- **No Dependencies** - Pure HTML/CSS/JavaScript, no frameworks needed

## 📁 Project Structure

```
my-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # Theme variables (colors, fonts, spacing)
│   ├── main.css            # Core styles
│   └── responsive.css      # Mobile/tablet breakpoints
├── js/
│   ├── navigation.js       # FAB scroll logic
│   └── main.js             # Additional interactions
├── images/
│   ├── hero/              # Hero section images
│   ├── projects/          # Project screenshots
│   ├── alpha/             # Alpha showcase mockups
│   └── about/             # About section images
└── assets/                # PDFs, resume, etc.
```

## 🎯 Image Guidelines

### Project Images (images/projects/)
- `customer-service.jpg` - Featured customer service training programs
- `handbook.jpg` - Digital employee handbook interface
- `conflict.jpg` - Managing Workplace Conflict course
- `tech-support.jpg` - PC Troubleshooting course

**Recommended specs:**
- Format: JPG or PNG
- Width: 1200px minimum
- Aspect ratio: 16:9 or 4:3
- File size: < 500KB (optimize for web)

### Alpha Images (images/alpha/)
- `catalyst.jpg` - Catalyst dashboard mockup
- `hr-assistant.jpg` - HR AI assistant interface
- `familycore.jpg` - FamilyCore platform concept

**Recommended specs:**
- Format: JPG or PNG
- Width: 800px minimum
- Can be mockups/wireframes
- File size: < 300KB

### Hero Image (images/hero/)
- Your otter illustration or custom animation
- Format: PNG (if illustration) or JPG
- Width: 800px
- File size: < 200KB

## 🎨 Customizing the Theme

### Changing Colors
Edit `css/variables.css` - all colors are defined as CSS variables:

```css
:root {
    --bg-primary: #0a0e1a;        /* Main background */
    --accent-primary: #3b82f6;    /* Accent color */
    /* ... etc */
}
```

Change these values and the entire site updates automatically.

### Changing Fonts
Currently using Montserrat. To change:

1. Update the Google Fonts import in `css/main.css`
2. Update `--font-primary` in `css/variables.css`

### Adjusting Spacing
Edit spacing variables in `css/variables.css`:

```css
--space-sm: 1rem;
--space-md: 1.5rem;
/* ... etc */
```

## 🚀 Local Testing

1. Simply open `index.html` in your browser
2. Or use a local server:
   - Python: `python -m http.server 8000`
   - Node: `npx serve`
   - VS Code: Use Live Server extension

## 📤 Deployment to Bluehost

### Steps:
1. Log into Bluehost cPanel
2. Go to File Manager
3. Navigate to `public_html` directory
4. Remove WordPress files (after backing up if needed)
5. Upload entire `my-portfolio` folder contents to `public_html`
6. Ensure `index.html` is in the root of `public_html`
7. Visit your domain - should load immediately!

### Important:
- Make sure `.htaccess` doesn't have WordPress redirects
- Clear browser cache if you see old site
- Test on mobile after deploying

## ✅ To-Do Before Launch

### Content:
- [ ] Add real project images to `images/projects/`
- [ ] Add alpha mockups to `images/alpha/`
- [ ] Add hero image/illustration
- [ ] Update email address in Contact section
- [ ] Update LinkedIn URL
- [ ] Add resume PDF to `assets/`
- [ ] Write case study pages (or link to external)

### Optional Enhancements:
- [ ] Add favicon
- [ ] Add Open Graph meta tags for social sharing
- [ ] Implement case study modals or separate pages
- [ ] Add loading animations
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Optimize images with compression tools

## 🛠️ Technical Notes

### Browser Support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance:
- No external dependencies (except Google Fonts)
- Lazy loading for images
- Optimized animations using `requestAnimationFrame`
- CSS Grid for efficient layouts

### Accessibility:
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- High contrast text for readability

## 📝 Notes

- The volcano simulator is embedded via iframe from your existing subdomain
- FAB navigation appears after scrolling 100px down
- All external links open in new tabs automatically
- Smooth scrolling is enabled for anchor links
- Contact form not included (can add later if needed)

## 🆘 Troubleshooting

**FAB not appearing?**
- Check browser console for JavaScript errors
- Ensure `navigation.js` is loading properly

**Images not showing?**
- Verify file paths are correct (case-sensitive on Linux servers)
- Check file permissions (644 for files, 755 for directories)

**Layout broken on mobile?**
- Clear browser cache
- Test in browser dev tools with responsive mode

## 📞 Questions?

Built this with you - let's refine it together!

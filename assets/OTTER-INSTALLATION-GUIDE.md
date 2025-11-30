# 🦦 OTTER HERO IMAGE - INSTALLATION GUIDE

## ✅ WHAT YOU HAVE:

Two PNG files with transparent backgrounds:
- `otter_hero_final.png` (2000x1090px - high res)
- `otter_hero_web.png` (800x436px - **USE THIS ONE**)

---

## 📋 INSTALLATION STEPS:

### STEP 1: UPLOAD THE IMAGE

**Local (Your Computer):**
1. Download `otter_hero_web.png` from the outputs
2. Save it to: `C:\Users\andre\my-portfolio\images\otter_hero.png`

**Bluehost (Live Site):**
1. Open Bluehost File Manager
2. Navigate to: `public_html/images/`
3. Upload the file as: `otter_hero.png`

---

### STEP 2: UPDATE HTML

Open `C:\Users\andre\my-portfolio\index.html`

**Find this section** (around line 62-72):
```html
<div class="hero-visual">
    <div class="hero-image-placeholder">
        <!-- Replace with your hero image or animation -->
        <p>Hero Visual<br>(Otter illustration or custom animation)</p>
    </div>
</div>
```

**Replace with:**
```html
<div class="hero-visual">
    <img src="images/otter_hero.png" alt="Learning Experience Design" class="hero-otter">
</div>
```

---

### STEP 3: ADD CSS ANIMATION

Open `C:\Users\andre\my-portfolio\css\main.css`

**Scroll to the VERY END** and add this:

```css
/* ========================================
   HERO OTTER ANIMATION
   ======================================== */

.hero-otter {
    width: 100%;
    max-width: 600px;
    height: auto;
    animation: float 6s ease-in-out infinite;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15));
}

/* Floating Animation */
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

/* Hover effect */
.hero-otter:hover {
    animation: float 6s ease-in-out infinite, pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1) translateY(0px);
    }
    50% {
        transform: scale(1.02) translateY(-20px);
    }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .hero-otter {
        max-width: 400px;
    }
}

@media (max-width: 480px) {
    .hero-otter {
        max-width: 300px;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
}
```

---

### STEP 4: UPLOAD TO BLUEHOST

**Via File Manager:**
1. Upload updated `index.html` to `public_html/`
2. Upload updated `main.css` to `public_html/css/`
3. Image should already be uploaded from Step 1

**Via FTP (if you prefer):**
1. Connect to Bluehost FTP
2. Upload all three files to their respective locations

---

### STEP 5: TEST

1. Clear your browser cache: `Ctrl + Shift + Delete`
2. Visit: `https://andrewjgibson.com`
3. **You should see:**
   - Otter in hero section
   - Gentle floating animation (up and down)
   - Shadow beneath otter
   - Hover makes it pulse slightly

---

## 🎨 ANIMATION DETAILS:

**What the animation does:**
- ✨ Gentle floating motion (6-second cycle)
- 🎯 Moves up/down by 20px
- 💧 Drop shadow for depth
- 🖱️ Hover adds subtle pulse effect
- 📱 Reduced animation on mobile (smoother performance)

**Why it works:**
- Draws eye to hero section
- Feels alive without being distracting
- Professional but playful
- Matches your "learning never stops" philosophy

---

## 🐛 TROUBLESHOOTING:

**Image doesn't show:**
- Check file path: `images/otter_hero.png`
- Verify file uploaded to correct location
- Check browser console for 404 errors

**No animation:**
- Make sure CSS was added to `main.css`
- Clear browser cache
- Check for CSS syntax errors

**Image too big/small:**
- Adjust `max-width` in `.hero-otter` CSS
- Default is 600px, can go 400-800px

**Animation too fast/slow:**
- Change `6s` in animation property
- Bigger number = slower float

---

## ✅ CHECKLIST:

- [ ] Downloaded `otter_hero_web.png`
- [ ] Saved locally as `images/otter_hero.png`
- [ ] Uploaded to Bluehost `public_html/images/`
- [ ] Updated HTML (removed placeholder, added img tag)
- [ ] Added CSS animation code to `main.css`
- [ ] Uploaded updated files to Bluehost
- [ ] Cleared browser cache
- [ ] Tested on live site
- [ ] Checked mobile view
- [ ] Celebrated! 🎉

---

## 🚀 RESULT:

Your hero section now has a professional, animated otter mascot that:
- Represents your learning design philosophy
- Adds personality without being unprofessional
- Catches the eye with subtle motion
- Works perfectly on mobile
- Has transparent background (works on any bg color)

**YOU'RE DONE!** 🦦✨

Your portfolio is now complete with the perfect hero visual!

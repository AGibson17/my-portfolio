# 🚀 Portfolio Launch Checklist

Use this checklist to track your progress from development to deployment.

## 📸 Phase 1: Add Images

### Project Images (Priority: HIGH)
- [ ] Customer Service Training - `images/projects/customer-service.jpg`
- [ ] Digital Handbook - `images/projects/handbook.jpg`
- [ ] Managing Workplace Conflict - `images/projects/conflict.jpg`
- [ ] PC Troubleshooting - `images/projects/tech-support.jpg`

### Alpha Mockups (Priority: MEDIUM)
- [ ] Catalyst Dashboard - `images/alpha/catalyst.jpg`
- [ ] HR AI Assistant - `images/alpha/hr-assistant.jpg`
- [ ] FamilyCore - `images/alpha/familycore.jpg`

### Hero/About (Priority: LOW)
- [ ] Hero visual/otter illustration - `images/hero/`
- [ ] About section image (optional) - `images/about/`

**Image Tips:**
- Optimize with tools like TinyPNG, ImageOptim, or Squoosh
- Keep under 500KB per image
- Use descriptive filenames

---

## ✏️ Phase 2: Update Content

### Contact Information
- [ ] Update email address in `index.html` (line ~486)
- [ ] Update LinkedIn URL (line ~487)
- [ ] Add resume PDF to `assets/` folder
- [ ] Update resume link in `index.html` (line ~488)

### Case Studies (Optional for v1)
- [ ] Write detailed case studies for each project
- [ ] Create case study modals OR separate pages
- [ ] Link from "View Case Study" buttons

### About Section
- [ ] Review "My Story" content
- [ ] Review "My Approach" content  
- [ ] Verify skills list is current

---

## 🎨 Phase 3: Theme Tweaks (Optional)

- [ ] Adjust colors in `css/variables.css` if needed
- [ ] Test different fonts if desired
- [ ] Fine-tune spacing/sizing
- [ ] Add favicon (`<link rel="icon"...>` in `index.html` line ~15)

---

## 🧪 Phase 4: Local Testing

### Browser Testing
- [ ] Chrome/Edge - Desktop
- [ ] Firefox - Desktop
- [ ] Safari - Desktop (if available)
- [ ] Chrome - Mobile (use DevTools)
- [ ] Safari - Mobile (use DevTools or real device)

### Functionality Testing
- [ ] All navigation links work
- [ ] FAB appears after scrolling
- [ ] FAB menu opens/closes properly
- [ ] Smooth scrolling to sections
- [ ] Hover effects on cards work
- [ ] Volcano simulator loads
- [ ] All external links open in new tabs
- [ ] Contact links work (email, LinkedIn, resume)

### Responsive Testing
- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1440px width)
- [ ] Large desktop (1920px width)

---

## 🌐 Phase 5: Pre-Deployment

### Backups
- [ ] Backup current WordPress site (if desired)
- [ ] Download database backup (if needed)
- [ ] Save any content you want to keep

### Final Checks
- [ ] All images added and optimized
- [ ] All links tested and working
- [ ] Spell check all content
- [ ] Meta description is accurate (line ~6)
- [ ] Page title is correct (line ~11)

---

## 🚀 Phase 6: Deploy to Bluehost

### Step-by-Step Deployment

1. **Remove WordPress**
   - [ ] Log into Bluehost cPanel
   - [ ] Navigate to "My Sites"
   - [ ] Remove WordPress installation (or via File Manager)
   - [ ] Confirm old files are deleted from `public_html`

2. **Upload Portfolio Files**
   - [ ] Access File Manager in cPanel
   - [ ] Navigate to `public_html` directory
   - [ ] Upload ALL files from your `my-portfolio` folder
   - [ ] Ensure `index.html` is in root of `public_html`
   - [ ] Verify folder structure matches local version

3. **Set Permissions**
   - [ ] Files: 644 permissions
   - [ ] Directories: 755 permissions
   - [ ] `.htaccess`: 644 permissions

4. **DNS Check**
   - [ ] Verify domain points to correct hosting
   - [ ] May take 24-48 hours if DNS was changed
   - [ ] Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation

---

## ✅ Phase 7: Post-Launch Testing

### Immediately After Launch
- [ ] Visit your domain in incognito/private window
- [ ] Test all navigation
- [ ] Test on real mobile device
- [ ] Check page load speed (use PageSpeed Insights)
- [ ] Verify volcano simulator works on live site
- [ ] Test contact links (email, LinkedIn, resume download)

### Share & Test
- [ ] Share link with a friend for feedback
- [ ] Test in different browsers
- [ ] Ask for mobile testing from iOS and Android users

---

## 🎯 Phase 8: Optional Enhancements

### Analytics
- [ ] Add Google Analytics
- [ ] Set up Google Search Console
- [ ] Monitor traffic and user behavior

### SEO
- [ ] Add Open Graph meta tags for social sharing
- [ ] Submit sitemap to Google
- [ ] Add schema markup (Person, Organization)

### Features
- [ ] Create case study modals or pages
- [ ] Add contact form (PHP or form service)
- [ ] Add blog/articles section
- [ ] Implement loading animations
- [ ] Add "scroll to top" button

### Marketing
- [ ] Update LinkedIn profile with new portfolio URL
- [ ] Share on social media
- [ ] Add to email signature
- [ ] Include in job applications

---

## 📊 Success Metrics

Track these after launch:
- Page views per month
- Time on page
- Bounce rate
- Most viewed projects
- Contact form submissions (if added)
- Downloads of resume

---

## 🛟 Emergency Rollback Plan

If something goes wrong:

1. **WordPress Restore**
   - Reinstall WordPress from cPanel
   - Restore database backup
   - Restore file backup

2. **Portfolio Fixes**
   - Download problem files via File Manager
   - Fix locally
   - Re-upload corrected files

3. **Support**
   - Bluehost support: Available 24/7
   - Save this checklist for reference

---

## 📝 Notes Section

Use this space for your own notes during the process:

**What worked well:**
- 

**What needed adjustment:**
- 

**Ideas for v2:**
- 

**Feedback received:**
- 

---

**Last Updated:** [Add date when you start]
**Launch Date:** [Add when you go live]
**Version:** 1.0

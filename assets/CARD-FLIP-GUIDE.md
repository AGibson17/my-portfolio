# Card Flip Structure Guide

## 🃏 How to Add Flip Content to Cards

Each work card needs to be restructured to include BOTH front and back content.

---

## 📋 Template Structure

```html
<article class="work-card">
    <div class="card-flip-container">
        
        <!-- FRONT OF CARD -->
        <div class="card-front">
            <div class="work-card-image">
                <img src="images/projects/your-image.jpg" alt="Project Name">
            </div>
            <div class="work-card-content">
                <h3 class="work-card-title">Project Title</h3>
                <div class="tech-stack">
                    <span class="tech-tag">Tag 1</span>
                    <span class="tech-tag">Tag 2</span>
                </div>
                <p class="work-card-description">
                    Brief description of the project...
                </p>
            </div>
        </div>
        
        <!-- BACK OF CARD -->
        <div class="card-back">
            <div class="card-back-header">
                <h4 class="card-back-title">Project Title</h4>
                <button class="card-back-close" aria-label="Close">×</button>
            </div>
            
            <div class="card-back-stats">
                <div class="stat-item">
                    <div class="stat-label">Duration</div>
                    <div class="stat-value">7 weeks</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Impact</div>
                    <div class="stat-value">+29%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Format</div>
                    <div class="stat-value">Hybrid</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Audience</div>
                    <div class="stat-value">500+</div>
                </div>
            </div>
            
            <p class="card-back-summary">
                Quick preview of what this project accomplished. Keep it brief - 
                2-3 sentences max. This gives them a taste before the full case study.
            </p>
            
            <div class="card-back-cta">
                <a href="case-studies/project-name.html" class="btn btn-primary">
                    View Full Case Study →
                </a>
            </div>
        </div>
        
    </div>
</article>
```

---

## 🎯 Example: Customer Service Training (Featured Card)

```html
<article class="work-card featured">
    <div class="card-flip-container">
        
        <!-- FRONT -->
        <div class="card-front">
            <div class="work-card-image">
                <img src="images/projects/customer-service.jpg" alt="Customer Service Training Programs">
            </div>
            <div class="work-card-content">
                <h3 class="work-card-title">Customer Service Training Programs</h3>
                <div class="tech-stack">
                    <span class="tech-tag">Hybrid Learning</span>
                    <span class="tech-tag">ILT Design</span>
                    <span class="tech-tag">Technical Support</span>
                    <span class="tech-tag">Curriculum Development</span>
                </div>
                <p class="work-card-description">
                    Designed and developed comprehensive customer service training programs 
                    from the ground up, including a 7-week hybrid learning program for 
                    Teleperformance (DRS) and a 3-week instructor-led technical support 
                    training for ITI/Neumo. These programs resulted in a 29% improvement 
                    in new hire retention and a 52 percentage point increase in service 
                    level achievement.
                </p>
            </div>
        </div>
        
        <!-- BACK -->
        <div class="card-back">
            <div class="card-back-header">
                <h4 class="card-back-title">Customer Service Training Programs</h4>
                <button class="card-back-close" aria-label="Close">×</button>
            </div>
            
            <div class="card-back-stats">
                <div class="stat-item">
                    <div class="stat-label">Duration</div>
                    <div class="stat-value">7 weeks</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Retention</div>
                    <div class="stat-value">+29%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Service Level</div>
                    <div class="stat-value">+52%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Learners</div>
                    <div class="stat-value">500+</div>
                </div>
            </div>
            
            <p class="card-back-summary">
                Built two complete training curricula covering communication strategies, 
                technical troubleshooting, conflict resolution, and customer relationship 
                management. Programs combined instructor-led sessions, hands-on practice, 
                and real-world scenarios to prepare new hires for success.
            </p>
            
            <div class="card-back-cta">
                <a href="case-studies/customer-service-training.html" class="btn btn-primary">
                    View Full Case Study →
                </a>
            </div>
        </div>
        
    </div>
</article>
```

---

## 💡 Content Guidelines

### Front of Card (What Users See First):
- **Image**: Eye-catching screenshot or visual
- **Title**: Clear, concise project name
- **Tech Tags**: 3-5 key technologies/methods
- **Description**: 2-3 sentences about the project

### Back of Card (Quick Preview):
- **Header**: Title + close button
- **Stats** (4 items in 2x2 grid):
  - Duration, Timeline, Scope
  - Impact metrics (%, numbers)
  - Format (WBT, ILT, Hybrid, etc.)
  - Audience size or reach
- **Summary**: 2-3 sentences with more detail
- **CTA**: Button to full case study page

---

## 🎨 Stats Ideas for Each Project

### Customer Service Training:
- Duration: "7 weeks"
- Retention: "+29%"
- Service Level: "+52%"
- Learners: "500+"

### Digital Handbook:
- Platform: "ASP.NET 8"
- Pages: "200+"
- Users: "500+"
- Searches: "1.2k/mo"

### Managing Conflict:
- Duration: "45 min"
- Format: "WBT"
- Scenarios: "8"
- Completion: "95%"

### Difficult Conversations:
- Duration: "1 hour"
- Format: "Interactive"
- Modules: "5"
- Leaders: "100+"

### PC Troubleshooting:
- Duration: "30 min"
- Format: "WBT"
- AI-Assisted: "Yes"
- Completion: "98%"

---

## ⚙️ How It Works

### User Interaction:
1. **Card is visible** (shows front)
2. **User clicks anywhere on card** → Card flips
3. **Back is revealed** with stats + summary
4. **User can:**
   - Click close (×) button → Flips back to front
   - Click outside card → Flips back to front
   - Press ESC key → Flips back to front
   - Click "View Full Case Study" → Goes to detail page

### JavaScript Handles:
- Click detection
- Flip animation (0.6s smooth)
- Close functionality
- ESC key support

### CSS Handles:
- 3D flip effect
- Card positioning
- Layout of front/back
- Smooth transitions

---

## 📝 Next Steps for You

1. **Update each work card** with this structure
2. **Fill in the back content** for each project
3. **Add real stats** that matter
4. **Write compelling summaries** (2-3 sentences)
5. **Test the flip** by clicking cards

---

## 🐛 Troubleshooting

### "Card won't flip"
- Check that `card-flip.js` is loaded
- Verify HTML structure matches template
- Check browser console for errors

### "Back content looks weird"
- Make sure all back content is inside `.card-back`
- Check that stats have proper structure
- Verify no typos in class names

### "Card flips on button click"
- This is expected! Any click flips the card
- The "View Case Study" button will still work
- Close button properly prevents flip

---

## 🎯 Mobile Behavior

On mobile:
- Cards still flip on tap
- Stats grid adjusts to fit
- Close button is easy to tap
- All content remains readable

---

**You're all set!** Update your cards with this structure and you'll have those sick flip interactions working perfectly. Let me know if you need help with any specific card!

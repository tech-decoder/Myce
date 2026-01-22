# 🎨 BRUTAL DESIGN AUDIT - HOMEPAGE SECTIONS

**Auditor:** Acting as ruthless design critic
**Date:** January 22, 2026
**Standard:** World-class fintech sites (Stripe, Plaid, Mercury, Ramp)

---

## 🚨 EXECUTIVE SUMMARY

**Overall Design Score: 5.8/10** - Functional but forgettable. Lots of wasted space, repetitive icons, and lazy visual decisions.

**Biggest Problems:**
1. **Dashboard mockup is UGLY** - Huge, cluttered, adds no value, below fold
2. **Icon laziness** - Same checkmark icon used 20+ times
3. **No visual hierarchy** - Everything same weight/importance
4. **Wasted space** - Sections too tall with little content
5. **Generic bento grid** - Copied trend without understanding why

---

## 📊 SECTION-BY-SECTION AUDIT

### 1. HERO SECTION
**Score: 6.5/10** - Messaging improved, design is meh

**What Works:**
- ✅ Clear headline
- ✅ Good CTA hierarchy
- ✅ Service benefits badges

**What's Broken:**
- ❌ **Too much vertical space** - Headline to CTA is too far apart
- ❌ **Generic badges** - White rounded pills look like every SaaS site
- ❌ **Weak trust badge** - "Powered by enterprise-grade infrastructure" with shield icon is vague and lazy
- ❌ **No visual interest** - Just text on white with dot pattern background
- ❌ **Headline not bold enough** - font-extrabold isn't cutting it, needs MORE impact

**Design Problems:**
```
Current: Safe, centered, lots of whitespace
Problem: Looks like every other B2B SaaS site
Fix needed: Asymmetric layout, bolder typography, visual element
```

**Better Examples:**
- **Stripe:** Gradient background, floating code terminal, dramatic scale
- **Linear:** Ethereal glow effects, product screenshot immediately visible
- **Mercury:** Bold typography (100px headlines), high contrast

**Specific Fixes:**
1. Increase headline size: 60px → 84px desktop
2. Reduce vertical padding: pt-36 → pt-28
3. Add gradient background overlay
4. Replace generic trust badge with something specific
5. Add visual element (mini dashboard preview, not full mockup)

---

### 2. DASHBOARD MOCKUP SECTION
**Score: 3/10** - 🚨 **THIS IS THE PROBLEM CHILD**

**What's Broken (Everything):**
- ❌ **TOO BIG** - Takes up entire viewport, overwhelming
- ❌ **BELOW THE FOLD** - User has to scroll to see it, defeats purpose
- ❌ **CLUTTERED** - Trying to show everything, ends up showing nothing
- ❌ **UGLY PLACEHOLDERS** - Gray bars and skeleton loaders look unfinished
- ❌ **NO FOCUS** - Eye doesn't know where to look first
- ❌ **STATIC** - No animations, no interactivity, just sits there
- ❌ **POOR COLOR USAGE** - All neutral grays, primary blue barely used
- ❌ **FAKE DATA** - "Approval health: Stable" - meaningless placeholder text

**Why It Fails:**
```
Purpose: Show what the product looks like
Reality: Looks like a Figma mockup, not a real product
Problem: If you don't have a product, why fake one?
```

**User's Critique (100% Correct):**
> "It's ugly, it's big for no reason and it's below the fold, so what's the point of it"

**Options:**

**Option A: DELETE IT ENTIRELY**
- Replace with simpler visual: routing diagram, before/after comparison
- Less is more - don't fake what you don't have

**Option B: MOVE TO HERO + SIMPLIFY**
- Show JUST the key visual (payment routing)
- Make it 40% smaller
- Focus on ONE concept, not entire dashboard

**Option C: REPLACE WITH REAL CONCEPT DIAGRAM**
- Show architecture: Checkout → Myce Layer → Multiple Processors
- Use clean lines, minimal design
- Actually explains value instead of faking product

**Recommendation:** **Option C** - Replace with simple architecture diagram that actually explains the concept.

---

### 3. CUSTOMER LOGO CAROUSEL (Now "Proof Blocks")
**Score: 6/10** - Better than before, but still generic

**What Works:**
- ✅ 3-column grid is clean
- ✅ Cards have good shadow/hover states
- ✅ Content is specific (compliance, resilience, observability)

**What's Broken:**
- ❌ **ALL ICONS ARE THE SAME** - Shield icon on every card
- ❌ **"Proof" label is vague** - Proof of what?
- ❌ **Progress bars are decorative** - Not showing real data
- ❌ **White on white** - Border on bg-white is too subtle

**Icon Problem:**
```
Card 1: Shield icon
Card 2: Shield icon
Card 3: Shield icon

This is LAZY. Each card needs unique icon representing its concept:
- Compliance: Lock icon
- Resilience: Network/connection icon
- Observability: Chart/analytics icon
```

**Specific Fixes:**
1. **Different icon per card** - Lock, Network nodes, Bar chart
2. Change "Proof" → "Built-In Capabilities" or remove label
3. Make progress bars show real conceptual data or remove them
4. Add bg-neutral-50 to section background for more contrast

---

### 4. PROBLEM SECTION
**Score: 5/10** - Content good, design lazy

**What Works:**
- ✅ Clear problem articulation
- ✅ Clean layout

**What's Broken:**
- ❌ **ALL WARNING TRIANGLE ICONS** - Same icon repeated 6 times
- ❌ **Centered layout** - Everything centered gets boring
- ❌ **Too much white space** - Section feels empty
- ❌ **No visual hierarchy** - All problems same visual weight

**Icon Laziness:**
```
Problem 1: ⚠️ Warning triangle
Problem 2: ⚠️ Warning triangle
Problem 3: ⚠️ Warning triangle
Problem 4: ⚠️ Warning triangle

Come on. Each problem deserves its own icon:
- Account holds: 🔒 Lock
- Fraud blocking good payments: 🚫 Block
- No recovery: 💔 Broken heart / ↻ No retry
- Geography blocks: 🌍 Globe with X
```

**Better Design Pattern:**
```
Instead of: 2x3 grid of identical cards
Try: Alternating layout with different visual weights
  - Primary problem (large card, full width)
  - Secondary problems (2 columns)
  - Or: Timeline-style vertical flow
```

**Specific Fixes:**
1. **Unique icons** - Different icon per problem
2. **Asymmetric layout** - Featured problem + grid
3. **Add visual separator** - Gradient line or accent color
4. **Reduce padding** - Less vertical space

---

### 5. PROBLEM-SOLUTION FRAMEWORK
**Score: 6.5/10** - Good concept, execution is safe

**What Works:**
- ✅ Clear 3-column structure
- ✅ Color-coded headers (error red → primary blue → success green)
- ✅ Logical progression

**What's Broken:**
- ❌ **Wait, we said no red/green colors!** - This violates 60-30-10 rule
- ❌ **Icons are circular dots** - Low effort, not descriptive
- ❌ **Arrow at bottom is tiny** - Weak visual connection
- ❌ **"Fragile → Resilient" text is small** - Should be more prominent

**Design Inconsistency:**
```
We removed error-500 (red) and success-500 (green) everywhere...
Except here, where icons are red and green.

Either commit to the color system or don't.
```

**Better Approach:**
```
If keeping 3-column:
- Use primary blue for all icons (consistent)
- Differentiate by icon SHAPE not color
- Problems: X icons
- Handles: → Arrow icons
- Solutions: ✓ Check icons

Or use accent cyan for solutions (within our palette)
```

**Specific Fixes:**
1. **Fix colors** - Use primary-500, neutral, accent-500 only
2. **Better icons** - Unique per row, not dots
3. **Larger arrow** - Make progression more obvious
4. **Visual connection** - Connecting lines between columns?

---

### 6. WHAT MYCE DOES (Bento Grid)
**Score: 4/10** - 🚨 **COPIED TREND WITHOUT UNDERSTANDING**

**What's Broken:**
- ❌ **Bento grid for sake of bento grid** - Not serving purpose
- ❌ **Featured card (2-column span) isn't special** - Same content as others, just blue
- ❌ **All icons look similar** - Circle check, rotate icon, shield... generic
- ❌ **"Accent" sections inside cards are cluttered** - Progress bars, mini dashboards inside cards
- ❌ **Trying too hard** - Feels overdesigned with little substance

**The Bento Grid Problem:**
```
WHY use bento grid?
- Linear: Shows different product features visually
- Apple: Showcases diverse content types
- Stripe: Breaks up monotony with varied layouts

Myce's bento grid: 5 capability cards with same structure
Result: Confusing, no clear hierarchy, doesn't add value
```

**What You Should Have:**
```
Simple 2-column grid > Forced bento grid

Why?
- Capabilities are equal weight (no featured item)
- Content is text-based (not visual variety)
- Simpler is better when content is complex
```

**Specific Fixes:**

**Option A: GO BACK TO SIMPLE 2-COLUMN GRID**
- Remove bento complexity
- Equal-sized cards
- Clear, scannable

**Option B: IF KEEPING BENTO, FIX IT**
- Make featured card ACTUALLY special (video? Interactive element?)
- Remove cluttered "accent" sections (progress bars)
- Use 3 cards, not 5 (less is more)

**Option C: COMPLETELY DIFFERENT APPROACH**
- Tabbed interface (hover to see each capability)
- Animated diagram showing capabilities
- Interactive flow chart

**Recommendation:** Option A - Simple 2-column grid. Bento is trendy but wrong here.

---

### 7. IMPLEMENTATION PROCESS
**Score: 7/10** - Best designed section on page

**What Works:**
- ✅ Clear 3-step journey
- ✅ Numbered badges (01, 02, 03)
- ✅ Connecting line between steps
- ✅ Deliverables listed clearly
- ✅ Good use of primary color

**Minor Issues:**
- ⚠️ **Cards could have more visual interest** - Add subtle gradient?
- ⚠️ **Icons inside cards would help** - Clock for timing, tools for setup, rocket for launch
- ⚠️ **CTA at bottom feels tacked on** - Could be more integrated

**This is actually GOOD design.** Clean, clear, functional.

**Improvements:**
1. Add small icon to each deliverable (✓ instead of just bullet)
2. Subtle gradient on numbered badges
3. Integrate CTA better (make it part of the flow, not afterthought)

---

### 8. STRIPE/PAYPAL SECTION (Provider Risk)
**Score: 6/10** - Content good, visual is meh

**What Works:**
- ✅ Alternating layout (visual left, content right)
- ✅ Cards with structured info
- ✅ Diagram showing Myce layer

**What's Broken:**
- ❌ **Lock icon is generic** - Overused
- ❌ **Bullet points all same** - Blue dots again
- ❌ **Diagram is amateur** - Boxes with arrow looks like PowerPoint
- ❌ **Background is neutral-50 on neutral-50** - Low contrast

**The Diagram Problem:**
```
Current: [Myce Layer] → [Your Providers]
Looks like: Basic flowchart from 2010

Should be: Visual representation showing orchestration
- Payment flowing through Myce to multiple endpoints
- Animated lines?
- Network diagram?
- Something more sophisticated
```

**Specific Fixes:**
1. **Better diagram** - Network visualization instead of boxes
2. **Unique icons** - Different icon per risk point
3. **More contrast** - Change section bg to white
4. **Improve cards on right** - Add icons, better visual hierarchy

---

### 9. RESULTS SECTION
**Score: 7/10** - Simple and effective

**What Works:**
- ✅ Large numbers catch attention
- ✅ Clean layout
- ✅ Good color usage (all primary blue now)

**What's Broken:**
- ❌ **Could be more dramatic** - Numbers could be BIGGER
- ❌ **Static** - No count-up animation
- ❌ **Background is plain** - Could have subtle gradient

**Improvements:**
1. Increase number size: 4xl → 6xl
2. Add count-up animation on scroll into view
3. Subtle gradient background
4. Add small icon above each metric

---

### 10. PRICING SECTION
**Score: 6.5/10** - Standard pricing table

**What Works:**
- ✅ Clear 3-tier structure
- ✅ Highlighted "most popular"
- ✅ Feature lists

**What's Broken:**
- ❌ **Checkmark icons (AGAIN!)** - We've seen this icon 50 times
- ❌ **Toggle is non-functional** - Monthly/Yearly toggle does nothing
- ❌ **Cards look identical** - Only difference is border color on featured

**Specific Fixes:**
1. Remove non-functional toggle or make it work
2. Differentiate cards more (featured should POP)
3. Add visual to each tier (icon, illustration)
4. Consider: Remove checkmarks, use different indicator

---

### 11. FAQ SECTION
**Score: 7/10** - Clean and functional

**What Works:**
- ✅ Sidebar + accordion layout (good)
- ✅ Rotation animation on plus icon
- ✅ First question open by default

**Minor Issues:**
- ⚠️ Plus icon is generic
- ⚠️ Could use accent color somewhere
- ⚠️ Left sidebar feels empty (just badge + headline)

**Improvements:**
1. Add small illustration to left sidebar
2. Use accent cyan for open question indicator
3. Add subtle hover states on questions

---

### 12. FINAL CTA
**Score: 8/10** - Best section visually

**What Works:**
- ✅ **FINALLY some visual drama** - Gradient background
- ✅ Strong contrast (white on blue)
- ✅ Clear trust elements
- ✅ Good hierarchy

**Minor Issues:**
- ⚠️ Background pattern is subtle (could be more visible)
- ⚠️ Checkmark icons (again!) in trust elements

**This is what the REST of the site should feel like.**

---

## 🎯 OVERALL DESIGN PROBLEMS

### **Problem 1: ICON LAZINESS** ⚠️ **CRITICAL**

**Icons Used:**
- ✓ Checkmark: ~30 times
- ⚠️ Warning triangle: 6 times
- 🛡️ Shield: 4 times
- • Blue dot: 15 times
- ➕ Plus: 6 times

**This is LAZY DESIGN.**

**Fix:**
Every element deserves its own icon that represents its meaning:
- "Live in 2 weeks" → ⚡ Lightning bolt (speed)
- "24/7 support" → 💬 Chat bubble
- "No dev team" → 🚫 No code icon
- "White-glove" → 🤝 Handshake

Use: [Heroicons](https://heroicons.com/) or [Lucide](https://lucide.dev/) for variety

---

### **Problem 2: NO VISUAL HIERARCHY**

Every section has same weight:
- Same padding (section-spacing)
- Same backgrounds (white or neutral-50)
- Same text sizes
- Same card styles

**Result:** Everything blends together, nothing stands out.

**Fix:**
- Some sections BIG (hero, final CTA)
- Some sections compact (integrations)
- Vary backgrounds (white, neutral-50, primary-500, gradient)
- Different card styles per section

---

### **Problem 3: WASTED SPACE**

Sections are TOO TALL for amount of content:
- Dashboard mockup: Massive, little value
- Problem section: 6 items in huge amount of space
- What Myce Does: 5 cards with tons of padding

**Fix:**
- Reduce vertical padding: py-24 → py-16 on some sections
- Tighter content grouping
- Remove dashboard mockup or replace with compact diagram

---

### **Problem 4: COPIED TRENDS WITHOUT PURPOSE**

**Bento Grid:** Everyone is doing it, so we did it
**Why:** No clear reason, makes content harder to scan

**Dot pattern background:** Stripe/Linear use it
**Why:** Adds texture, but overused now

**Glassmorphism:** Trendy effect
**Why:** Not used effectively, just slapped on

**Fix:** Use design patterns that SERVE YOUR CONTENT, not because they're trendy.

---

### **Problem 5: COLOR USAGE IS TIMID**

60-30-10 rule:
- Primary Blue: Used, but conservatively
- Accent Cyan: BARELY USED (only in dashboard mockup gradients)
- Neutrals: Overused (everything is gray or white)

**Result:** Site feels cold and corporate.

**Fix:**
- Use accent cyan MORE (highlights, badges, CTAs)
- Add gradient overlays (primary → accent)
- Hero could have colored background
- Section dividers with accent color

---

## 📊 SECTION SCORES SUMMARY

| Section | Score | Main Issue |
|---------|-------|------------|
| Hero | 6.5/10 | Too safe, not bold enough |
| Dashboard Mockup | 3/10 | 🚨 Ugly, huge, pointless |
| Proof Blocks | 6/10 | All same icons |
| Problem | 5/10 | Repetitive triangles |
| Problem-Solution | 6.5/10 | Color inconsistency |
| Bento Grid | 4/10 | Trendy without purpose |
| Implementation | 7/10 | Best section (actually good) |
| Provider Risk | 6/10 | Amateur diagram |
| Results | 7/10 | Could be more dramatic |
| Pricing | 6.5/10 | Standard, uninspired |
| FAQ | 7/10 | Clean, functional |
| Final CTA | 8/10 | Finally some visual drama |

**Average: 5.8/10** - Functional but forgettable

---

## 🚀 PRIORITY FIXES (Ranked by Impact)

### **Priority 1: DELETE OR FIX DASHBOARD MOCKUP** ⚡ CRITICAL
**Impact: High | Effort: Medium**

**Current:** Huge, ugly, below fold, cluttered
**Options:**
A) Delete entirely
B) Replace with simple architecture diagram
C) Move to hero + simplify to single concept

**Recommendation:** Replace with clean architecture diagram showing:
```
[Checkout] → [Myce Orchestration Layer] → [Multiple Processors]
                      ↓
              [Recovery | Routing | Analytics]
```

Simple, clean, explains concept, 1/3 the size.

---

### **Priority 2: FIX ICON LAZINESS** ⚡ CRITICAL
**Impact: High | Effort: Low**

**Search entire codebase for:**
```tsx
<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8...
```

This is the checkmark SVG used 30 times.

**Replace with:**
- Speed: Lightning bolt
- Support: Chat bubble
- No dev: Code slash
- PCI: Lock/shield (keep this one)
- Multi-processor: Network nodes
- Recovery: Rotate/refresh
- Routing: Branches/split
- Analytics: Chart bars

**Tools:**
- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/)
- Custom SVGs

---

### **Priority 3: MAKE HERO BOLDER**
**Impact: High | Effort: Low**

**Changes:**
```tsx
// Headline
className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
// TO
className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"

// Font weight
font-extrabold (800)
// TO
font-black (900)

// Add gradient to headline
className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent"
```

**Add gradient background:**
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
```

---

### **Priority 4: SIMPLIFY BENTO GRID**
**Impact: Medium | Effort: Low**

**Current:** 5 cards, complex spans, cluttered accents
**Fix:**
```tsx
// Simple 2-column grid
<div className="grid md:grid-cols-2 gap-6">
  {capabilities.map(cap => (
    <Card icon={cap.icon} title={cap.title} description={cap.description} />
  ))}
</div>
```

No bento, no featured card, no progress bars. Just clean cards.

---

### **Priority 5: ADD VISUAL HIERARCHY**
**Impact: Medium | Effort: Medium**

**Vary section backgrounds:**
```
Hero: Gradient (primary-50 → white → accent-50)
Dashboard/Diagram: white
Proof: neutral-50
Problem: white
Solution Framework: neutral-50
Capabilities: white
Implementation: neutral-50
Provider Risk: white
Results: primary-500 (full color section!)
Pricing: neutral-50
FAQ: white
Final CTA: gradient (primary-500 → primary-700)
```

**Use accent cyan more:**
- Results section: Make numbers accent-500
- Badges: Some use accent instead of primary
- Hover states: accent-500
- Icons: accent-500 for positive/success states

---

### **Priority 6: REDUCE WASTED SPACE**
**Impact: Low | Effort: Low**

```tsx
// Current
className="section-spacing" // py-20 lg:py-24

// New (for compact sections)
className="py-12 lg:py-16" // Tighter
```

Apply to:
- Proof blocks
- Problem section
- Pricing

Keep larger spacing for:
- Hero
- Implementation
- Final CTA

---

## 🎨 DESIGN PRINCIPLES FOR FIXES

### **1. Icons Should Tell Stories**
Every icon should be unique and represent its specific concept.
Bad: ✓ for everything
Good: ⚡ speed, 💬 support, 🔒 security, 📊 analytics

### **2. Hierarchy Through Contrast**
Not all sections equal weight.
- Hero + Final CTA: Big, bold, colorful
- Content sections: Clean, readable, compact
- Proof sections: Medium, informative

### **3. Color Adds Meaning**
- Primary blue: Platform, stability, trust
- Accent cyan: Success, highlights, energy
- Neutrals: Content, readability

### **4. White Space is Strategic**
More space around important things (hero CTA).
Less space around list content (pricing features).

### **5. Trends Serve Purpose**
Don't use bento grid, glassmorphism, or patterns because they're trendy.
Use them IF they serve your content.

---

## 🏆 EXAMPLES OF GREAT DESIGN (Study These)

### **Stripe.com**
- Bold typography (84px headlines)
- Gradient backgrounds
- Product UI immediately visible
- Color used strategically
- Every section feels different

### **Linear.app**
- Ethereal gradients
- Subtle animations everywhere
- Perfect spacing
- Product-focused visuals
- Obsessive attention to detail

### **Mercury.com**
- High contrast design
- Bold, confident typography
- Purple used as accent (not everywhere)
- Clean product screenshots
- Asymmetric layouts

### **Ramp.com**
- Dark mode done right
- Card UI that actually adds value
- Unique icons per feature
- Varied section layouts
- Visual drama

---

## ✅ FINAL VERDICT

**Current State: 5.8/10** - Functional but forgettable

**With Fixes: 8.5/10** - Professional and memorable

**Gap:**
- Dashboard mockup: 3/10 → 8/10 (replace with diagram)
- Icons: 4/10 → 9/10 (unique icons)
- Hero: 6.5/10 → 9/10 (bolder, gradient)
- Bento: 4/10 → 8/10 (simplify to grid)
- Hierarchy: 5/10 → 8/10 (vary backgrounds, use accent)

**Effort Required:**
- Priority 1-3: 6-8 hours (high impact)
- Priority 4-6: 4-6 hours (polish)
- **Total: 10-14 hours to 8.5/10**

---

**Next Steps:**
1. Delete/replace dashboard mockup (2 hours)
2. Icon audit and replacement (3 hours)
3. Hero enhancement (1 hour)
4. Bento → simple grid (1 hour)
5. Color and hierarchy fixes (3 hours)

**Then you'll have a site that looks intentional, not templated.**

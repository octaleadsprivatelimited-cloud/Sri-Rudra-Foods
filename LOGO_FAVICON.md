# Logo & Favicon Guide

## Logo Design Concept

**Sri Rudra Foods** logo should incorporate:
- Chakra/Nature elements (representing traditional Indian values)
- Spice icon (representing the product)
- Modern, clean design
- Brand colors: Saffron Orange (#E65100), Leaf Green (#2E7D32)

## Suggested Design Elements

1. **Chakra Symbol**: Traditional Indian wheel representing dharma and tradition
2. **Spice Icon**: Could be a stylized spice container, masala dabbas, or spice leaves
3. **Typography**: Modern, readable font with Indian aesthetic
4. **Color Scheme**: 
   - Primary: Saffron Orange (#E65100)
   - Secondary: Leaf Green (#2E7D32)
   - Accent: Earth Brown (#8D6E63)

## Implementation

### Option 1: Use Online Logo Generator
1. Visit [Canva](https://www.canva.com) or [LogoMaker](https://www.logomaker.com)
2. Create logo with suggested elements
3. Export as PNG (transparent background) and SVG

### Option 2: Hire a Designer
- Use platforms like Fiverr, 99designs, or Upwork
- Provide brand guidelines and color scheme
- Request multiple formats: PNG, SVG, favicon

### Option 3: AI Logo Generator
- Use AI tools like [Looka](https://looka.com) or [Brandmark](https://brandmark.io)
- Input: "Sri Rudra Foods - Indian Spices - Chakra Nature Spice Icon"

## File Requirements

Once you have the logo:

1. **Main Logo**: 
   - Size: 200x200px minimum
   - Format: PNG (transparent) or SVG
   - Place in: `frontend/public/logo.png`

2. **Favicon**:
   - Size: 32x32px, 64x64px, 128x128px
   - Format: ICO or PNG
   - Place in: `frontend/public/favicon.ico` or `frontend/public/favicon.png`

3. **Update HTML**:
   - Update `frontend/index.html` with favicon link:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   ```

4. **Update Navbar**:
   - Replace placeholder logo in `frontend/src/components/Navbar.jsx`:
   ```jsx
   <img src="/logo.png" alt="Sri Rudra Foods" className="h-10" />
   ```

## Temporary Placeholder

Currently using a simple colored circle with "SR" initials. Replace this with your actual logo once ready.

## Color Palette Reference

- **Saffron Orange**: #E65100 - Primary brand color
- **Leaf Green**: #2E7D32 - Secondary, represents freshness/organic
- **White**: #FFFFFF - Clean, modern
- **Earth Brown**: #8D6E63 - Accent, represents natural/grounded


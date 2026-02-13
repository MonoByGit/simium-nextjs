# Simium Website Guidelines

## Typography System

### Font Sizes
- **Base font size**: 14px (set in html element)
- **Paragraph text**: 16px for all paragraphs in sections
- **Headings**: Use Madimi One font family with predefined sizes
- **Body text**: Use Inter font family 
- **Buttons**: 14px font size

### Important Rules
- **ALL paragraph text in sections must be 16px** - This is controlled by the CSS variable `--text-header-p: 1rem`
- Never override paragraph sizes in sections - they should remain consistent at 16px
- Headings use Madimi One font, body text uses Inter
- Maintain the established hierarchy: h1 (24px), h2 (28px), h3 (18px), h4 (16px)

## Dark Mode System

### Implementation
- Comprehensive dark mode system with automatic conversion
- All pages fully compatible with both light and dark modes
- CSS-based system with utility classes for consistent behavior

### Color Scheme
- **Scan colors**: Blue (Cashflow), Green (Cloud costs), Purple (Pricing strategy)
- **Dark backgrounds**: Gray-800 for cards, Gray-900 for main background
- **Text colors**: White for headings, Gray-200/300 for body text in dark mode

## Button Guidelines

### Styling
- **Regular buttons**: No borders, filled backgrounds
- **Outline buttons**: White borders only, transparent backgrounds
- **Interactive states**: Proper hover and selected states for all color variants
- **Dark mode**: Automatic border management (only outline buttons get borders)

## Form Elements

### Dark Mode Compatibility
- All inputs, selects, and textareas have proper dark mode styling
- Consistent placeholder colors and focus states
- Form validation and disabled states properly styled

## Layout & Structure

### Page Architecture
- 16 core pages maximum for optimal user experience
- Clear user journey: Discovery → Free Scan → Premium Analysis → Results
- Responsive design for all screen sizes
- Consistent spacing and typography throughout

### Navigation
- Mobile-responsive navigation system
- Dark mode toggle integration
- Clear scan type differentiation with color coding
- **Consistency rule**: All navigation links must lead to unique pages - no duplicate links to same content
- **Footer structure**: 4 logical sections (Scans, Bedrijf, Support, Company info)

## Code Quality

### Guidelines
- Keep components modular and reusable  
- Use TypeScript for type safety
- Follow established naming conventions
- Maintain dark mode compatibility in all new components
- Use CSS variables for consistent theming
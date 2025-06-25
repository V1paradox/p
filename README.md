# P.O.V.N - Optical Shop Management System Homepage

A modern, responsive homepage interface for the P.O.V.N Optical Shop Management System. This project features a clean, professional design with comprehensive support for both light/dark themes and bilingual content (English/Arabic) with proper RTL layout support.

## Features

### 🎨 Design & UI
- **Modern Card-Based Layout**: Clean, professional interface with subtle shadows and rounded corners
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Smooth Animations**: Subtle hover effects and scroll-based reveal animations
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### 🌓 Theme Support
- **Light Mode**: Clean white background with dark text and green accents
- **Dark Mode**: Dark teal background with white text and emerald accents
- **Persistent Settings**: Theme preference saved in localStorage
- **Keyboard Shortcut**: Ctrl/Cmd + Shift + T to toggle theme

### 🌍 Internationalization
- **Bilingual Support**: English and Arabic language switching
- **RTL Layout**: Proper right-to-left layout for Arabic content
- **Dynamic Content**: All text updates dynamically without page reload
- **Persistent Settings**: Language preference saved in localStorage
- **Keyboard Shortcut**: Ctrl/Cmd + Shift + L to toggle language

### 📱 Responsive Sections

1. **Navigation Bar**
   - Sticky header with logo and navigation links
   - Theme and language toggles
   - Adapts to RTL layout for Arabic

2. **Hero Section**
   - Centered card with main title and call-to-action
   - Animated background with optical-themed shapes
   - Responsive typography

3. **Key Features**
   - 4-card grid showcasing main features
   - Icons and descriptions for each feature
   - Hover effects and responsive layout

4. **How It Works**
   - 4-step process visualization
   - Numbered steps with icons
   - Horizontal layout on desktop, vertical on mobile

5. **Product Preview**
   - Mockup placeholders for app screens
   - Grid layout with hover effects
   - Responsive card design

6. **Call to Action**
   - Final conversion section
   - Gradient background
   - Prominent action button

7. **Footer**
   - Quick links and social media icons
   - Theme and language controls
   - Copyright information

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS with themes and responsive design
├── script.js           # JavaScript for interactivity and theme/language switching
└── README.md           # This documentation file
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The page will load with default light theme and English language

### Usage

#### Theme Switching
- Click the moon/sun icon in the navigation bar
- Use keyboard shortcut: `Ctrl/Cmd + Shift + T`
- Theme preference is automatically saved

#### Language Switching
- Click the "EN"/"AR" button in the navigation bar
- Use keyboard shortcut: `Ctrl/Cmd + Shift + L`
- Layout automatically switches to RTL for Arabic
- Language preference is automatically saved

#### Mobile Navigation
- Navigation menu is hidden on mobile devices
- Theme and language controls remain accessible
- All sections stack vertically for optimal mobile viewing

## Technical Details

### CSS Features
- **CSS Custom Properties**: For theme variables and easy customization
- **CSS Grid & Flexbox**: For responsive layouts
- **Media Queries**: Mobile-first responsive design
- **RTL Support**: Proper right-to-left layout handling
- **Smooth Transitions**: For theme switching and hover effects

### JavaScript Features
- **Theme Management**: Dynamic theme switching with localStorage persistence
- **Language Management**: Dynamic content updates with RTL support
- **Scroll Animations**: Intersection Observer for performance-optimized animations
- **Accessibility**: Keyboard navigation support and reduced motion respect
- **Error Handling**: Safe element selection and graceful degradation

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:

```css
/* Light Mode */
.light-mode {
    --accent-primary: #28a745;    /* Primary green */
    --accent-secondary: #20c997;  /* Secondary teal */
    /* ... other colors */
}

/* Dark Mode */
.dark-mode {
    --accent-primary: #38b2ac;    /* Primary teal */
    --accent-secondary: #4fd1c7;  /* Secondary cyan */
    /* ... other colors */
}
```

### Content
Update text content by modifying the `data-en` and `data-ar` attributes in `index.html`:

```html
<h1 data-en="English Text" data-ar="النص العربي">English Text</h1>
```

### Adding Languages
1. Add new data attributes to HTML elements (e.g., `data-fr` for French)
2. Update the `translations` object in `script.js`
3. Modify the `setLanguage()` function to handle the new language

## Performance Considerations

- **Optimized Animations**: Uses Intersection Observer for scroll-based animations
- **Debounced Events**: Scroll events are debounced for better performance
- **Reduced Motion**: Respects user's motion preferences
- **Minimal Dependencies**: No external JavaScript libraries required

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **High Contrast**: Proper contrast ratios in both light and dark modes
- **Screen Reader Support**: Semantic HTML structure
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Focus Indicators**: Clear focus states for all interactive elements

## Future Enhancements

- Mobile hamburger menu for navigation
- Additional language support (French, Spanish, etc.)
- Advanced animations and micro-interactions
- Integration with actual backend API
- Progressive Web App (PWA) features

## License

© 2025 P.O.V.N. All rights reserved.

## Support

For questions or support, please contact the development team.
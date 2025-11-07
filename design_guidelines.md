# Design Guidelines: Site Institucional Ademicon Consórcios

## Design Approach
**Reference-Based**: Financial trust and credibility (inspired by Nubank's approachability + traditional banking trust). Clean, professional aesthetic that builds confidence while remaining accessible.

## Color Palette (User-Specified)
- **Primary**: #670f22 (Deep burgundy/wine)
- **Secondary**: White (#FFFFFF)
- **Usage**: Burgundy for headers, CTAs, and trust elements. White backgrounds with burgundy accents for contrast and readability.

## Typography
- **Primary Font**: Montserrat (Google Fonts) - Headers and CTAs
- **Secondary Font**: Open Sans (Google Fonts) - Body text
- **Hierarchy**:
  - H1: 3xl-4xl, bold, burgundy
  - H2: 2xl-3xl, semibold, burgundy
  - H3: xl-2xl, semibold
  - Body: base-lg, regular
  - CTA Buttons: lg, bold, uppercase

## Layout System
**Spacing Units**: Tailwind 4, 8, 12, 16, 24 (p-4, mb-8, py-12, etc.)
- Page sections: py-16 to py-24
- Component spacing: gap-8 to gap-12
- Container: max-w-7xl with px-4

## Component Library

### Navigation
- Fixed header with white background, burgundy logo/text
- Sticky on scroll with subtle shadow
- Links: Home | Produtos | Sobre Nós | Como Funciona | FAQ | Contato
- CTA button (burgundy background, white text) in nav: "Simular Grátis"

### Hero Section (Home Page)
- **Large Hero Image**: Professional imagery showing happy family/couple in front of new home or car (represents dream fulfillment)
- Dark overlay (opacity-40) over image for text contrast
- Centered content with:
  - Main headline: "Realize seus sonhos sem juros"
  - Subheading: Partnership description with Ademicon
  - Large CTA button with blurred background
  - Trust badges below: Ademicon logo + Banco Central seal

### Product Cards (3-column grid on desktop, stack on mobile)
- White cards with subtle shadow
- Large icons (house, car, briefcase) in burgundy
- Title, 2-3 benefit bullets
- "Simular" button (burgundy, outlined)
- Hover: subtle lift effect

### Trust Section
- 2-column layout: Left = photos of Odair and Jayme (professional, approachable), Right = mission text
- White background with burgundy accents
- Names and roles clearly displayed

### How It Works (Step-by-step)
- 5 steps in horizontal timeline (desktop) / vertical (mobile)
- Numbered circles (burgundy) connected by lines
- Icon + Title + Brief description for each step
- Clean, educational visual flow

### FAQ Section
- Accordion-style expandable items
- Burgundy headers, white content areas
- Arrow icons for expand/collapse
- 6-8 most common questions

### Contact/Simulation Form
- 2-column layout: Form (left 60%) + Contact info (right 40%)
- Form fields: Clean white inputs with burgundy borders on focus
- Large submit button (burgundy, full-width)
- WhatsApp direct link with prominent green icon
- Phone and email clearly visible

### Footer
- Burgundy background, white text
- 3 columns: Company info | Quick links | Social/Contact
- Legal disclaimers in smaller text
- Ademicon partnership logo

## Images
**Required Images**:
1. **Hero (Home)**: High-quality lifestyle image - family/couple with keys to new home or car, expressing joy (1920x800px minimum)
2. **About Section**: Professional photo of Odair José Carvalho and Jayme Gabriel Carvalho (headshots or business casual setting)
3. **Product Icons**: House, car, briefcase (use Font Awesome solid icons)
4. **Trust Badges**: Ademicon logo, Banco Central seal

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- 3-column grids → 2-column → 1-column
- Hero text scales down appropriately
- Navigation collapses to hamburger menu on mobile

## Call-to-Action Strategy
**Primary CTA**: "FAÇA UMA SIMULAÇÃO GRÁTIS" (burgundy background, white text, bold)
**Secondary CTA**: "Simular [Produto]" (burgundy outline, burgundy text)
- Buttons with blurred backgrounds when over images
- No custom hover states needed (default handles it)

## Page-Specific Notes
- **Home**: Hero + Products grid + Brief about + CTA section
- **Produtos**: 3 dedicated sections (Imóveis, Veículos, Serviços) with detailed benefits
- **Sobre Nós**: Photo + story + mission/vision/values in clean cards
- **Como Funciona**: Educational timeline with clear visuals
- **FAQ**: 8-10 questions in accordion format
- **Contato**: Prominent form with WhatsApp integration

**Key Principle**: Professional credibility meets approachable service. Every element should reinforce trust while making contact effortless.
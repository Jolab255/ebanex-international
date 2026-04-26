

# Ebanex International

A modern React + TypeScript single-page application for Ebanex International, delivering professional development, cybersecurity training, and institutional advisory services.

## Tech Stack

- **Frontend Framework:** React 19.2.4 with TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Routing:** React Router DOM 7.13.0 (HashRouter)
- **Styling:** Tailwind CSS 4.1.18
- **Animations:** Framer Motion 12.34.0, Lenis (smooth scroll)
- **3D Graphics:** Three.js, @react-three/fiber, cobe (globe)
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library
- **Linting/Formatting:** ESLint + Prettier

## Project Structure

```
src/
├── components/          # Shared UI components (Navbar, Footer, etc.)
│   ├── layout/         # Layout components (ScrollToTop, Footer)
│   └── ui/              # Reusable UI primitives (Globe, carousel, etc.)
├── features/            # Feature-based organization
│   └── home/            # Home page feature components
│       ├── components/  # Feature-specific sub-components
│       └── *.tsx        # Section components (Hero, Services, etc.)
├── lib/                 # Utilities and shared logic
│   ├── api.ts          # Central API/service layer
│   └── utils.ts        # Helper functions
├── pages/               # Page-level components
├── types/               # TypeScript type definitions
└── constants.tsx        # Static data and constants
```

## Getting Started

### Prerequisites

- Node.js 22+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ebanex-international
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run test suite (Vitest)
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without modifying files

## Environment Variables

**Important:** This is a frontend-only application. Any API keys or secrets must be handled by a backend/proxy service, not exposed in the client bundle.

If you need to add environment variables for public configuration (e.g., feature flags, public API endpoints), create a `.env.local` file:

```env
# Example: Public configuration only
VITE_API_BASE_URL=https://api.example.com
```

**Never commit secrets or private API keys to this repository.** All sensitive operations should be routed through a backend service.

## Architecture

### Code Organization

- **Feature-based structure:** Components are organized by feature (e.g., `features/home/`) rather than by type
- **Centralized API layer:** All network calls go through `src/lib/api.ts` for easy backend integration
- **Type safety:** Shared types are defined in `src/types/` to ensure consistency
- **Error boundaries:** Routes are wrapped with error boundaries to prevent full app crashes

### Performance Optimizations

- **Route-based code splitting:** Pages are lazy-loaded using `React.lazy()` and `Suspense`
- **Image lazy loading:** Non-critical images use `loading="lazy"` attribute
- **Animation cleanup:** Animation frames and listeners are properly cleaned up in `useEffect` hooks

### Testing

Tests are located alongside components using the `*.test.tsx` naming convention. The test suite uses:

- **Vitest** for test runner
- **React Testing Library** for component testing
- **jsdom** for DOM simulation

Run tests with `npm test` or `npm test -- --watch` for watch mode.

## Contributing

### Code Standards

- **TypeScript:** Use proper types; avoid `any` without justification
- **Formatting:** Code is automatically formatted with Prettier
- **Linting:** ESLint rules are enforced; fix lint errors before committing
- **Testing:** Add tests for new features and components

### Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` and `npm test` to ensure everything passes
4. Commit with clear, descriptive messages
5. Open a pull request

### Pull Request Checklist

- [ ] Code passes linting (`npm run lint`)
- [ ] Tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Code follows project conventions

## Deployment

The application builds to static files in the `dist/` directory. Deploy the contents of `dist/` to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run build
# Deploy the dist/ directory
```

## License

[Add your license information here]


about website instructions....

EBANEX INTERNATIONAL – WEBSITE STRUCTURE & CONTENT FRAMEWORK
1. HOME PAGE
(Primary brand positioning and conversion page)
HERO SECTION (Top Banner)
Main Heading
Empowering People. Strengthening Organizations. Securing the Future.
Sub-heading
"Ebanex International is a global training and advisory firm delivering professional development, cybersecurity training, digital transformation capacity building, and institutional strengthening solutions across industries."
Call-To-Action Buttons
     View Training Programs
     Partner With Us
     Request Corporate Training
     Contact Us
Visual Direction
     Corporate training environment
     Cybersecurity and digital transformation themed visuals
     Diverse global professionals and institutional settings
WHO WE ARE
"Ebanex International is a multidisciplinary consulting and training firm focused on building skilled professionals, resilient institutions, and digitally secure organizations."
"Founded by professionals with strong expertise in information technology, cybersecurity, training, and organizational development, Ebanex provides practical, industry-aligned learning and advisory solutions tailored to institutional needs."
"We combine technical expertise, leadership development, and institutional capacity building to help organizations adapt, grow, and thrive in an evolving digital environment."
WHY EBANEX INTERNATIONAL
     Multidisciplinary global training capability
     Strong cybersecurity and digital transformation expertise
     Practical and hands-on learning methodology
     Sector-customized training solutions
     Institutional capacity-building capability
     Global outlook with strong local implementation capacity
OUR CORE SERVICES (Overview)
Capacity Building & Professional Development
Strengthening workforce competencies and institutional performance through targeted training programs.
Cybersecurity & Digital Skills
Equipping professionals and institutions with practical knowledge and defensive strategies in digital environments.
Leadership & Organizational Development
"Developing leaders, teams, and effective workplace cultures that drive institutional growth."
Institutional Advisory & Consulting
"Supporting organizations with strategy development, governance strengthening, and performance optimization."
OUR TRAINING APPROACH
"     Practical, results-driven learning"
     Industry-specific training design
     Hands-on labs and simulations
     Hybrid and flexible training delivery
     Train-the-Trainer institutional knowledge transfer programs
OUR CLIENTS
We serve a diverse client base including:
     Governments and public institutions
     Private sector organizations
     NGOs and development agencies
"     Industrial, mining, and manufacturing companies"
     Financial and service sector organizations
     Individual professionals
TESTIMONIALS & IMPACT SECTION
(Placeholder for future success stories and client testimonials)
PARTNERS & ACCREDITATION SECTION
(Placeholder for institutional and strategic partners)
CALL TO ACTION
Ready to strengthen your workforce and secure your organization?
    Explore Training Programs
    Request Institutional Training
2. ABOUT US PAGE
About Ebanex International
"Ebanex International is a global consulting and training firm specializing in professional capacity building, cybersecurity training, digital transformation, and institutional strengthening."
"We support governments, organizations, and professionals through high- quality training, advisory services, and knowledge transfer programs designed to deliver measurable results and long-term institutional impact."
Our Vision
"To become a globally respected consulting and training partner for capacity building, organizational development, and digital resilience."
Our Mission
"To empower governments, organizations, and institutions worldwide through high-quality training, advisory services, and capacity-building solutions that enhance performance, resilience, and sustainable growth."
Our Core Values
     Excellence
     Integrity
     Innovation
     Professionalism
     Impact
     Global Collaboration
Founders’ Message (Recommended Section)
"A leadership message highlighting the vision behind the establishment of Ebanex International, commitment to skills development, and dedication to strengthening institutions globally."
(Developer to include professional founder profiles and photographs.)
Our Strategic Focus
     Technology-led capacity building
     Cybersecurity and digital resilience
     Leadership and workforce development
     Institutional strengthening
3. TRAINING PROGRAMS PAGE
(Primary revenue generation page)
Overview
"Ebanex International delivers industry-aligned training programs designed to develop technical competence, leadership capability, and institutional effectiveness across sectors."
Training Categories
Cybersecurity & Information Security Training
     Cybersecurity awareness programs
     Ethical hacking and threat intelligence
     Digital risk management
     Incident response training
     Data privacy and protection
IT & Digital Skills Training
     Networking and infrastructure training
     Cloud computing and virtualization
     Artificial intelligence and emerging technologies
     Digital transformation skills
     Systems administration
"Governance, Risk & Compliance Training"
     IT governance and digital governance
     Enterprise risk management
     Internal audit and assurance training
     Regulatory compliance and standards training
Leadership & Professional Development
     Leadership and management skills
     Strategic thinking and decision-making
     Communication and workplace effectiveness
     Team development and collaboration
Certification Preparation Programs
     Certified Information Systems Auditor (CISA)
     Certified Information Security Manager (CISM)
     Certified Information Systems Security Professional (CISSP)
     Certified Ethical Hacker (CEH)
     Cisco Certified Network Associate (CCNA)
     Cisco Certified Network Professional (CCNP)
     Certified Data Privacy Solutions Engineer (CDPSE)
     Certified Internal Auditor (CIA)
     Certification in Risk Management Assurance (CRMA)
Training Delivery Methods
     Instructor-led classroom training
     Virtual live training
     Hybrid training models
     Corporate in-house training
     Bootcamps and short courses
Request Training Button
4. CORPORATE & INSTITUTIONAL SOLUTIONS PAGE
Institutional Training & Advisory
Ebanex International partners with organizations to design and deliver customized capacity-building and advisory solutions aligned with institutional strategies and workforce development goals.
Services Include
     Training needs assessments
     Workforce upskilling and reskilling programs
     Digital transformation advisory
     Organizational risk and resilience training
     Leadership and executive development programs
     Train-the-Trainer institutional programs
Industries Served
     Government and public sector institutions
     Financial institutions
     Mining and industrial sector
     Telecommunications industry
     Energy and infrastructure sector
     Development and non-profit organizations
5. CYBER LAB & APPLIED LEARNING PAGE
Hands-On Technical Learning
Ebanex International provides simulated learning environments where professionals develop real-world technical skills through practical application and scenario-based learning.
Lab Capabilities
     Cybersecurity simulation environments
     Enterprise IT infrastructure labs
     Risk and audit simulation case studies
     Incident response simulation exercises
6. CONSULTING & ADVISORY PAGE
Strategic Consulting Services
"Ebanex International supports organizations in strengthening governance frameworks, operational systems, and institutional performance."
Advisory Areas
     Digital transformation strategy development
     Governance and risk advisory
     Capacity building and workforce development strategy
     Organizational development and institutional strengthening
     Technology implementation advisory
7. RESEARCH & INSIGHTS PAGE
(Enhances institutional authority and search engine visibility)
Knowledge and Thought Leadership
     Industry research publications
     Cybersecurity trend analysis
     Professional articles and technical insights
     Training whitepapers
     Institutional capacity-building research
8. PARTNERSHIPS PAGE
Strategic Collaboration
Ebanex International collaborates with:
     International certification bodies
     Universities and academic institutions
     Technology vendors and solution providers
     Professional training institutions
     Development agencies and international organizations
9. CAREERS PAGE
Join Ebanex International
Opportunities include:
     Professional trainers and instructors
     Consulting specialists
     Internship and graduate trainee programs
10. NEWS & EVENTS PAGE
     Training announcements
     Webinars and online seminars
     Conferences and professional forums
     Industry updates and institutional activities
11. CONTACT PAGE
Contact Information
"Office Location (HQ) – 19 Mori Street, Sinza, Dar es Salaam, Tanzania Phone Contacts - +255 745 326 627 / +255 703 027 412"
Email Addresses - Social Media Platforms -
Inquiry Form
     Full Name
     Organization
     Training Interest
     Message
SPECIAL WEBSITE FEATURES
     Learning Management System (Future Integration)
     Online Course Registration System
     Corporate Training Request Portal
     Trainer Profiles and Credentials
     Accreditation and Certification Section
     Resource Library and Knowledge Hub
     Blog and Industry Insight Platform
     Newsletter Subscription
     Live Chat or AI Assistant
     Student and Client Portal
SEARCH ENGINE OPTIMIZATION KEYWORDS
Developer should strategically incorporate:
     Cybersecurity training Tanzania
     IT certification training East Africa
     Capacity building consulting Africa
     Digital transformation training
     Professional development institute Tanzania
WEBSITE NAVIGATION MENU STRUCTURE
Home About Us
Training Programs Corporate Solutions Consulting & Advisory Cyber Labs
Research & Insights Partnerships
Careers
News & Events Contact
WEBSITE DESIGN AND BRAND STYLE GUIDELINES
     Corporate global institutional appearance
"     Clean and modern minimal design (Device independent-should be compatible/visible in laptop, taps, phones...)"
     Technology-oriented color palette (Blue / Digital Security themes) –
Developer can advice
     Professional institutional imagery
     Clear and authoritative typograph
FUTURE SCALABILITY REQUIREMENTS
Website should support future expansion including:
     Online learning platform integration
     Certification examination center integration
     Client and student portals
     Multi-country and regional expansion capability
     ePayment Solutions (Card Payments) to allow clients to make ePayments for different programs Ebanex offers
GLOBAL BENCHMARK INSTITUTIONS
Ebanex website design and positioning should align with standards demonstrated by:
     ISACA
     SANS Institute
     Infosec Institute
     Emerson Training Solutions
     Deloitte Academy
     PwC Academy
ADVANCED PROFESSIONAL POSITIONING FEATURES
Recommended for long-term credibility:
     Impact and performance statistics section
     Global reach and training coverage map
     Trainer credential and certification showcase
     Accreditation and institutional growth timeline

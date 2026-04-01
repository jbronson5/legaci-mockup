# Legaci Platform - Next.js Mockup/Prototype

A comprehensive UI mockup of the Legaci portfolio management platform built with Next.js, TypeScript, and modern CSS.

## Features

### 4 Primary User Roles
- **HoldCo Leadership** (👔) - Portfolio oversight, capital allocation, investor relations
- **Portfolio Company President** (🏢) - Company dashboard, KPIs, operations management
- **Portfolio Company Employee** (👤) - Profit share tracking, financial literacy, SOPs
- **External Platform Customer** (🌐) - Managed services, platform features

### 7 Key Modules (with role-based access)

1. **AI Deal Engine** - Deal flow dashboard, pipeline analysis, deal management
2. **AI Underwriting** - Investment memo templates, automated analysis
3. **Diligence & Closing** - Document management, closing workflows
4. **Financial Dashboard** - P&L, cash flow, EBITDA, KPI tracking
5. **SOP Management** - Standard operating procedures library
6. **HR System** - Employee directory, compensation, engagement
7. **Investor Relations Portal** - Investor communications, updates, portfolio ROI

### Design Features

- **Professional institutional UI** - Clean, modern design for PE/CFO professionals
- **Interactive role selector** - Switch between user types to see different modules
- **Responsive layout** - Sidebar navigation, header with controls
- **Sample data** - Financial charts, deal pipelines, KPI dashboards
- **Role-based access** - Each role sees only their available modules
- **Rich visualizations** - Revenue trends, EBITDA margins, cash flow analysis, deal pipelines
- **Data tables** - Deal lists, document management, employee directory, investor portfolio

## Technology Stack

- **Framework**: Next.js 16+ (TypeScript)
- **Styling**: CSS (no framework - pure CSS with variables)
- **Charts**: Recharts for financial visualizations
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main dashboard/home
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── modules/
│       ├── deal-engine/
│       ├── financial/
│       ├── underwriting/
│       ├── diligence/
│       ├── sops/
│       ├── hr/
│       └── investor-relations/
├── components/
│   ├── Sidebar.tsx           # Role-based navigation
│   ├── Header.tsx            # Role selector & controls
│   ├── DashboardCard.tsx     # KPI card component
│   └── Charts.tsx            # Financial visualizations
└── lib/
    └── roles.ts              # Role and module definitions
```

## Running Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd legaci-mockup

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI (Easiest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel (creates account if needed)
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Connect GitHub Repository

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings (default settings work fine)
6. Click "Deploy"

### Option 3: Using Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..."
3. Select "Project"
4. Choose "Other Git Repository" and paste the git URL
5. Configure and deploy

## Usage Guide

### Home Page
- Welcome screen with quick access to all modules
- Feature highlights
- Choose your role from the dropdown

### Role Switching
- Use the role selector in the header to switch between user types
- The sidebar automatically updates to show accessible modules
- Page content reflects the current role's context

### Module Exploration
- **Deal Engine**: Browse active deals, view pipeline by stage
- **Financial Dashboard**: View revenue trends, EBITDA, cash flow, portfolio composition
- **AI Underwriting**: Explore investment memo templates and recent memos
- **Diligence & Closing**: Browse document categories and status
- **SOPs**: Search and filter standard operating procedures
- **HR System**: View department budgets, employee directory, compensation
- **Investor Relations**: See investor communications and portfolio ROI

### Sample Data
All data is mock/hardcoded for demonstration purposes:
- Revenue ranges: $1-$2M per company
- Deal values: $2.5M-$15.3M
- Team sizes: 4-24 per department
- Portfolio companies across multiple industries

## Customization

### Adding New Modules

1. Create new module in `src/lib/roles.ts` (update MODULES object)
2. Add module to MODULE_ACCESS for relevant roles
3. Create page at `src/app/modules/[slug]/page.tsx`
4. Use existing components (Sidebar, Header, DashboardCard)

### Changing Colors

Edit color variables in `src/app/globals.css`:
```css
:root {
  --slate-50: #f8fafc;
  --blue-600: #2563eb;
  /* ... */
}
```

### Adding Charts

Use Recharts components in `src/components/Charts.tsx`:
```tsx
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    {/* chart content */}
  </BarChart>
</ResponsiveContainer>
```

## Performance

- **Turbopack**: Enabled for fast builds
- **Static generation**: All pages pre-rendered for instant load
- **Optimized images**: Using Next.js Image component ready
- **Code splitting**: Automatic per-route

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Next Steps for Full Development

This mockup provides:
- ✅ Complete visual design
- ✅ Module structure and navigation
- ✅ Role-based UI rendering
- ✅ Sample data and visualizations
- ✅ Professional, institutional look

For full production deployment, add:
- Backend API integration
- Database (PostgreSQL, MongoDB, etc.)
- Authentication (OAuth, JWT, etc.)
- Real financial data ingestion
- Document upload/storage
- Real-time notifications
- Multi-tenant support

## Notes

- All data is mock/hardcoded for demonstration
- No backend API calls (ready for integration)
- Navigation is functional but doesn't persist state
- Charts use sample data - ready to connect to live data feeds
- Responsive design supports mobile/tablet (primary focus on desktop)

## License

Proprietary - Legaci Platform

## Support

For questions or modifications, contact the development team.

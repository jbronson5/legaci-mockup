# Legaci Platform Mockup - Quick Start

## 🚀 Get Running in 2 Minutes

### 1. Install & Run
```bash
npm install
npm run dev
```

### 2. Open in Browser
```
http://localhost:3000
```

### 3. Start Exploring
- Select a user role from the dropdown in the header
- Navigate modules from the left sidebar
- Each role sees different modules and content

---

## 🎯 What to Try

### HoldCo Leadership (👔)
- **Available Modules**: Deal Engine, Financial Dashboard, Investor Relations
- **See**: Portfolio overview, deal pipeline, investor communications
- **Try**: View Q4 portfolio performance, check deal pipeline stages

### Portfolio Company President (🏢)
- **Available Modules**: All except Investor Relations
- **See**: Company operations, financial metrics, employee data
- **Try**: Check revenue trends, EBITDA margins, department budgets

### Employee (👤)
- **Available Modules**: Financial Dashboard, SOPs, HR, Investor Relations
- **See**: Profit share info, procedures, compensation
- **Try**: Browse SOPs, view profit share allocation, check company financials

### External Customer (🌐)
- **Available Modules**: Deal Engine, Financial Dashboard, Diligence, SOPs
- **See**: Managed services, document status, deal flow
- **Try**: Check document completeness, browse deal pipeline

---

## 📊 Module Overview

### 1. AI Deal Engine
```
📍 /modules/deal-engine
Shows: Pipeline analysis, deal stages, deal values
Demo: 5 active deals from $2.5M to $15.3M
Try: Check deal stage transitions, view deal details
```

### 2. AI Underwriting
```
📍 /modules/underwriting
Shows: Investment memo templates, analysis status
Demo: 4 investment memos at various completion stages
Try: Explore memo sections, check analyst assignments
```

### 3. Diligence & Closing
```
📍 /modules/diligence
Shows: Document management, category breakdown
Demo: 8 document categories, 48 total documents
Try: Filter by category, check document status
```

### 4. Financial Dashboard
```
📍 /modules/financial
Shows: Revenue, EBITDA, cash flow, portfolio charts
Demo: 6 months of financial data with trends
Try: Hover over charts, view portfolio composition
```

### 5. SOP Management
```
📍 /modules/sops
Shows: Procedures library, categories, version control
Demo: 52 SOPs across 6 categories
Try: Search SOPs, filter by category
```

### 6. HR System
```
📍 /modules/hr
Shows: Employee directory, departments, compensation
Demo: 81 employees, 6 departments
Try: Check profit share allocation, view budgets
```

### 7. Investor Relations
```
📍 /modules/investor-relations
Shows: Communications, investor portfolio, ROI
Demo: 32 investors, $485M commitments, +20% avg ROI
Try: View communications log, check investor details
```

---

## 🎨 UI Features to Notice

### Dashboard Cards
- KPI metrics with trend indicators
- Color-coded trends (green=positive, red=negative)
- Responsive grid layout

### Charts
- Interactive Recharts visualizations
- Revenue trends, EBITDA margins, cash flow
- Deal pipeline stage distribution
- Portfolio composition pie chart

### Tables
- Sortable data presentation
- Status badges (color-coded)
- Action buttons
- Responsive scrolling

### Navigation
- Role-based sidebar (updates per role)
- Persistent header with controls
- Professional color scheme (blues, grays, greens)

---

## 💾 Building for Production

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel (GitHub recommended)
```bash
# Push to GitHub first
git push origin main

# Then deploy via vercel.com/new
# Select your GitHub repo → Deploy
```

See `DEPLOYMENT.md` for detailed instructions.

---

## 🔧 Code Structure

### Key Files
```
src/
├── app/page.tsx                    # Home dashboard
├── app/globals.css                 # Styling
├── lib/roles.ts                    # User roles, modules, access control
├── components/
│   ├── Header.tsx                  # Role selector
│   ├── Sidebar.tsx                 # Module navigation
│   ├── DashboardCard.tsx           # KPI cards
│   └── Charts.tsx                  # Financial charts
└── modules/*/page.tsx              # Module pages
```

### Adding a New Module

1. **Define in `src/lib/roles.ts`:**
```typescript
MODULES: {
  10: {
    name: 'New Module',
    description: 'Description',
    slug: 'new-module',
  }
}

// Add to roles that can access it:
MODULE_ACCESS: {
  holdco: [..., 10],
  'company-president': [..., 10],
}
```

2. **Create page at `src/app/modules/new-module/page.tsx`:**
```tsx
export default function NewModule() {
  const [role, setRole] = useState<UserRole>('holdco');
  
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        <main>
          {/* Your content here */}
        </main>
      </div>
    </div>
  );
}
```

---

## 🎯 Common Tasks

### Change Colors
Edit `src/app/globals.css` `:root` CSS variables

### Update Sample Data
Edit arrays in individual module pages (each page has hardcoded data)

### Add New KPI Metrics
Use `<DashboardCard>` component in any module

### Add Charts
Use components from `src/components/Charts.tsx`

### Modify Sidebar
Edit `src/components/Sidebar.tsx` styling

---

## 📱 Responsive Design

### Desktop (1024px+)
- Full sidebar visible
- Multi-column grids
- All charts displayed

### Tablet (768px-1023px)
- Responsive grids (2-3 columns)
- Charts stack appropriately
- Touch-friendly buttons

### Mobile (< 768px)
- Single column layout
- Collapsible sidebar (CSS hidden)
- Vertical charts
- Touch-optimized tables

---

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling not loading?
- Check `src/app/globals.css` is imported in layout
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)

### Module not showing in sidebar?
- Check `MODULE_ACCESS` for your role includes the module ID
- Verify module exists in `src/lib/roles.ts`
- Check page file is at `src/app/modules/[slug]/page.tsx`

---

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Recharts Docs**: https://recharts.org
- **Lucide Icons**: https://lucide.dev

---

## ✅ Next Steps

1. ✅ Run `npm run dev` and explore the mockup
2. ✅ Test different roles from the selector
3. ✅ Review each module's data and layout
4. ✅ Check responsive design on different screen sizes
5. ✅ Build with `npm run build` to verify production readiness
6. ✅ Deploy to Vercel using GitHub integration
7. 🔜 Add backend API integration
8. 🔜 Connect to real database
9. 🔜 Implement authentication
10. 🔜 Go live to users

---

**Ready? Start with:** `npm install && npm run dev`

Then open **http://localhost:3000** and explore! 🎉

export interface Company {
  id: string;
  name: string;
  industry: string;
  revenue: number;
  ebitda: number;
  cashFlow: number;
  employees: number;
  grossMargin: number;
  growth: number;
  yearAcquired: number;
}

export const COMPANIES: Company[] = [
  {
    id: 'midwest-hvac',
    name: 'Midwest HVAC',
    industry: 'HVAC Services',
    revenue: 8500000,
    ebitda: 1700000,
    cashFlow: 1200000,
    employees: 45,
    grossMargin: 42,
    growth: 12,
    yearAcquired: 2024,
  },
  {
    id: 'southeast-plumbing',
    name: 'Southeast Plumbing Co',
    industry: 'Plumbing Services',
    revenue: 6200000,
    ebitda: 1240000,
    cashFlow: 890000,
    employees: 32,
    grossMargin: 38,
    growth: 8,
    yearAcquired: 2024,
  },
  {
    id: 'northeast-electrical',
    name: 'Northeast Electrical',
    industry: 'Electrical Contractor',
    revenue: 9800000,
    ebitda: 2150000,
    cashFlow: 1500000,
    employees: 52,
    grossMargin: 45,
    growth: 15,
    yearAcquired: 2023,
  },
  {
    id: 'west-roofing',
    name: 'West Roofing Solutions',
    industry: 'Roofing Services',
    revenue: 5400000,
    ebitda: 810000,
    cashFlow: 620000,
    employees: 28,
    grossMargin: 35,
    growth: 5,
    yearAcquired: 2023,
  },
];

export const CONSOLIDATED = {
  id: 'consolidated',
  name: 'Portfolio Consolidated',
  industry: 'All Companies',
  revenue: COMPANIES.reduce((sum, c) => sum + c.revenue, 0),
  ebitda: COMPANIES.reduce((sum, c) => sum + c.ebitda, 0),
  cashFlow: COMPANIES.reduce((sum, c) => sum + c.cashFlow, 0),
  employees: COMPANIES.reduce((sum, c) => sum + c.employees, 0),
  grossMargin: Math.round((COMPANIES.reduce((sum, c) => sum + c.grossMargin, 0) / COMPANIES.length) * 100) / 100,
  growth: Math.round((COMPANIES.reduce((sum, c) => sum + c.growth, 0) / COMPANIES.length) * 100) / 100,
  yearAcquired: Math.min(...COMPANIES.map(c => c.yearAcquired)),
};

export type CompanyId = Company['id'] | 'consolidated';

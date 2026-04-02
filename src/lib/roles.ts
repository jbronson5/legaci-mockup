export type UserRole = 'holdco' | 'company-president' | 'employee' | 'customer' | 'cfo' | 'coo' | 'cmo' | 'chro' | 'clo' | 'cro' | 'cto';

export const ROLES = {
  holdco: {
    name: 'HoldCo Leadership',
    description: 'Portfolio oversight, capital allocation, investor relations',
    icon: '👔',
  },
  cfo: {
    name: 'Chief Financial Officer',
    description: 'Treasury, tax, financial controls, compliance',
    icon: '💰',
  },
  coo: {
    name: 'Chief Operating Officer',
    description: 'Operations, integration, compliance, quality',
    icon: '⚙️',
  },
  cmo: {
    name: 'Chief Marketing Officer',
    description: 'Local marketing, brand, customer data, competitive intel',
    icon: '📢',
  },
  chro: {
    name: 'Chief HR Officer',
    description: 'Workforce planning, compensation, culture, succession',
    icon: '👥',
  },
  clo: {
    name: 'Chief Legal Officer',
    description: 'Contracts, litigation, regulatory filings, IP',
    icon: '⚖️',
  },
  cro: {
    name: 'Chief Revenue Officer',
    description: 'Sales, pricing, partnerships, managed services',
    icon: '🚀',
  },
  cto: {
    name: 'Chief Technology Officer',
    description: 'Data warehouse, AI governance, integrations',
    icon: '🤖',
  },
  'company-president': {
    name: 'Portfolio Company President',
    description: 'Company dashboard, KPIs, operations management',
    icon: '🏢',
  },
  employee: {
    name: 'Portfolio Company Employee',
    description: 'Profit share tracking, financial literacy, SOPs',
    icon: '👤',
  },
  customer: {
    name: 'External Platform Customer',
    description: 'Managed services, platform features',
    icon: '🌐',
  },
};

export const MODULE_ACCESS = {
  holdco: [1, 4, 9],
  'company-president': [1, 2, 3, 4, 5, 6, 9],
  employee: [4, 5, 6, 9],
  customer: [1, 3, 4, 5],
};

export const MODULES = {
  1: {
    name: 'AI Deal Engine',
    description: 'Deal flow dashboard and pipeline management',
    slug: 'deal-engine',
  },
  2: {
    name: 'AI Underwriting',
    description: 'Investment memo templates and analysis',
    slug: 'underwriting',
  },
  3: {
    name: 'Diligence & Closing',
    description: 'Document management and closing workflows',
    slug: 'diligence',
  },
  4: {
    name: 'Financial Dashboard',
    description: 'P&L, cash flow, KPIs, and playbook',
    slug: 'financial',
  },
  5: {
    name: 'SOP Management',
    description: 'Standard operating procedures',
    slug: 'sops',
  },
  6: {
    name: 'HR System',
    description: 'HR management and employee data',
    slug: 'hr',
  },
  9: {
    name: 'Investor Relations Portal',
    description: 'Investor updates and communications',
    slug: 'investor-relations',
  },
};

export const CEO_MODULES = {
  'ceo-briefing': {
    name: 'CEO Daily Briefing',
    description: '60-second AI-generated executive summary',
    icon: '📋',
  },
  'portfolio-strategy': {
    name: 'Portfolio Strategy Command Center',
    description: 'Strategic portfolio map and value optimization',
    icon: '🎯',
  },
  'scenario-planning': {
    name: 'Scenario Planning Engine',
    description: 'Bull/base/bear case modeling across portfolio',
    icon: '📊',
  },
  'board-management': {
    name: 'Board Management Module',
    description: 'Board packs, governance calendar, director onboarding',
    icon: '🤝',
  },
};

export const CFO_MODULES = {
  'treasury-management': {
    name: 'Treasury Management System',
    description: 'Cash position, 13-week rolling forecast, FCF sweep rules',
    icon: '💰',
  },
  'tax-management': {
    name: 'Tax Management Infrastructure',
    description: 'State tax nexus tracker, entity structure optimizer',
    icon: '📋',
  },
  'intercompany-transactions': {
    name: 'Intercompany Transaction Management',
    description: 'Billing automation log, inter-company loans',
    icon: '🔄',
  },
  'insurance-risk': {
    name: 'Insurance & Risk Dashboard',
    description: 'Total insured value, claims by vertical, renewal calendar',
    icon: '🛡️',
  },
  'financial-controls': {
    name: 'Financial Controls & Fraud Prevention',
    description: 'Dual auth rules, vendor master file, anomaly detection',
    icon: '🔐',
  },
};

export const COO_MODULES = {
  'group-president': {
    name: 'Group President Command Center',
    description: 'Portfolio health by company, intervention queue',
    icon: '👥',
  },
  'acquisition-integration': {
    name: 'Acquisition Integration Playbook',
    description: 'Timeline from Day 0 through Month 3+ with tasks',
    icon: '📅',
  },
  'capex-management': {
    name: 'Capital Expenditure Management',
    description: 'Capex approval workflow, asset register',
    icon: '🏗️',
  },
  'supply-chain': {
    name: 'Supply Chain & Vendor Management',
    description: 'Preferred vendor directory, vendor scorecards',
    icon: '📦',
  },
  'quality-control': {
    name: 'Quality Control & Customer Satisfaction',
    description: 'NPS tracking by company, Google Review monitoring',
    icon: '⭐',
  },
  'regulatory-compliance': {
    name: 'Regulatory & License Compliance Center',
    description: 'License register, OSHA compliance, DOT compliance',
    icon: '✓',
  },
};

export const CMO_MODULES = {
  'local-marketing': {
    name: 'Local Marketing Execution Engine',
    description: 'Google Business Profile, local SEO monitoring',
    icon: '📍',
  },
  'brand-management': {
    name: 'Portfolio Brand Management',
    description: 'Brand standards library, compliance audit checklist',
    icon: '🎨',
  },
  'customer-data': {
    name: 'Customer Data Platform',
    description: 'Centralized customer database, lifetime value',
    icon: '👤',
  },
  'competitive-intelligence': {
    name: 'Competitive Intelligence',
    description: 'Win/loss analysis, market pricing intelligence',
    icon: '🎯',
  },
};

export const CHRO_MODULES = {
  'workforce-planning': {
    name: 'Workforce Planning & Analytics',
    description: 'Headcount forecast, turnover analytics',
    icon: '📈',
  },
  'compensation': {
    name: 'Compensation Benchmarking',
    description: 'Real-time market data, pay compression alerts',
    icon: '💵',
  },
  'benefits': {
    name: 'Benefits Administration',
    description: 'Open enrollment, FSA/HSA, 401k admin',
    icon: '🏥',
  },
  'culture-measurement': {
    name: 'Culture Measurement',
    description: 'Quarterly eNPS dashboard, engagement scores',
    icon: '💡',
  },
  'succession-planning': {
    name: 'President Succession Planning',
    description: 'Succession depth score, bench strength map',
    icon: '👔',
  },
};

export const CLO_MODULES = {
  'contract-management': {
    name: 'Contract Management',
    description: 'Contract repository, key date extraction',
    icon: '📜',
  },
  'litigation-claims': {
    name: 'Litigation & Claims Management',
    description: 'Active litigation register, insurance claims',
    icon: '⚖️',
  },
  'regulatory-filing': {
    name: 'Regulatory Filing Calendar',
    description: 'Annual report filing deadlines, license renewals',
    icon: '📁',
  },
  'intellectual-property': {
    name: 'Intellectual Property Registry',
    description: 'Trademark tracking, copyright documentation',
    icon: '🔬',
  },
};

export const CRO_MODULES = {
  'managed-services': {
    name: 'Managed Services Sales Infrastructure',
    description: 'Outbound lead scoring, CPA firm partnerships',
    icon: '🤝',
  },
  'pricing-packaging': {
    name: 'Pricing & Packaging Engine',
    description: 'Dynamic pricing by tier, expansion revenue',
    icon: '💎',
  },
  'partner-ecosystem': {
    name: 'Partner Ecosystem',
    description: 'EOS implementers, franchise associations',
    icon: '🌐',
  },
};

export const CTO_MODULES = {
  'data-warehouse': {
    name: 'Data Warehouse Architecture',
    description: 'Data model visualization, external licensing',
    icon: '🗄️',
  },
  'ai-governance': {
    name: 'AI Model Governance',
    description: 'Model versioning, bias monitoring',
    icon: '🤖',
  },
  'integration-marketplace': {
    name: 'Integration Marketplace',
    description: 'Available integrations, API status',
    icon: '🔗',
  },
};

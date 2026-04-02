export type UserRole = 'holdco' | 'company-president' | 'employee' | 'customer';

export const ROLES = {
  holdco: {
    name: 'HoldCo Leadership',
    description: 'Portfolio oversight, capital allocation, investor relations',
    icon: '👔',
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

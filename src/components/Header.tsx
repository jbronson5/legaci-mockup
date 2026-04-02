'use client';

import { UserRole, ROLES } from '@/lib/roles';
import { COMPANIES, CONSOLIDATED, CompanyId } from '@/lib/companies';
import { Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
  selectedCompany?: CompanyId;
  onCompanyChange?: (company: CompanyId) => void;
}

export function Header({ role, onRoleChange, selectedCompany = 'consolidated', onCompanyChange }: HeaderProps) {
  return (
    <header style={{ backgroundColor: 'white', borderBottom: '1px solid var(--slate-200)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>
          {ROLES[role].name}
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)' }}>{ROLES[role].description}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Company Selector */}
        <select
          value={selectedCompany}
          onChange={(e) => onCompanyChange?.(e.target.value as CompanyId)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: '1px solid var(--slate-300)',
            fontSize: '0.875rem',
            fontWeight: '500',
            backgroundColor: 'var(--blue-50)',
            color: 'var(--blue-900)',
          }}
        >
          <option value="consolidated">📊 Portfolio Consolidated</option>
          <optgroup label="Portfolio Companies">
            {COMPANIES.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </optgroup>
        </select>

        {/* Role Selector */}
        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value as UserRole)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: '1px solid var(--slate-300)',
            fontSize: '0.875rem',
            fontWeight: '500',
          }}
        >
          <option value="holdco">👔 HoldCo Leadership</option>
          <option value="company-president">🏢 Company President</option>
          <option value="employee">👤 Employee</option>
          <option value="customer">🌐 External Customer</option>
        </select>

        {/* Actions */}
        <button style={{ padding: '0.5rem', cursor: 'pointer' }}>
          <Settings style={{ width: '1.25rem', height: '1.25rem', color: 'var(--slate-600)' }} />
        </button>
        <button style={{ padding: '0.5rem', cursor: 'pointer' }}>
          <LogOut style={{ width: '1.25rem', height: '1.25rem', color: 'var(--slate-600)' }} />
        </button>
      </div>
    </header>
  );
}

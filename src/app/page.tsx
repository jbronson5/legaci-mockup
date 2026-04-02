'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserRole, ROLES } from '@/lib/roles';
import { CompanyId, COMPANIES, CONSOLIDATED } from '@/lib/companies';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  const [role, setRole] = useState<UserRole>('holdco');
  const [selectedCompany, setSelectedCompany] = useState<CompanyId>('consolidated');
  const router = useRouter();

  const company = selectedCompany === 'consolidated' ? CONSOLIDATED : COMPANIES.find(c => c.id === selectedCompany) || CONSOLIDATED;

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} selectedCompany={selectedCompany} onCompanyChange={setSelectedCompany} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            {/* Welcome Section */}
            <div style={{ marginBottom: '3rem' }}>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                {selectedCompany === 'consolidated' ? 'Portfolio Overview' : company.name}
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
                {ROLES[role].description}
              </p>

              {/* Company Metrics Card */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Annual Revenue</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>
                    ${(company.revenue / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>EBITDA</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--green-700)' }}>
                    ${(company.ebitda / 1000000).toFixed(2)}M
                  </p>
                </div>
                <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Employees</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>
                    {company.employees}
                  </p>
                </div>
                <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Growth Rate</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--blue-700)' }}>
                    {company.growth}%
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Start Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: '💼', name: 'Deal Engine', path: '/modules/deal-engine' },
                { icon: '📊', name: 'Financial Dashboard', path: '/modules/financial' },
                { icon: '👥', name: 'Investor Relations', path: '/modules/investor-relations' },
                { icon: '📄', name: 'Diligence & Closing', path: '/modules/diligence' },
                { icon: '📋', name: 'SOPs', path: '/modules/sops' },
                { icon: '👨‍💼', name: 'HR System', path: '/modules/hr' },
              ].map((item) => (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    border: '1px solid var(--slate-200)',
                    padding: '2rem',
                    cursor: 'pointer',
                    transition: 'box-shadow 200ms',
                  }}
                  onClick={() => router.push(item.path)}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: '600', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>
                    {item.name === 'Deal Engine' && 'Explore deal pipeline and investment opportunities'}
                    {item.name === 'Financial Dashboard' && 'View P&L, cash flow, and key financial metrics'}
                    {item.name === 'Investor Relations' && 'Manage investor communications and updates'}
                    {item.name === 'Diligence & Closing' && 'Manage documents and closing workflows'}
                    {item.name === 'SOPs' && 'Access standard operating procedures'}
                    {item.name === 'HR System' && 'Manage employee data and engagement'}
                  </p>
                </div>
              ))}
            </div>

            {/* Portfolio Companies Table (when consolidated) */}
            {selectedCompany === 'consolidated' && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Portfolio Companies</h2>
                <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>Company</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>Industry</th>
                        <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--slate-700)' }}>Revenue</th>
                        <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--slate-700)' }}>EBITDA</th>
                        <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--slate-700)' }}>Growth</th>
                        <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Employees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPANIES.map((comp) => (
                        <tr key={comp.id} style={{ borderBottom: '1px solid var(--slate-100)', cursor: 'pointer' }} onClick={() => setSelectedCompany(comp.id as CompanyId)}>
                          <td style={{ padding: '1rem', fontWeight: '500', color: 'var(--slate-900)' }}>{comp.name}</td>
                          <td style={{ padding: '1rem', color: 'var(--slate-600)' }}>{comp.industry}</td>
                          <td style={{ padding: '1rem', textAlign: 'right', color: 'var(--slate-900)' }}>${(comp.revenue / 1000000).toFixed(1)}M</td>
                          <td style={{ padding: '1rem', textAlign: 'right', color: 'var(--green-700)', fontWeight: '500' }}>${(comp.ebitda / 1000000).toFixed(2)}M</td>
                          <td style={{ padding: '1rem', textAlign: 'right', color: comp.growth > 10 ? 'var(--green-600)' : 'var(--slate-600)' }}>{comp.growth}%</td>
                          <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--slate-600)' }}>{comp.employees}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Feature Highlights */}
            <div style={{ backgroundImage: 'linear-gradient(to right, var(--blue-50), var(--indigo-100))', borderRadius: '0.5rem', border: '1px solid var(--blue-200)', padding: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Platform Features</h2>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', color: 'var(--slate-700)' }}>
                {[
                  'AI-powered deal analysis and underwriting',
                  'Real-time financial dashboards and reporting',
                  'Centralized document management',
                  'EOS operating system integration',
                  'Employee profit share tracking',
                  'Investor relations portal',
                ].map((feature) => (
                  <li key={feature} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green-600)', fontWeight: 'bold', fontSize: '1.125rem' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

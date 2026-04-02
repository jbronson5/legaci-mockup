'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle } from 'lucide-react';

export default function InsuranceRisk() {
  const [role] = useState<UserRole>('holdco');
  const [selectedCompany, setSelectedCompany] = useState<CompanyId>('consolidated');

  const claimData = [
    { vertical: 'Electrical', claims: 5, cost: 45000 },
    { vertical: 'HVAC', claims: 3, cost: 28000 },
    { vertical: 'Roofing', claims: 8, cost: 72000 },
    { vertical: 'Plumbing', claims: 2, cost: 12000 },
  ];

  const coverageData = [
    { name: 'General Liability', value: 45, fill: '#3b82f6' },
    { name: 'Workers Comp', value: 30, fill: '#10b981' },
    { name: 'Property', value: 15, fill: '#f59e0b' },
    { name: 'Equipment', value: 10, fill: '#8b5cf6' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={() => {}} selectedCompany={selectedCompany} onCompanyChange={setSelectedCompany} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
              🛡️ Insurance & Risk Dashboard
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              Total insured value, claims tracking, renewal calendar, and coverage gaps
            </p>

            {/* Coverage Summary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Total Insured Value</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$45.2M</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Annual Premium</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$1.85M</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>YTD Claims</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--red-700)' }}>$157K</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Loss Ratio</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>8.5%</p>
              </div>
            </div>

            {/* Claims by Vertical */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Claims by Vertical (YTD)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={claimData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="vertical" />
                  <YAxis yAxisId="left" label={{ value: 'Claims Count', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Cost ($)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="claims" fill="#3b82f6" name="Claim Count" />
                  <Bar yAxisId="right" dataKey="cost" fill="#ef4444" name="Cost" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Coverage Distribution */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Coverage Distribution (% of Premium)</h2>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={coverageData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} ${value}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                      {coverageData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Renewal Calendar */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Renewal Calendar (Next 12 Months)</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>Policy</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>Carrier</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Current Premium</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Renewal Date</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { policy: 'General Liability', carrier: 'State Farm', premium: '$650K', date: 'Apr 15', status: 'Active' },
                      { policy: 'Workers Comp', carrier: 'Liberty Mutual', premium: '$430K', date: 'Jun 1', status: 'Active' },
                      { policy: 'Property', carrier: 'Zurich', premium: '$280K', date: 'Jul 1', status: 'Active' },
                      { policy: 'Equipment', carrier: 'AIG', premium: '$185K', date: 'Sep 30', status: 'Active' },
                      { policy: 'Cyber Liability', carrier: 'Chubb', premium: '$125K', date: 'Nov 15', status: 'Active' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--slate-100)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--slate-900)' }}>{row.policy}</td>
                        <td style={{ padding: '1rem', color: 'var(--slate-600)' }}>{row.carrier}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-900)' }}>{row.premium}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.date}</td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            backgroundColor: 'var(--green-100)',
                            color: 'var(--green-700)'
                          }}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Coverage Gaps Alert */}
            <div style={{ backgroundColor: 'var(--amber-50)', border: '2px solid var(--amber-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <AlertCircle style={{ width: '1.5rem', height: '1.5rem', color: 'var(--amber-600)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--amber-900)', marginBottom: '1rem' }}>
                    Coverage Gaps Identified
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--amber-800)' }}>
                    <li style={{ borderLeft: '4px solid var(--amber-500)', paddingLeft: '1rem' }}>
                      <p style={{ fontWeight: '600' }}>Professional Liability Gap</p>
                      <p style={{ fontSize: '0.875rem' }}>Electrical and HVAC services lack E&O coverage. Estimated annual cost: $45K</p>
                    </li>
                    <li style={{ borderLeft: '4px solid var(--amber-500)', paddingLeft: '1rem' }}>
                      <p style={{ fontWeight: '600' }}>Flood Insurance (West Roofing)</p>
                      <p style={{ fontSize: '0.875rem' }}>Property in FEMA Zone A not covered. Recommend flood policy.</p>
                    </li>
                    <li style={{ borderLeft: '4px solid var(--amber-500)', paddingLeft: '1rem' }}>
                      <p style={{ fontWeight: '600' }}>Tools & Equipment Coverage</p>
                      <p style={{ fontSize: '0.875rem' }}>Field equipment uninsured off-site. Current annual risk: $200K+</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

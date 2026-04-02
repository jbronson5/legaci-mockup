'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function IntercompanyTransactions() {
  const [role] = useState<UserRole>('holdco');
  const [selectedCompany, setSelectedCompany] = useState<CompanyId>('consolidated');

  const billData = [
    { date: 'Mar 1', NE: 45000, MH: 32000, WR: 28000 },
    { date: 'Mar 8', NE: 48000, MH: 35000, WR: 31000 },
    { date: 'Mar 15', NE: 52000, MH: 38000, WR: 34000 },
    { date: 'Mar 22', NE: 50000, MH: 36000, WR: 33000 },
    { date: 'Mar 29', NE: 55000, MH: 40000, WR: 37000 },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={() => {}} selectedCompany={selectedCompany} onCompanyChange={setSelectedCompany} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
              🔄 Intercompany Transaction Management
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              Billing automation, inter-company loans, and elimination entries
            </p>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>MTD Intercompany Billings</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$822K</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Outstanding Payables</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$245K</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Intercompany Loans</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$1.8M</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Accrued Interest</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$18K</p>
              </div>
            </div>

            {/* Billing Automation Log */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Billing Automation Log (Weekly)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={billData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => `$${(value / 1000).toFixed(0)}K`} />
                  <Legend />
                  <Bar dataKey="NE" fill="#3b82f6" name="Northeast Electrical" />
                  <Bar dataKey="MH" fill="#10b981" name="Midwest HVAC" />
                  <Bar dataKey="WR" fill="#f59e0b" name="West Roofing" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Active Intercompany Loans */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Active Intercompany Loans</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>From</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>To</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--slate-700)' }}>Principal</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Rate</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Due Date</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { from: 'HoldCo', to: 'West Roofing', principal: '$800K', rate: '5.5%', due: 'Dec 31, 2024', status: 'Active' },
                      { from: 'HoldCo', to: 'Northeast Electrical', principal: '$650K', rate: '5.0%', due: 'Jun 30, 2025', status: 'Active' },
                      { from: 'Northeast', to: 'Midwest HVAC', principal: '$350K', rate: '4.5%', due: 'Mar 31, 2024', status: 'Repaid' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--slate-100)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--slate-900)' }}>{row.from}</td>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--slate-900)' }}>{row.to}</td>
                        <td style={{ padding: '1rem', textAlign: 'right', color: 'var(--slate-900)' }}>{row.principal}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.rate}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.due}</td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            backgroundColor: row.status === 'Active' ? 'var(--green-100)' : 'var(--slate-100)',
                            color: row.status === 'Active' ? 'var(--green-700)' : 'var(--slate-700)'
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

            {/* Elimination Entries */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Consolidation Elimination Entries</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>Receivables Elimination</h3>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--blue-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--blue-500)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>DR Intercompany Payable $245K</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>CR Intercompany Receivable $245K</p>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--slate-600)', marginTop: '1rem' }}>Eliminates 100% of outstanding billings on consolidated basis</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>Loan Elimination</h3>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--green-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-500)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>DR Intercompany Liability $1.8M</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>CR Intercompany Asset $1.8M</p>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--slate-600)', marginTop: '1rem' }}>Removes loans for consolidated presentation</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

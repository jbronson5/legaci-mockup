'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function TaxManagement() {
  const [role] = useState<UserRole>('holdco');
  const [selectedCompany, setSelectedCompany] = useState<CompanyId>('consolidated');

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={() => {}} selectedCompany={selectedCompany} onCompanyChange={setSelectedCompany} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
              📋 Tax Management Infrastructure
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              State tax nexus, entity structure optimization, and transfer pricing compliance
            </p>

            {/* State Tax Nexus Tracker */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>State Tax Nexus Tracker</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>State</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>Nexus Status</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Filing Requirement</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Est. Tax</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { state: 'New York', nexus: 'Sales + Physical', filing: 'Yes', tax: '$45,000', due: 'Mar 15', status: '✓' },
                      { state: 'California', nexus: 'Sales + Physical', filing: 'Yes', tax: '$72,000', due: 'Apr 15', status: '✓' },
                      { state: 'Texas', nexus: 'Physical Only', filing: 'Yes', tax: '$0', due: 'Jan 31', status: '✓' },
                      { state: 'Florida', nexus: 'Sales Only', filing: 'No', tax: '$0', due: '-', status: '⚠' },
                      { state: 'Illinois', nexus: 'Physical + Employees', filing: 'Yes', tax: '$28,000', due: 'Mar 15', status: '✓' },
                      { state: 'Massachusetts', nexus: 'Sales + Physical', filing: 'Yes', tax: '$35,000', due: 'Apr 15', status: '⏳' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--slate-100)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--slate-900)' }}>{row.state}</td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: 'var(--slate-600)' }}>{row.nexus}</td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          {row.filing === 'Yes' ? (
                            <span style={{ display: 'inline-block', backgroundColor: 'var(--red-100)', color: 'var(--red-700)', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '600' }}>Required</span>
                          ) : (
                            <span style={{ display: 'inline-block', backgroundColor: 'var(--green-100)', color: 'var(--green-700)', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '600' }}>Not Required</span>
                          )}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-900)' }}>{row.tax}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Entity Structure Optimizer */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Entity Structure Optimization</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>Current Structure</h3>
                  <div style={{ padding: '1.5rem', backgroundColor: 'var(--slate-50)', borderRadius: '0.375rem', border: '1px solid var(--slate-200)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
                      <div style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.375rem', borderLeft: '4px solid var(--blue-500)' }}>
                        <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>HoldCo (Delaware)</p>
                        <p style={{ color: 'var(--slate-600)' }}>Pass-through entity</p>
                      </div>
                      <div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-500)' }}>
                          <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>Northeast Electrical (NY C-Corp)</p>
                          <p style={{ color: 'var(--slate-600)' }}>State tax separate</p>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-500)' }}>
                          <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>Midwest HVAC (LLC - TX)</p>
                          <p style={{ color: 'var(--slate-600)' }}>No franchise tax</p>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-500)' }}>
                          <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>West Roofing (S-Corp - CA)</p>
                          <p style={{ color: 'var(--slate-600)' }}>Pass-through, $800 fee</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>Annual Tax Impact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ padding: '1rem', backgroundColor: 'var(--green-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-500)' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--green-700)' }}>Federal Income Tax</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--green-900)' }}>$285K</p>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: 'var(--blue-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--blue-500)' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--blue-700)' }}>State Income Taxes</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--blue-900)' }}>$127K</p>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: 'var(--amber-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--amber-500)' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--amber-700)' }}>Optimization Opportunity</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--amber-900)' }}>$23K-$35K</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--amber-700)', marginTop: '0.25rem' }}>Via S-Corp elections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transfer Pricing Documentation */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Transfer Pricing Documentation</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { doc: 'Master File', status: 'Complete', updated: 'Feb 2024', icon: '✓' },
                  { doc: 'Functional Analysis', status: 'In Progress', updated: '-', icon: '⏳' },
                  { doc: 'Economic Analysis', status: 'In Progress', updated: '-', icon: '⏳' },
                  { doc: 'Benchmarking Study', status: 'Pending', updated: '-', icon: '◻' },
                  { doc: 'Local Files (per entity)', status: 'Complete', updated: 'Mar 2024', icon: '✓' },
                ].map((row, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    border: '1px solid var(--slate-200)',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{row.doc}</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '0.25rem' }}>Updated: {row.updated}</p>
                    </div>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      backgroundColor: row.status === 'Complete' ? 'var(--green-100)' : row.status === 'In Progress' ? 'var(--amber-100)' : 'var(--slate-100)',
                      color: row.status === 'Complete' ? 'var(--green-700)' : row.status === 'In Progress' ? 'var(--amber-700)' : 'var(--slate-700)'
                    }}>
                      {row.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Checklist */}
            <div style={{ backgroundColor: 'var(--blue-50)', border: '2px solid var(--blue-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: 'var(--blue-600)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--blue-900)', marginBottom: '1rem' }}>
                    2024 Tax Compliance Status: 88% Complete
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {[
                      { item: 'Federal Return Draft', status: true },
                      { item: 'State Returns Filed', status: true },
                      { item: 'Form 8949 (Schedule D)', status: true },
                      { item: 'Entity Schedules', status: false },
                      { item: 'Transfer Pricing Study', status: false },
                      { item: 'Final Review', status: false },
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.25rem' }}>{item.status ? '✓' : '◻'}</span>
                        <span style={{ color: 'var(--blue-900)', fontSize: '0.875rem' }}>{item.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

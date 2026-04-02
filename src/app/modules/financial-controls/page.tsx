'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function FinancialControls() {
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
              🔐 Financial Controls & Fraud Prevention
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              Dual auth rules, vendor master file, segregation of duties, anomaly detection
            </p>

            {/* Control Status */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>SOX Compliance</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green-700)' }}>92%</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Vendors in Master File</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>347</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Dual Auth Transactions</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$2.3M</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Anomalies Detected (YTD)</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--red-700)' }}>12</p>
              </div>
            </div>

            {/* Dual Authorization Rules */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Dual Authorization Rules</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { rule: 'ACH Transfers >$50K', approvers: 'CFO + Treasurer', status: 'Active', violations: 0 },
                  { rule: 'Wire Transfers (any)', approvers: 'CFO + EVP Ops', status: 'Active', violations: 0 },
                  { rule: 'Vendor Master Updates', approvers: 'Procurement + Finance', status: 'Active', violations: 2 },
                  { rule: 'Journal Entries >$25K', approvers: 'Controller + VP Finance', status: 'Active', violations: 1 },
                  { rule: 'Payroll Changes >10%', approvers: 'CHRO + CFO', status: 'Active', violations: 0 },
                ].map((row, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    border: '1px solid var(--slate-200)',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{row.rule}</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '0.25rem' }}>Approvers: {row.approvers}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      {row.violations > 0 && (
                        <span style={{ fontSize: '0.875rem', color: 'var(--red-700)', fontWeight: '600' }}>⚠ {row.violations} violations</span>
                      )}
                      <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        backgroundColor: 'var(--green-100)',
                        color: 'var(--green-700)'
                      }}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Segregation of Duties Matrix */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Segregation of Duties Matrix</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>Process</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Authorize</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Execute</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Record</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Reconcile</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: '600', color: 'var(--slate-700)' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { process: 'Procure-to-Pay', auth: 'Mgmt', exec: 'AP', record: 'GL', recon: 'Ctrl', status: '✓' },
                      { process: 'Order-to-Cash', auth: 'Sales', exec: 'Billing', record: 'AR', recon: 'Ctrl', status: '✓' },
                      { process: 'Payroll', auth: 'CHRO', exec: 'HR', record: 'Payroll', recon: 'Finance', status: '✓' },
                      { process: 'Fixed Assets', auth: 'CFO', exec: 'Mgmt', record: 'GL', recon: 'Audit', status: '✓' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--slate-100)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--slate-900)' }}>{row.process}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.auth}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.exec}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.record}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--slate-600)' }}>{row.recon}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--green-600)' }}>{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Anomaly Detection */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>Recent Anomalies Detected</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { anomaly: 'Large ACH after hours', date: 'Mar 28', amount: '$145K', action: 'Blocked pending approval', risk: 'Medium' },
                  { anomaly: 'New vendor payment (same day invoice)', date: 'Mar 26', amount: '$32K', action: 'Escalated to investigation', risk: 'High' },
                  { anomaly: 'Journal entry by new user', date: 'Mar 24', amount: '$18K', action: 'Rejected', risk: 'Medium' },
                  { anomaly: 'Round dollar amount P-card', date: 'Mar 22', amount: '$5,000', action: 'Flagged for review', risk: 'Low' },
                ].map((row, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    border: '1px solid var(--slate-200)',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{row.anomaly}</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '0.25rem' }}>{row.date} • {row.amount}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{row.action}</span>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: row.risk === 'High' ? 'var(--red-100)' : row.risk === 'Medium' ? 'var(--amber-100)' : 'var(--green-100)',
                        color: row.risk === 'High' ? 'var(--red-700)' : row.risk === 'Medium' ? 'var(--amber-700)' : 'var(--green-700)'
                      }}>
                        {row.risk} Risk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank Reconciliation Status */}
            <div style={{ backgroundColor: 'var(--green-50)', border: '2px solid var(--green-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: 'var(--green-600)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--green-900)', marginBottom: '1rem' }}>
                    Bank Reconciliation: Current
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {[
                      { account: 'Checking (Main)', balance: '$2.1M', diff: 'Match', status: '✓' },
                      { account: 'Savings (Reserve)', balance: '$3.5M', diff: 'Match', status: '✓' },
                      { account: 'Payroll', balance: '$425K', diff: 'Match', status: '✓' },
                      { account: 'Petty Cash', balance: '$18K', diff: '$200 variance', status: '⚠' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.375rem' }}>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--slate-900)' }}>{item.account}</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '0.25rem' }}>{item.balance}</p>
                        <p style={{ fontSize: '0.75rem', color: item.status === '✓' ? 'var(--green-600)' : 'var(--amber-600)', marginTop: '0.25rem' }}>{item.diff}</p>
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

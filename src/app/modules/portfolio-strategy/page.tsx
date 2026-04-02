'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { BarChart3, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

export default function PortfolioStrategy() {
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
              Portfolio Strategy Command Center
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              Strategic portfolio map and optimization engine
            </p>

            {/* Portfolio Composition */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BarChart3 style={{ width: '1.25rem', height: '1.25rem' }} />
                  Portfolio Composition by Vertical
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  {[
                    { name: 'HVAC Services', pct: 28, value: '$8.5M', color: 'var(--blue-500)' },
                    { name: 'Plumbing', pct: 20, value: '$6.2M', color: 'var(--green-500)' },
                    { name: 'Electrical', pct: 32, value: '$9.8M', color: 'var(--orange-500)' },
                    { name: 'Roofing', pct: 20, value: '$5.4M', color: 'var(--red-500)' },
                  ].map((item) => (
                    <div key={item.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{item.name}</span>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{item.pct}% ({item.value})</span>
                      </div>
                      <div style={{ backgroundColor: 'var(--slate-100)', height: '0.5rem', borderRadius: '0.25rem', overflow: 'hidden' }}>
                        <div
                          style={{
                            backgroundColor: item.color,
                            height: '100%',
                            width: `${item.pct}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
                  Concentration Risk
                </h3>
                <div style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Largest Vertical Exposure</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--orange-600)' }}>32%</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>Electrical (Above 25% threshold)</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--amber-50)', border: '1px solid var(--amber-200)', padding: '1rem', borderRadius: '0.375rem' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--amber-900)', fontWeight: '500' }}>
                      ⚠️ If electrical demand drops 20%, EBITDA impact: -$430K (-12%)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acquisition Gap Analysis */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap style={{ width: '1.25rem', height: '1.25rem', color: 'var(--green-600)' }} />
                Acquisition Gap Analysis: Next 2-3 Deals
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '1.5rem' }}>
                Based on current portfolio, these verticals would maximize diversification AND cross-portfolio synergy:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[
                  { rank: '1st', name: 'Landscaping', synergy: 'Seasonal fleet utilization', diversify: 'Summer counter-seasonal to HVAC' },
                  { rank: '2nd', name: 'General Contracting', synergy: 'Cross-sell to HVAC, Plumbing', diversify: 'Commercial customers (vs. residential focus)' },
                  { rank: '3rd', name: 'Cleaning Services', synergy: 'New customer acquisition', diversify: 'Low capital intensity' },
                ].map((item) => (
                  <div key={item.name} style={{ backgroundColor: 'var(--slate-50)', border: '1px solid var(--slate-200)', padding: '1rem', borderRadius: '0.375rem' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--green-700)', marginBottom: '0.25rem' }}>{item.rank} Priority</p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>{item.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>
                      <strong>Synergy:</strong> {item.synergy}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>
                      <strong>Diversify:</strong> {item.diversify}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Value Attribution */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp style={{ width: '1.25rem', height: '1.25rem', color: 'var(--green-600)' }} />
                  Value Drivers (Outperformers)
                </h3>
                <ul style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <li style={{ backgroundColor: 'var(--green-50)', padding: '1rem', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-600)' }}>
                    <p style={{ fontWeight: '600', color: 'var(--green-900)' }}>Northeast Electrical</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--green-800)' }}>52% of EBITDA growth • 8.7% margin expansion</p>
                  </li>
                  <li style={{ backgroundColor: 'var(--green-50)', padding: '1rem', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-600)' }}>
                    <p style={{ fontWeight: '600', color: 'var(--green-900)' }}>Southeast Plumbing</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--green-800)' }}>28% of EBITDA growth • New market expansion</p>
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle style={{ width: '1.25rem', height: '1.25rem', color: 'var(--red-600)' }} />
                  Value Draggers (Underperformers)
                </h3>
                <ul style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <li style={{ backgroundColor: 'var(--red-50)', padding: '1rem', borderRadius: '0.375rem', borderLeft: '4px solid var(--red-600)' }}>
                    <p style={{ fontWeight: '600', color: 'var(--red-900)' }}>West Roofing Solutions</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--red-800)' }}>Multiple compression, -2% margin • Needs operational intervention</p>
                  </li>
                  <li style={{ backgroundColor: 'var(--amber-50)', padding: '1rem', borderRadius: '0.375rem', borderLeft: '4px solid var(--amber-600)' }}>
                    <p style={{ fontWeight: '600', color: 'var(--amber-900)' }}>Midwest HVAC</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--amber-800)' }}>Seasonal headwind, market saturation • 3-month recovery plan live</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategic Adjacency */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
                Strategic Adjacency Map: Internal Bolt-On Opportunities
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '1.5rem' }}>
                Portfolio companies that could acquire each other, creating growth without external capital:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--blue-50)', padding: '1rem', borderRadius: '0.375rem', border: '1px solid var(--blue-200)' }}>
                  <p style={{ fontWeight: '600', color: 'var(--blue-900)', marginBottom: '0.5rem' }}>
                    Northeast Electrical → Midwest HVAC
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--blue-800)' }}>
                    Add HVAC services to electrical contractor. Est. revenue synergy: $1.2M. Financing: Northeast's FCF.
                  </p>
                </div>
                <div style={{ backgroundColor: 'var(--green-50)', padding: '1rem', borderRadius: '0.375rem', border: '1px solid var(--green-200)' }}>
                  <p style={{ fontWeight: '600', color: 'var(--green-900)', marginBottom: '0.5rem' }}>
                    Southeast Plumbing → Midwest HVAC
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--green-800)' }}>
                    Shared customer base, same regional market. Cross-sell penetration: 12-15% of Plumbing customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

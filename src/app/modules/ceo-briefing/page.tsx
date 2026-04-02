'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { AlertCircle, TrendingUp, TrendingDown, Target, CheckCircle } from 'lucide-react';

export default function CEOBriefing() {
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
              CEO Daily Briefing
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              60-second executive summary • Generated {new Date().toLocaleTimeString()}
            </p>

            {/* Critical Alerts */}
            <div style={{ backgroundColor: 'var(--red-50)', border: '2px solid var(--red-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <AlertCircle style={{ width: '2rem', height: '2rem', color: 'var(--red-600)', flexShrink: 0 }} />
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--red-900)', marginBottom: '1rem' }}>
                    🚨 Overnight Anomalies
                  </h2>
                  <ul style={{ color: 'var(--red-800)', gap: '0.75rem', display: 'flex', flexDirection: 'column' }}>
                    <li>❌ <strong>Northeast Electrical</strong> — Revenue down 8% vs. baseline. Fleet maintenance spike detected.</li>
                    <li>⚠️ <strong>Midwest HVAC</strong> — Customer churn 2.3% (vs. 0.8% baseline). Investigate key account health.</li>
                    <li>❌ <strong>West Roofing</strong> — Cash position $120K below min reserve. Sweep delayed due to pending invoice.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Today's Decisions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Target style={{ width: '1.25rem', height: '1.25rem', color: 'var(--orange-600)' }} />
                  Critical Decisions Required
                </h3>
                <ul style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <li style={{ borderLeft: '4px solid var(--orange-500)', paddingLeft: '1rem' }}>
                    <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>Approve Northeast Electrical capex ($250K)</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>3 pending equipment replacements. Impact: ROI 18% year 1.</p>
                  </li>
                  <li style={{ borderLeft: '4px solid var(--orange-500)', paddingLeft: '1rem' }}>
                    <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>Midwest HVAC president hiring decision</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Current president at burnout threshold. 2 candidates reviewed.</p>
                  </li>
                  <li style={{ borderLeft: '4px solid var(--orange-500)', paddingLeft: '1rem' }}>
                    <p style={{ fontWeight: '600', color: 'var(--slate-900)' }}>Refinance HoldCo term loan ($50M)</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Rate environment favorable. Close window: 10 days.</p>
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp style={{ width: '1.25rem', height: '1.25rem', color: 'var(--green-600)' }} />
                  Deal Pipeline Status
                </h3>
                <ul style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <li style={{ padding: '0.75rem', backgroundColor: 'var(--blue-50)', borderRadius: '0.375rem' }}>
                    <p style={{ fontWeight: '600', color: 'var(--blue-900)' }}>LOI Stage: 2 active</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--blue-700)' }}>Expected close 30 & 45 days</p>
                  </li>
                  <li style={{ padding: '0.75rem', backgroundColor: 'var(--amber-50)', borderRadius: '0.375rem' }}>
                    <p style={{ fontWeight: '600', color: 'var(--amber-900)' }}>At Risk: 1 deal</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--amber-700)' }}>Seller financing terms in negotiation</p>
                  </li>
                  <li style={{ padding: '0.75rem', backgroundColor: 'var(--green-50)', borderRadius: '0.375rem' }}>
                    <p style={{ fontWeight: '600', color: 'var(--green-900)' }}>High-Score Targets: 12 new</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--green-700)' }}>Auto-identified overnight by AI model</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Spotlight Company */}
            <div style={{ backgroundColor: 'white', border: '2px solid var(--indigo-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: 'var(--indigo-600)' }} />
                Company Spotlight
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    Southeast Plumbing Co
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '1rem' }}>
                    Predicted to <strong style={{ color: 'var(--green-700)' }}>outperform Q2 targets by 12%</strong> based on current trajectory.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ backgroundColor: 'var(--green-50)', padding: '1rem', borderRadius: '0.375rem' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--green-700)' }}>Revenue Trend</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--green-700)' }}>↑ 8.2%</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--green-50)', padding: '1rem', borderRadius: '0.375rem' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--green-700)' }}>EBITDA Margin</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--green-700)' }}>20% (+2%)</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--blue-50)', padding: '1rem', borderRadius: '0.375rem' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--blue-700)' }}>Customer NPS</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--blue-700)' }}>72</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--blue-50)', padding: '1rem', borderRadius: '0.375rem' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--blue-700)' }}>Burnout Score</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--blue-700)' }}>8/10</p>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--slate-50)', padding: '1rem', borderRadius: '0.375rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--indigo-600)' }}>95</p>
                    <p style={{ color: 'var(--slate-600)' }}>Health Score</p>
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

'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertCircle } from 'lucide-react';

export default function ScenarioPlanning() {
  const [role] = useState<UserRole>('holdco');
  const [selectedCompany, setSelectedCompany] = useState<CompanyId>('consolidated');
  const [interestRate, setInterestRate] = useState(5.5);
  const [recessionSeverity, setRecessionSeverity] = useState(0);
  const [dealCadence, setDealCadence] = useState(3);

  // Scenario calculations
  const baseEBITDA = 2.8;
  const recessionalImpact = recessionSeverity * 0.15;
  const interestImpact = interestRate > 5 ? (interestRate - 5) * 0.1 : 0;
  
  const bullEBITDA = baseEBITDA * 1.15;
  const baseEBITDACalc = baseEBITDA * (1 - recessionalImpact);
  const bearEBITDA = baseEBITDA * 0.85 * (1 - recessionalImpact);

  const scenarioData = [
    { metric: 'EBITDA', bull: bullEBITDA.toFixed(2), base: baseEBITDACalc.toFixed(2), bear: bearEBITDA.toFixed(2) },
    { metric: 'Interest Exp', bull: (0.15 - interestImpact * 0.3).toFixed(2), base: (0.15 - interestImpact * 0.5).toFixed(2), bear: (0.15 + interestImpact).toFixed(2) },
    { metric: 'FCF', bull: (bullEBITDA * 0.7).toFixed(2), base: (baseEBITDACalc * 0.7).toFixed(2), bear: (Math.max(0, bearEBITDA * 0.6)).toFixed(2) },
  ];

  const projectionData = [
    { year: '2024E', bull: 3.2, base: 2.8, bear: 2.4 },
    { year: '2025E', bull: 3.6, base: 2.9, bear: 2.0 },
    { year: '2026E', bull: 4.1, base: 3.2, bear: 1.8 },
    { year: '2027E', bull: 4.6, base: 3.5, bear: 2.2 },
    { year: '2028E', bull: 5.2, base: 3.9, bear: 2.6 },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={() => {}} selectedCompany={selectedCompany} onCompanyChange={setSelectedCompany} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
              📊 Scenario Planning Engine
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              Bull/base/bear case modeling with interest rate and recession impact sliders
            </p>

            {/* Control Panel */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>
                Scenario Inputs
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {/* Interest Rate Slider */}
                <div>
                  <label style={{ display: 'block', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    Interest Rate: <span style={{ color: 'var(--blue-600)' }}>{interestRate.toFixed(2)}%</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    style={{ width: '100%', height: '6px', borderRadius: '3px', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-600)', marginTop: '0.5rem' }}>
                    <span>2%</span>
                    <span>8%</span>
                  </div>
                </div>

                {/* Recession Slider */}
                <div>
                  <label style={{ display: 'block', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    Recession Severity: <span style={{ color: recessionSeverity > 0.5 ? 'var(--red-600)' : 'var(--green-600)' }}>{(recessionSeverity * 100).toFixed(0)}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={recessionSeverity}
                    onChange={(e) => setRecessionSeverity(parseFloat(e.target.value))}
                    style={{ width: '100%', height: '6px', borderRadius: '3px', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-600)', marginTop: '0.5rem' }}>
                    <span>No Recession</span>
                    <span>Severe Recession</span>
                  </div>
                </div>

                {/* Deal Cadence Slider */}
                <div>
                  <label style={{ display: 'block', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    Annual Deal Cadence: <span style={{ color: 'var(--amber-600)' }}>{dealCadence} deals/year</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={dealCadence}
                    onChange={(e) => setDealCadence(parseInt(e.target.value))}
                    style={{ width: '100%', height: '6px', borderRadius: '3px', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-600)', marginTop: '0.5rem' }}>
                    <span>1 deal/yr</span>
                    <span>6 deals/yr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario Comparison Table */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
                2024E Scenario Comparison (Current Year)
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--slate-700)' }}>Metric</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--green-700)' }}>🚀 Bull Case</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--blue-700)' }}>📊 Base Case</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--red-700)' }}>⚠️ Bear Case</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: 'var(--slate-700)' }}>Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarioData.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--slate-100)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--slate-900)' }}>{row.metric}</td>
                        <td style={{ padding: '1rem', textAlign: 'right', color: 'var(--green-700)', fontWeight: '500' }}>${row.bull}M</td>
                        <td style={{ padding: '1rem', textAlign: 'right', color: 'var(--blue-700)', fontWeight: '500' }}>${row.base}M</td>
                        <td style={{ padding: '1rem', textAlign: 'right', color: 'var(--red-700)', fontWeight: '500' }}>${row.bear}M</td>
                        <td style={{ padding: '1rem', textAlign: 'right', fontSize: '0.875rem', color: 'var(--slate-600)' }}>
                          {(parseFloat(row.bull) - parseFloat(row.bear)).toFixed(2)}M spread
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5-Year Projection */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
                5-Year EBITDA Projection ($M)
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value}M`} />
                  <Legend />
                  <Line type="monotone" dataKey="bull" stroke="#10b981" name="Bull Case" strokeWidth={2} />
                  <Line type="monotone" dataKey="base" stroke="#3b82f6" name="Base Case" strokeWidth={2} />
                  <Line type="monotone" dataKey="bear" stroke="#ef4444" name="Bear Case" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Key Metrics Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--green-700)', marginBottom: '0.5rem' }}>Bull Case IRR</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green-700)' }}>24%</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--green-600)', marginTop: '0.5rem' }}>5-year IRR</p>
              </div>
              <div style={{ backgroundColor: 'var(--blue-50)', border: '1px solid var(--blue-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--blue-700)', marginBottom: '0.5rem' }}>Base Case IRR</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--blue-700)' }}>18%</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--blue-600)', marginTop: '0.5rem' }}>Most likely outcome</p>
              </div>
              <div style={{ backgroundColor: 'var(--red-50)', border: '1px solid var(--red-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--red-700)', marginBottom: '0.5rem' }}>Bear Case IRR</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--red-700)' }}>8%</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--red-600)', marginTop: '0.5rem' }}>Downside protection</p>
              </div>
              <div style={{ backgroundColor: 'var(--amber-50)', border: '1px solid var(--amber-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--amber-700)', marginBottom: '0.5rem' }}>Portfolio Value (Base)</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--amber-700)' }}>$5.2B</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--amber-600)', marginTop: '0.5rem' }}>Current valuation</p>
              </div>
            </div>

            {/* Sensitivity Alert */}
            <div style={{ backgroundColor: 'var(--amber-50)', border: '2px solid var(--amber-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <AlertCircle style={{ width: '1.5rem', height: '1.5rem', color: 'var(--amber-600)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--amber-900)', marginBottom: '0.5rem' }}>
                    Sensitivity Insights
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--amber-800)', fontSize: '0.875rem' }}>
                    <li>• Portfolio most sensitive to interest rate changes (±100bps = ±$150M valuation)</li>
                    <li>• Recession scenario assumed {(recessionSeverity * 100).toFixed(0)}% severity impact</li>
                    <li>• Deal cadence at {dealCadence} deals/year contributes $200M-$400M annual growth</li>
                    <li>• Base case assumes 4% organic growth + {dealCadence} acquisitions = {(4 + dealCadence * 1.5).toFixed(1)}% total growth</li>
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

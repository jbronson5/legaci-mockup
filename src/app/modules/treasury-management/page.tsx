'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { UserRole } from '@/lib/roles';
import { CompanyId } from '@/lib/companies';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function TreasuryManagement() {
  const [role] = useState<UserRole>('holdco');
  const [selectedCompany, setSelectedCompany] = useState<CompanyId>('consolidated');

  const cashData = [
    { day: 'Mon', position: 2.4, minimum: 1.2, target: 2.0 },
    { day: 'Tue', position: 2.1, minimum: 1.2, target: 2.0 },
    { day: 'Wed', position: 1.8, minimum: 1.2, target: 2.0 },
    { day: 'Thu', position: 2.3, minimum: 1.2, target: 2.0 },
    { day: 'Fri', position: 2.8, minimum: 1.2, target: 2.0 },
    { day: 'Mon', position: 3.1, minimum: 1.2, target: 2.0 },
    { day: 'Tue', position: 3.5, minimum: 1.2, target: 2.0 },
  ];

  const forecastData = [
    { week: 'W1', projected: 3.5, conservative: 3.2, optimistic: 3.8 },
    { week: 'W2', projected: 3.2, conservative: 2.9, optimistic: 3.5 },
    { week: 'W3', projected: 3.8, conservative: 3.4, optimistic: 4.2 },
    { week: 'W4', projected: 4.1, conservative: 3.6, optimistic: 4.5 },
    { week: 'W5', projected: 3.9, conservative: 3.4, optimistic: 4.3 },
    { week: 'W6', projected: 3.6, conservative: 3.1, optimistic: 4.0 },
    { week: 'W7', projected: 4.2, conservative: 3.7, optimistic: 4.7 },
    { week: 'W8', projected: 4.5, conservative: 4.0, optimistic: 5.0 },
    { week: 'W9', projected: 4.3, conservative: 3.8, optimistic: 4.8 },
    { week: 'W10', projected: 4.0, conservative: 3.5, optimistic: 4.5 },
    { week: 'W11', projected: 4.2, conservative: 3.7, optimistic: 4.7 },
    { week: 'W12', projected: 4.4, conservative: 3.9, optimistic: 4.9 },
    { week: 'W13', projected: 4.6, conservative: 4.1, optimistic: 5.1 },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={() => {}} selectedCompany={selectedCompany} onCompanyChange={setSelectedCompany} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>
              💰 Treasury Management System
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)', marginBottom: '2rem' }}>
              Real-time cash position monitoring and 13-week rolling forecast
            </p>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Current Cash Position</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$3.5M</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--green-600)' }}>
                  <TrendingUp style={{ width: '1rem', height: '1rem' }} />
                  <span style={{ fontSize: '0.875rem' }}>↑ Above minimum threshold</span>
                </div>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Minimum Required</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$1.2M</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '0.5rem' }}>Covenant requirement</p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>Target Balance</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>$2.0M</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '0.5rem' }}>Operating target</p>
              </div>
              <div style={{ backgroundColor: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--green-700)', marginBottom: '0.5rem' }}>Sweep Scheduled</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green-700)' }}>$1.2M</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--green-700)', marginTop: '0.5rem' }}>Next Friday 5pm</p>
              </div>
            </div>

            {/* Daily Cash Position Chart */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>7-Day Cash Position Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={cashData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value}M`} />
                  <Legend />
                  <Line type="monotone" dataKey="position" stroke="#2563eb" name="Actual Position" strokeWidth={2} />
                  <Line type="monotone" dataKey="minimum" stroke="#ef4444" name="Minimum" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="target" stroke="#10b981" name="Target" strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* 13-Week Rolling Forecast */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>13-Week Rolling Forecast</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value}M`} />
                  <Legend />
                  <Bar dataKey="conservative" stackId="a" fill="#ef4444" name="Conservative Case" />
                  <Bar dataKey="projected" stackId="a" fill="#3b82f6" name="Projected" />
                  <Bar dataKey="optimistic" stackId="a" fill="#10b981" name="Optimistic Case" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* FCF Sweep Rules */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1rem' }}>FCF Sweep Rules & Configuration</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>Sweep Triggers</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <li style={{ padding: '0.75rem', backgroundColor: 'var(--blue-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--blue-500)' }}>
                      <p style={{ fontWeight: '600', color: 'var(--blue-900)' }}>Primary Trigger</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--blue-700)' }}>Cash {'>'} $4.5M triggers sweep to lender</p>
                    </li>
                    <li style={{ padding: '0.75rem', backgroundColor: 'var(--green-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--green-500)' }}>
                      <p style={{ fontWeight: '600', color: 'var(--green-900)' }}>Frequency</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--green-700)' }}>Weekly on Friday 5:00 PM ET</p>
                    </li>
                    <li style={{ padding: '0.75rem', backgroundColor: 'var(--amber-50)', borderRadius: '0.375rem', borderLeft: '4px solid var(--amber-500)' }}>
                      <p style={{ fontWeight: '600', color: 'var(--amber-900)' }}>Carve-Out</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--amber-700)' }}>Hold $2.0M minimum for operations</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>Last 4 Sweeps</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Date</th>
                        <th style={{ padding: '0.75rem', textAlign: 'right', fontWeight: '600' }}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: 'Mar 29', amount: '$1.2M' },
                        { date: 'Mar 22', amount: '$1.5M' },
                        { date: 'Mar 15', amount: '$1.0M' },
                        { date: 'Mar 8', amount: '$1.3M' },
                      ].map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--slate-100)' }}>
                          <td style={{ padding: '0.75rem', color: 'var(--slate-700)' }}>{row.date}</td>
                          <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: '600', color: 'var(--slate-900)' }}>{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Liquidity Alerts */}
            <div style={{ backgroundColor: 'var(--blue-50)', border: '2px solid var(--blue-200)', borderRadius: '0.5rem', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: 'var(--blue-600)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--blue-900)', marginBottom: '0.5rem' }}>
                    Liquidity Status: Healthy
                  </h3>
                  <p style={{ color: 'var(--blue-700)', marginBottom: '1rem' }}>
                    All companies maintain sufficient cash reserves. No covenant violations detected.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {[
                      { company: 'Northeast Electrical', status: '✓ Healthy', color: 'var(--green-600)' },
                      { company: 'Midwest HVAC', status: '✓ Healthy', color: 'var(--green-600)' },
                      { company: 'West Roofing', status: '⚠ Watch', color: 'var(--amber-600)' },
                      { company: 'Southeast Plumbing', status: '✓ Healthy', color: 'var(--green-600)' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.375rem' }}>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--slate-900)' }}>{item.company}</p>
                        <p style={{ fontSize: '0.875rem', color: item.color }}>{item.status}</p>
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

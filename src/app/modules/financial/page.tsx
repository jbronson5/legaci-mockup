'use client';

import { useState } from 'react';
import { UserRole } from '@/lib/roles';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCard } from '@/components/DashboardCard';
import { RevenueChart, EbitdaChart, CashFlowChart, PortfolioCompositionChart } from '@/components/Charts';

export default function FinancialDashboard() {
  const [role, setRole] = useState<UserRole>('holdco');

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>Financial Dashboard</h1>
              <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>Portfolio financial performance and KPIs</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <DashboardCard title="Annual Revenue" value="$1.24B" change="+18%" changeType="positive" />
              <DashboardCard title="EBITDA Margin" value="28.1%" change="+2.4%" changeType="positive" />
              <DashboardCard title="Cash Position" value="$427M" change="+$52M" changeType="positive" />
              <DashboardCard title="Debt/EBITDA" value="3.2x" change="+0.3x" changeType="negative" />
            </div>

            {/* Charts Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>Revenue Trend</h2>
                <RevenueChart />
              </div>

              <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>EBITDA & Margin</h2>
                <EbitdaChart />
              </div>

              <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>Cash Flow Analysis</h2>
                <CashFlowChart />
              </div>

              <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>Portfolio Composition</h2>
                <PortfolioCompositionChart />
              </div>
            </div>

            {/* Sub-Modules */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '📊', name: 'P&L & Metrics (4A)', desc: 'Detailed profit & loss statements, cash flow forecasts, and KPI tracking' },
                { icon: '📖', name: 'Value Creation (4B)', desc: 'KKR playbook implementation, value creation plans, and strategic initiatives' },
                { icon: '🎯', name: 'EOS Operating System (4C)', desc: 'Rocks, Scorecards, Issues management and quarterly business reviews' },
              ].map((item) => (
                <div key={item.name} style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: '600', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

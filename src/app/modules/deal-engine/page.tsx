'use client';

import { useState } from 'react';
import { UserRole } from '@/lib/roles';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCard } from '@/components/DashboardCard';
import { DealPipelineChart } from '@/components/Charts';

export default function DealEngine() {
  const [role, setRole] = useState<UserRole>('holdco');

  const deals = [
    { id: 1, name: 'TechStart AI', stage: 'Sourcing', value: '$2.5M', industry: 'Technology', date: '2024-01-15' },
    { id: 2, name: 'HealthPlus Inc', stage: 'Initial Screen', value: '$5.2M', industry: 'Healthcare', date: '2024-01-12' },
    { id: 3, name: 'Industrial Automation Co', stage: 'Deep Dive', value: '$8.7M', industry: 'Industrial', date: '2024-01-08' },
    { id: 4, name: 'Consumer Goods Ltd', stage: 'LOI Pending', value: '$12.1M', industry: 'Consumer', date: '2024-01-05' },
    { id: 5, name: 'SaaS Platform Pro', stage: 'Final Review', value: '$15.3M', industry: 'Technology', date: '2024-01-02' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>AI Deal Engine</h1>
              <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>Pipeline analysis and investment opportunities</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <DashboardCard title="Total Opportunities" value="45" change="+12%" changeType="positive" />
              <DashboardCard title="Pipeline Value" value="$127.3M" change="+$15.2M" changeType="positive" />
              <DashboardCard title="Active Deals" value="12" change="+3" changeType="positive" />
              <DashboardCard title="Close Rate" value="32%" change="+4%" changeType="positive" />
            </div>

            {/* Deal Pipeline Chart */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>Pipeline by Stage</h2>
              <DealPipelineChart />
            </div>

            {/* Deals List */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>Active Deals</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Deal Name</th>
                      <th>Stage</th>
                      <th>Industry</th>
                      <th>Value</th>
                      <th>Added</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.map((deal) => (
                      <tr key={deal.id}>
                        <td style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{deal.name}</td>
                        <td><span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'var(--blue-100)', color: 'var(--blue-800)' }}>{deal.stage}</span></td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{deal.industry}</td>
                        <td style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{deal.value}</td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{deal.date}</td>
                        <td style={{ textAlign: 'right' }}><button style={{ color: 'var(--blue-600)', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>View Details</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { UserRole } from '@/lib/roles';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCard } from '@/components/DashboardCard';
import { TrendingUp } from 'lucide-react';

export default function InvestorRelations() {
  const [role, setRole] = useState<UserRole>('holdco');

  const updates = [
    { title: 'Q4 2023 Portfolio Performance', date: '2024-01-15', type: 'Quarterly Report', recipients: 24, status: 'Sent' },
    { title: 'TechStart AI Acquisition Update', date: '2024-01-12', type: 'Deal Announcement', recipients: 18, status: 'Sent' },
    { title: 'Annual LP Meeting - Agenda', date: '2024-02-10', type: 'Event', recipients: 12, status: 'Scheduled' },
    { title: 'December 2023 Market Update', date: '2024-01-08', type: 'Newsletter', recipients: 32, status: 'Sent' },
    { title: 'HealthPlus Inc Milestone Achievement', date: '2024-01-05', type: 'Deal Update', recipients: 8, status: 'Sent' },
  ];

  const investors = [
    { name: 'Acme Capital Partners', commitment: '$50M', roi: '+24.3%', engaged: 'Yes' },
    { name: 'Global Growth Fund', commitment: '$35M', roi: '+18.7%', engaged: 'Yes' },
    { name: 'Strategic Equity Group', commitment: '$28M', roi: '+22.1%', engaged: 'Yes' },
    { name: 'NextGen Ventures', commitment: '$20M', roi: '+15.2%', engaged: 'Yes' },
    { name: 'Premium Capital LLC', commitment: '$15M', roi: '+19.8%', engaged: 'No' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>Investor Relations Portal</h1>
              <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>Manage investor communications and updates</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <DashboardCard title="Total Investors" value="32" change="+2" changeType="positive" />
              <DashboardCard title="Total Commitments" value="$485M" change="+$28M" changeType="positive" />
              <DashboardCard title="Average Portfolio ROI" value="+20.0%" change="+3.2%" changeType="positive" />
              <DashboardCard title="Engagement Rate" value="94%" change="+8%" changeType="positive" />
            </div>

            {/* Communications */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>📄 Recent Communications</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Date Sent</th>
                      <th>Recipients</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updates.map((update) => (
                      <tr key={update.title}>
                        <td style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{update.title}</td>
                        <td><span style={{ display: 'inline-flex', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'var(--slate-100)', color: 'var(--slate-700)' }}>{update.type}</span></td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{update.date}</td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{update.recipients} investors</td>
                        <td><span style={{ display: 'inline-flex', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: update.status === 'Sent' ? 'var(--green-100)' : 'var(--yellow-100)', color: update.status === 'Sent' ? 'var(--green-800)' : 'var(--yellow-800)' }}>{update.status}</span></td>
                        <td style={{ textAlign: 'right' }}><button style={{ color: 'var(--blue-600)', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>View</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor Portfolio */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>👥 Investor Portfolio</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Investor Name</th>
                      <th>Commitment Size</th>
                      <th>ROI</th>
                      <th>Engagement</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investors.map((investor) => (
                      <tr key={investor.name}>
                        <td style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{investor.name}</td>
                        <td style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--slate-900)' }}>{investor.commitment}</td>
                        <td><span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'var(--green-100)', color: 'var(--green-800)' }}><TrendingUp style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.25rem' }} />{investor.roi}</span></td>
                        <td><span style={{ display: 'inline-flex', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: investor.engaged === 'Yes' ? 'var(--blue-100)' : 'var(--slate-100)', color: investor.engaged === 'Yes' ? 'var(--blue-800)' : 'var(--slate-700)' }}>{investor.engaged}</span></td>
                        <td style={{ textAlign: 'right' }}><button style={{ color: 'var(--blue-600)', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>Contact</button></td>
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

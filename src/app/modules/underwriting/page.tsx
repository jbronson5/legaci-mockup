'use client';

import { useState } from 'react';
import { UserRole } from '@/lib/roles';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCard } from '@/components/DashboardCard';

export default function Underwriting() {
  const [role, setRole] = useState<UserRole>('company-president');

  const memos = [
    { dealName: 'TechStart AI', status: 'Draft', completeness: 65, analyst: 'Sarah Chen', date: '2024-01-20' },
    { dealName: 'HealthPlus Inc', status: 'Review', completeness: 85, analyst: 'Michael Torres', date: '2024-01-18' },
    { dealName: 'Industrial Automation', status: 'Approved', completeness: 100, analyst: 'Jessica Liu', date: '2024-01-15' },
    { dealName: 'Consumer Goods Ltd', status: 'Review', completeness: 78, analyst: 'David Kumar', date: '2024-01-12' },
  ];

  const sections = [
    { title: 'Executive Summary', fields: 8 },
    { title: 'Company Overview', fields: 12 },
    { title: 'Financial Analysis', fields: 15 },
    { title: 'Industry & Market', fields: 10 },
    { title: 'Management Team', fields: 8 },
    { title: 'Investment Thesis', fields: 6 },
    { title: 'Risk Analysis', fields: 14 },
    { title: 'Valuation', fields: 10 },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>AI Underwriting</h1>
              <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>Investment memo templates and analysis</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <DashboardCard title="Active Memos" value="12" change="+2" changeType="positive" />
              <DashboardCard title="Approved" value="8" change="67%" changeType="positive" />
              <DashboardCard title="Avg Completion" value="81%" change="+5%" changeType="positive" />
            </div>

            {/* Template */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>Investment Memo Template</h2>
              <p style={{ color: 'var(--slate-600)', marginBottom: '2rem' }}>AI-assisted investment memo structure with automated data extraction and analysis</p>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {sections.map((section) => (
                  <div key={section.title} style={{ border: '1px solid var(--slate-200)', borderRadius: '0.5rem', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{section.title}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginTop: '0.25rem' }}>{section.fields} fields</p>
                    </div>
                    <button style={{ color: 'var(--blue-600)', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>Edit</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Memos List */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>Recent Investment Memos</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Deal Name</th>
                      <th>Status</th>
                      <th>Completeness</th>
                      <th>Analyst</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memos.map((memo) => (
                      <tr key={memo.dealName}>
                        <td style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{memo.dealName}</td>
                        <td><span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: memo.status === 'Approved' ? 'var(--green-100)' : memo.status === 'Review' ? 'var(--yellow-100)' : 'var(--slate-100)', color: memo.status === 'Approved' ? 'var(--green-800)' : memo.status === 'Review' ? 'var(--yellow-800)' : 'var(--slate-700)' }}>{memo.status}</span></td>
                        <td><div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '6rem', backgroundColor: 'var(--slate-200)', borderRadius: '9999px', height: '0.5rem' }}><div style={{ backgroundColor: 'var(--blue-600)', height: '0.5rem', borderRadius: '9999px', width: `${memo.completeness}%` }} /></div><span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--slate-600)' }}>{memo.completeness}%</span></div></td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{memo.analyst}</td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{memo.date}</td>
                        <td style={{ textAlign: 'right' }}><button style={{ color: 'var(--blue-600)', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>View</button></td>
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

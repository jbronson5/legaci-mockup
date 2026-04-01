'use client';

import { useState } from 'react';
import { UserRole } from '@/lib/roles';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCard } from '@/components/DashboardCard';
import { Eye } from 'lucide-react';

export default function SOPs() {
  const [role, setRole] = useState<UserRole>('employee');

  const sops = [
    { title: 'Employee Onboarding Process', category: 'HR', views: 342, lastUpdated: '2024-01-10', version: '2.1' },
    { title: 'Financial Reporting Standards', category: 'Finance', views: 289, lastUpdated: '2024-01-08', version: '3.0' },
    { title: 'Customer Service Excellence', category: 'Operations', views: 156, lastUpdated: '2024-01-05', version: '2.3' },
    { title: 'Safety & Compliance Handbook', category: 'Compliance', views: 421, lastUpdated: '2024-01-03', version: '1.9' },
    { title: 'Sales Process & Pipeline', category: 'Sales', views: 267, lastUpdated: '2024-01-02', version: '2.5' },
    { title: 'Quality Assurance Standards', category: 'Operations', views: 198, lastUpdated: '2023-12-28', version: '1.7' },
    { title: 'IT Systems & Access Policy', category: 'IT', views: 512, lastUpdated: '2023-12-25', version: '2.0' },
    { title: 'Travel & Expense Policy', category: 'Finance', views: 134, lastUpdated: '2023-12-20', version: '1.5' },
  ];

  const categories = [
    { name: 'HR', count: 6, color: 'var(--blue-100)' },
    { name: 'Finance', count: 8, color: 'var(--green-100)' },
    { name: 'Operations', count: 12, color: 'var(--purple-100)' },
    { name: 'Compliance', count: 5, color: 'var(--red-100)' },
    { name: 'Sales', count: 7, color: 'var(--yellow-100)' },
    { name: 'IT', count: 4, color: 'var(--indigo-100)' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>SOP Management</h1>
              <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>Standard operating procedures and guidelines</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <DashboardCard title="Total SOPs" value="52" change="+4" changeType="positive" />
              <DashboardCard title="Total Views" value="2.3K" change="+18%" changeType="positive" />
              <DashboardCard title="Updated This Month" value="8" change="+2" changeType="positive" />
              <DashboardCard title="Categories" value="12" change="Organized" changeType="neutral" />
            </div>

            {/* Search & Categories */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.25rem' }}>🔍</span>
                <input type="text" placeholder="Search SOPs..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.875rem', color: 'var(--slate-900)' }} />
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {categories.map((cat) => (
                  <button key={cat.name} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '500', fontSize: '0.875rem', backgroundColor: cat.color, border: 'none', cursor: 'pointer' }}>
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* SOPs List */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>📖 Standard Operating Procedures</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>SOP Title</th>
                      <th>Category</th>
                      <th>Version</th>
                      <th>Last Updated</th>
                      <th>Views</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sops.map((sop) => (
                      <tr key={sop.title}>
                        <td style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{sop.title}</td>
                        <td><span style={{ display: 'inline-flex', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'var(--slate-100)', color: 'var(--slate-700)' }}>{sop.category}</span></td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>v{sop.version}</td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{sop.lastUpdated}</td>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--slate-600)' }}><Eye style={{ width: '1rem', height: '1rem' }} />{sop.views}</td>
                        <td style={{ textAlign: 'right' }}><button style={{ color: 'var(--blue-600)', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>Read</button></td>
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

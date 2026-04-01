'use client';

import { useState } from 'react';
import { UserRole } from '@/lib/roles';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCard } from '@/components/DashboardCard';

export default function Diligence() {
  const [role, setRole] = useState<UserRole>('company-president');

  const documents = [
    { name: 'Articles of Incorporation', category: 'Corporate', status: 'Received', uploadDate: '2024-01-19', size: '2.4 MB' },
    { name: 'Financial Statements (3yr)', category: 'Financial', status: 'Received', uploadDate: '2024-01-18', size: '5.1 MB' },
    { name: 'Tax Returns (3yr)', category: 'Tax', status: 'Review', uploadDate: '2024-01-17', size: '3.7 MB' },
    { name: 'Customer Contracts', category: 'Commercial', status: 'Pending', uploadDate: '2024-01-16', size: '8.2 MB' },
    { name: 'Employment Agreements', category: 'HR', status: 'Received', uploadDate: '2024-01-15', size: '4.3 MB' },
    { name: 'IP Documentation', category: 'Legal', status: 'Review', uploadDate: '2024-01-14', size: '6.8 MB' },
    { name: 'Insurance Policies', category: 'Insurance', status: 'Received', uploadDate: '2024-01-13', size: '1.9 MB' },
    { name: 'Environmental Compliance', category: 'Compliance', status: 'Pending', uploadDate: '2024-01-12', size: '3.5 MB' },
  ];

  const categories = [
    { name: 'Corporate', count: 8, total: 8 },
    { name: 'Financial', count: 6, total: 6 },
    { name: 'Legal', count: 12, total: 12 },
    { name: 'Tax', count: 4, total: 4 },
    { name: 'HR', count: 7, total: 8 },
    { name: 'Commercial', count: 5, total: 6 },
    { name: 'Compliance', count: 3, total: 4 },
    { name: 'Insurance', count: 2, total: 2 },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>Diligence & Closing</h1>
              <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>Document management and closing workflows</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <DashboardCard title="Total Documents" value="48" change="+8" changeType="positive" />
              <DashboardCard title="Received" value="34" change="71%" changeType="positive" />
              <DashboardCard title="Under Review" value="8" change="17%" changeType="neutral" />
              <DashboardCard title="Pending" value="6" change="+2" changeType="negative" />
            </div>

            {/* Categories */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {categories.map((cat) => (
                <div key={cat.name} style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '0.25rem' }}>{cat.count}/{cat.total} received</p>
                  </div>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: 'var(--blue-100)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📁</div>
                </div>
              ))}
            </div>

            {/* Documents */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>Diligence Documents</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Document Name</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Size</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.name}>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ fontSize: '1rem' }}>📄</span><span style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{doc.name}</span></td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{doc.category}</td>
                        <td><span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: doc.status === 'Received' ? 'var(--green-100)' : doc.status === 'Review' ? 'var(--yellow-100)' : 'var(--slate-100)', color: doc.status === 'Received' ? 'var(--green-800)' : doc.status === 'Review' ? 'var(--yellow-800)' : 'var(--slate-700)' }}>{doc.status}</span></td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{doc.uploadDate}</td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{doc.size}</td>
                        <td style={{ textAlign: 'right' }}><button style={{ color: 'var(--blue-600)', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>Download</button></td>
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

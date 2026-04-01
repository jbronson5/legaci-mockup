'use client';

import { useState } from 'react';
import { UserRole } from '@/lib/roles';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCard } from '@/components/DashboardCard';

export default function HR() {
  const [role, setRole] = useState<UserRole>('employee');

  const employees = [
    { name: 'Emily Johnson', role: 'Senior Manager', dept: 'Operations', salary: '$95,000', profitShare: '$12,400' },
    { name: 'Marcus Chen', role: 'Developer', dept: 'Engineering', salary: '$105,000', profitShare: '$13,650' },
    { name: 'Sarah Williams', role: 'Finance Manager', dept: 'Finance', salary: '$88,000', profitShare: '$11,440' },
    { name: 'David Rodriguez', role: 'Sales Lead', dept: 'Sales', salary: '$82,000', profitShare: '$10,660' },
    { name: 'Lisa Anderson', role: 'Product Manager', dept: 'Product', salary: '$110,000', profitShare: '$14,300' },
    { name: 'James Wilson', role: 'HR Specialist', dept: 'HR', salary: '$72,000', profitShare: '$9,360' },
  ];

  const departments = [
    { name: 'Engineering', count: 24, budget: '$2.4M', utilization: 92 },
    { name: 'Sales', count: 18, budget: '$1.8M', utilization: 88 },
    { name: 'Operations', count: 15, budget: '$1.2M', utilization: 95 },
    { name: 'Finance', count: 8, budget: '$640K', utilization: 85 },
    { name: 'Product', count: 12, budget: '$1.1M', utilization: 90 },
    { name: 'HR', count: 4, budget: '$280K', utilization: 78 },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--slate-50)' }}>
      <Sidebar role={role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header role={role} onRoleChange={setRole} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>HR System</h1>
              <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>Employee management and engagement</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <DashboardCard title="Total Employees" value="81" change="+5" changeType="positive" />
              <DashboardCard title="Active Roles" value="34" change="42%" changeType="neutral" />
              <DashboardCard title="Annual Payroll" value="$8.1M" change="+12%" changeType="positive" />
              <DashboardCard title="Engagement Score" value="8.2/10" change="+0.4" changeType="positive" />
            </div>

            {/* Departments */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>Department Overview</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {departments.map((dept) => (
                  <div key={dept.name} style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', padding: '1.5rem' }}>
                    <h3 style={{ fontWeight: '600', color: 'var(--slate-900)', marginBottom: '1rem' }}>{dept.name}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Team Size</span>
                        <span style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{dept.count}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Budget</span>
                        <span style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{dept.budget}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Utilization</span>
                        <span style={{ fontWeight: '600', color: 'var(--slate-900)' }}>{dept.utilization}%</span>
                      </div>
                      <div style={{ width: '100%', backgroundColor: 'var(--slate-200)', borderRadius: '9999px', height: '0.5rem', marginTop: '0.5rem' }}>
                        <div style={{ backgroundColor: 'var(--blue-600)', height: '0.5rem', borderRadius: '9999px', width: `${dept.utilization}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee List */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--slate-200)', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--slate-900)' }}>👥 Employee Directory</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Department</th>
                      <th>Salary</th>
                      <th>Profit Share</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((emp) => (
                      <tr key={emp.name}>
                        <td style={{ fontWeight: '500', color: 'var(--slate-900)' }}>{emp.name}</td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{emp.role}</td>
                        <td style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{emp.dept}</td>
                        <td style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--slate-900)' }}>{emp.salary}</td>
                        <td><span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'var(--green-100)', color: 'var(--green-800)' }}>{emp.profitShare}</span></td>
                        <td><span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'var(--blue-100)', color: 'var(--blue-800)' }}>Active</span></td>
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

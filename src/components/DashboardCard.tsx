import React from 'react';

interface DashboardCardProps {
  title: string;
  value?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  children?: React.ReactNode;
}

export function DashboardCard({
  title,
  value,
  change,
  changeType = 'neutral',
  children,
}: DashboardCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid var(--slate-200)',
        padding: '1.5rem',
      }}
    >
      <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--slate-600)', textTransform: 'uppercase', letterSpacing: '0.025em' }}>
        {title}
      </h3>
      {value && (
        <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--slate-900)' }}>{value}</span>
          {change && (
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: '500',
                color:
                  changeType === 'positive'
                    ? 'var(--green-600)'
                    : changeType === 'negative'
                    ? 'var(--red-600)'
                    : 'var(--slate-500)',
              }}
            >
              {changeType === 'positive' ? '↑' : changeType === 'negative' ? '↓' : '→'} {change}
            </span>
          )}
        </div>
      )}
      {children && <div style={{ marginTop: '1rem' }}>{children}</div>}
    </div>
  );
}

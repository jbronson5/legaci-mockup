'use client';

import { UserRole, MODULES, MODULE_ACCESS, CEO_MODULES, CFO_MODULES, COO_MODULES, CMO_MODULES, CHRO_MODULES, CLO_MODULES, CRO_MODULES, CTO_MODULES } from '@/lib/roles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  role: UserRole;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const moduleIds = MODULE_ACCESS[role];

  return (
    <aside style={{ width: '16rem', backgroundColor: '#0f172a', color: 'white', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--slate-800)' }}>
      {/* Header */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-800)' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Legaci</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', marginTop: '0.25rem' }}>Portfolio Platform</p>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 1rem' }}>
        {/* CEO Modules */}
        {role === 'holdco' && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              🤴 CEO
            </div>
            {Object.entries(CEO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* CFO Modules */}
        {(role === 'holdco') && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              💰 CFO
            </div>
            {Object.entries(CFO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* COO Modules */}
        {(role === 'holdco') && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              ⚙️ COO
            </div>
            {Object.entries(COO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* CMO Modules */}
        {(role === 'holdco') && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              📢 CMO
            </div>
            {Object.entries(CMO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* CHRO Modules */}
        {(role === 'holdco') && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              👥 CHRO
            </div>
            {Object.entries(CHRO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* CLO Modules */}
        {(role === 'holdco') && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              ⚖️ CLO
            </div>
            {Object.entries(CLO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* CRO Modules */}
        {(role === 'holdco') && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              🎯 CRO
            </div>
            {Object.entries(CRO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* CTO Modules */}
        {(role === 'holdco') && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              🤖 CTO
            </div>
            {Object.entries(CTO_MODULES).map(([slug, module]) => {
              const href = `/modules/${slug}`;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.375rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  {module.icon} {module.name}
                </Link>
              );
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '0.75rem 0' }} />
          </>
        )}

        {/* Standard Modules */}
        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
          {role === 'holdco' ? 'Legacy' : 'Modules'}
        </div>
        {moduleIds.map((moduleId) => {
          const module = MODULES[moduleId as keyof typeof MODULES];
          const href = `/modules/${module.slug}`;
          const isActive = pathname.includes(module.slug);

          return (
            <Link
              key={moduleId}
              href={href}
              style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                fontSize: '0.75rem',
                fontWeight: '500',
                marginBottom: '0.375rem',
                backgroundColor: isActive ? '#2563eb' : 'transparent',
                color: isActive ? 'white' : 'var(--slate-300)',
                textDecoration: 'none',
                transition: 'background-color 200ms',
              }}
            >
              {module.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--slate-800)', padding: '1rem', fontSize: '0.75rem', color: 'var(--slate-400)' }}>
        <p>© 2024 Legaci</p>
      </div>
    </aside>
  );
}

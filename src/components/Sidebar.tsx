'use client';

import { UserRole, MODULES, MODULE_ACCESS, CEO_MODULES, CFO_MODULES, COO_MODULES, CMO_MODULES, CHRO_MODULES, CLO_MODULES, CRO_MODULES, CTO_MODULES } from '@/lib/roles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  role: UserRole;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const moduleIds = MODULE_ACCESS[role as keyof typeof MODULE_ACCESS] || [];
  
  // Map roles to their C-Suite modules
  const cSuiteModulesMap: Record<string, Record<string, any>> = {
    holdco: CEO_MODULES,
    cfo: CFO_MODULES,
    coo: COO_MODULES,
    cmo: CMO_MODULES,
    chro: CHRO_MODULES,
    clo: CLO_MODULES,
    cro: CRO_MODULES,
    cto: CTO_MODULES,
  };

  const cSuiteModules = cSuiteModulesMap[role] || {};

  const renderLink = (slug: string, module: any) => {
    const href = `/modules/${slug}`;
    const isActive = pathname.includes(slug);

    return (
      <Link
        key={slug}
        href={href}
        style={{
          display: 'block',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
          backgroundColor: isActive ? '#2563eb' : 'transparent',
          color: isActive ? 'white' : 'var(--slate-300)',
          textDecoration: 'none',
          transition: 'background-color 200ms',
        }}
      >
        <div style={{ fontWeight: '600' }}>{module.icon} {module.name}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: '0.125rem' }}>
          {module.description}
        </div>
      </Link>
    );
  };

  return (
    <aside style={{ width: '16rem', backgroundColor: '#0f172a', color: 'white', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--slate-800)' }}>
      {/* Header */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--slate-800)' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Legaci</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', marginTop: '0.25rem' }}>Portfolio Platform</p>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 1rem' }}>
        {/* C-Suite Modules (Executive Leadership) */}
        {Object.keys(cSuiteModules).length > 0 && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              Strategic
            </div>
            {Object.entries(cSuiteModules).map(([slug, module]) => renderLink(slug, module))}
            <div style={{ height: '1px', backgroundColor: 'var(--slate-700)', margin: '1rem 0' }} />
          </>
        )}

        {/* Standard Modules (Operations) */}
        {moduleIds.length > 0 && (
          <>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              {role === 'holdco' ? 'Operations' : 'Modules'}
            </div>
            {moduleIds.map((moduleId) => {
              const module = MODULES[moduleId as keyof typeof MODULES];
              const slug = module.slug;
              const isActive = pathname.includes(slug);

              return (
                <Link
                  key={moduleId}
                  href={`/modules/${slug}`}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : 'var(--slate-300)',
                    textDecoration: 'none',
                    transition: 'background-color 200ms',
                  }}
                >
                  <div style={{ fontWeight: '600' }}>{module.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: '0.125rem' }}>
                    {module.description}
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </nav>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--slate-800)', padding: '1rem', fontSize: '0.75rem', color: 'var(--slate-400)' }}>
        <p>© 2024 Legaci</p>
      </div>
    </aside>
  );
}

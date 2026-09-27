import { lazy, Suspense, useState, useEffect, type ReactNode } from 'react';
import { SiteApp } from './site/SiteApp';
import { navigate } from './site/router';

// Portals are loaded on demand so public visitors don't download them.
const ResultPortal = lazy(() => import('./components/ResultPortal').then((m) => ({ default: m.ResultPortal })));
const AdminPanel = lazy(() => import('./components/AdminPanel').then((m) => ({ default: m.AdminPanel })));

const portal = (node: ReactNode) => <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>{node}</Suspense>;

type ViewMode = 'site' | 'results' | 'admin';

// The public website (including the alumni portal at /alumni) is path-routed inside SiteApp;
// the Result and Admin portals keep their hash routes. Old #alumni links are redirected to /alumni.
function viewFromHash(): ViewMode {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#alumni') {
    navigate('/alumni', { replace: true });
    return 'site';
  }
  if (hash === '#results' || hash === '#result') return 'results';
  if (hash === '#admin') return 'admin';
  return 'site';
}

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>(viewFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const view = viewFromHash();
      setCurrentView(view);
      if (view !== 'site') window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToView = (view: ViewMode | 'alumni') => {
    if (view === 'alumni') {
      navigate('/alumni');
      setCurrentView('site');
      return;
    }
    if (view === 'site') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    } else {
      window.location.hash = view;
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'results') {
    return portal(<ResultPortal onBackToHome={() => navigateToView('site')} onOpenAdmin={() => navigateToView('admin')} />);
  }

  if (currentView === 'admin') {
    return portal(
      <AdminPanel
        onBackToHome={() => navigateToView('site')}
        onOpenAlumni={() => navigateToView('alumni')}
        onOpenResults={() => navigateToView('results')}
      />,
    );
  }

  return <SiteApp />;
}

export default App;

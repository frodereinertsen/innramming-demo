import { Header } from './Header';
import { Footer } from './Footer';
import { Menu } from '../components/Menu';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { Outlet } from 'react-router-dom';
import { useScreen } from '@fremtind/jkl-react-hooks';
import { MobileMenu } from '../components/MobileMenu';

export const Layout = () => {
  const screen = useScreen();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <Header />
      <main
        style={{
          flexGrow: 1,
          width: '100vw',
          overflow: 'auto',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--jkl-toggle-switch-expanding-pill-background-color)', padding: 30 }}>
            <div style={{ flexGrow: 1}}>
              {screen.isSmallDevice ? <MobileMenu /> : <Menu />}
            </div>
            <DarkModeToggle />
          </div>
          <div style={{ margin: 40 }}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

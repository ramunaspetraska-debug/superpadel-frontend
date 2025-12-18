import { Outlet } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';
import { Footer } from '../components/Footer';
import { TopNav } from '../components/TopNav';

export const RootLayout = () => (
  <div className="min-h-screen bg-surface text-white">
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(192,132,252,0.08),_transparent_40%)]" />
    <TopNav />
    <main className="relative z-10 mx-auto max-w-6xl px-4 pb-28 pt-6 md:pb-12 md:pt-10 lg:px-6">
      <Outlet />
    </main>
    <Footer />
    <BottomNav />
  </div>
);


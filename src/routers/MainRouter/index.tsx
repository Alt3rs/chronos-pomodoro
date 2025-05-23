import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { NotFound } from '../../Pages/NotFound/indes';
import { AboutPomodoro } from '../../Pages/AboutPomodoro/indes';
import { Home } from '../../Pages/Home';
import { useEffect } from 'react';
import { History } from '../../Pages/History';
import { Settings } from '../../Pages/Settings';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-pomodoro/' element={<AboutPomodoro />}></Route>
        <Route path='/history/' element={<History />}></Route>
        <Route path='/settings/' element={<Settings />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

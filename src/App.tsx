import './style/theme.css';
import './style/global.css';
import { Home } from './Pages/Home';
import { TaskContextProvider } from './Context/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFound } from './Pages/NotFound/indes';
import { AboutPomodoro } from './Pages/AboutPomodoro/indes';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about-pomodoro/' element={<AboutPomodoro />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}

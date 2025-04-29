import './style/theme.css';
import './style/global.css';

import { Home } from './Pages/Home';
import { TaskContextProvider } from './Context/TaskContext/TaskContextProvider';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

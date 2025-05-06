import './style/theme.css';
import './style/global.css';
import { Home } from './Pages/Home';
import { TaskContextProvider } from './Context/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}

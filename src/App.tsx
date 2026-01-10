import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/index.tsx';
import TaskListPage from "./pages/tasks/taskListPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskListPage />} />
    </Routes>
  );
}

export default App;

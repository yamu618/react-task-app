import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/index.tsx';
import TaskListPage from "./pages/tasks/taskListPage.tsx";
import TaskDetailPage from "./pages/tasks/taskDetailPage.tsx";
import TaskCreatePage from "./pages/tasks/taskCreatePage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskListPage />} />
      <Route path="/tasks/:id" element={<TaskDetailPage />} />
      <Route path="/tasks/new" element={<TaskCreatePage />} />
    </Routes>
  );
}

export default App;

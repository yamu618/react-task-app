import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/index.tsx';
import TaskListPage from "./pages/tasks/taskListPage.tsx";
import TaskDetailPage from "./pages/tasks/taskDetailPage.tsx";
import TaskCreatePage from "./pages/tasks/taskCreatePage.tsx";
import TaskEditPage from "./pages/tasks/taskEditPage.tsx";
import Header from './shared/components/Header.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/tasks/new" element={<TaskCreatePage />} />
        <Route path="/tasks/:id/edit" element={<TaskEditPage />} />
      </Routes>
    </>
  );
}

export default App;

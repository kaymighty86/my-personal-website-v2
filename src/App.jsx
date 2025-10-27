import { createBrowserRouter, RouterProvider } from 'react-router';
import RootPage from './components/pages/RootPage';
import Home from './components/pages/Home';
import ProjectsPage from './components/pages/ProjectsPage';
import { projectsPageLoader } from './components/pages/ProjectsPageLoader';

const browserRouter = createBrowserRouter([
  {
    id:"root",
    path: "/",
    element: <RootPage />,
    loader: projectsPageLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <ProjectsPage />
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App

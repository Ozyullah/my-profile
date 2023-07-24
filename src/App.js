import logo from './logo.svg';
// import './App.css';
import Home from './FixedPages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import routers from './SharedPages/RouterPage/PagesRoute/PagesRoute';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;

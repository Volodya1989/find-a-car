import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const PageNotFound = lazy(() => import('../Pages/PageNotFound'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

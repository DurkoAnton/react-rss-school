import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import HomePage from './pages/homePage/HomePage';
import DetalsSection from './components/detailsSection/DetailsSection';
import NotFound from './components/notFound/NotFound';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}>
            <Route path="details" element={<DetalsSection />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;

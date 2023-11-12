import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import { Loader } from './components/Loader';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='' element={<Home />} />
                <Route
                    path='/cart'
                    element={
                        <Suspense fallback={<Loader />}>
                            <Cart />
                        </Suspense>
                    }
                />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;

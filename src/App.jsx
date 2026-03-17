import css from "./App.module.css";
import { Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home';
import LayoutComp from "./components/Layout/Layout";
import Register from "./pages/Register/Register";
import Contacts from "./pages/Contacts/Contacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { Toaster } from "react-hot-toast";
import { getMeThunk } from "./redux/auth/operations";
import Background from "./components/Background/Background";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Background />
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(99,102,241,0.18)',
            color: '#0f172a',
            fontSize: '0.88rem',
            fontFamily: "'Inter', sans-serif",
            boxShadow: '0 8px 24px rgba(79,70,229,0.14)',
          },
          success: { iconTheme: { primary: '#10b981', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          } />
        </Route>
        <Route path="login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

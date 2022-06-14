import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
// import Index from './pages/home';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Setting from "./pages/admin/setting";
import Doing from "./pages/admin/doing";
import Done from "./pages/admin/done";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import RequireAuth from "./components/common/RequireAuth";
import {AuthProvider} from "./hooks/useAuth";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            {/*嵌套路由*/}
            <Route path='/admin'>
              <Route path='setting' element={<RequireAuth><Setting /></RequireAuth>} />
              <Route path='doing' element={<RequireAuth><Doing /></RequireAuth>} />
              <Route path='done' element={<RequireAuth><Done /></RequireAuth>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

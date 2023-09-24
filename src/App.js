import './App.css';
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ResetPassword from './pages/reset-password';
import Dashboard from './pages/dashboard';
import SendCoinPage from './pages/sendCoinPage';
import ReceiveCoin from './pages/receiveCoinPage';
import ActivateCard from './pages/activateCardPage';
import CardListPage from './pages/cardListPage';
import AdminPanel from './pages/adminPanel';
import AdminSidePaNel from './components/AdminSidePanel';
import "./style.css";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./style.css";
import UserDetails from './components/UserDetails';
import CardControl from './components/CardControl';
import BalanceControl from './components/BalanceControl';
import BalanceControlCrDr from './components/BalanceControlCrDr';
import AdminSingleUserRegister from './components/AdminSingleUserRegister';
import AdminUpdateQR from './components/AdminUpdateQR';
import ActivateCardPayment from './components/ActivateCardPayment';
import PayAddressComp from './components/PayAddressComp';
import UserDetailsResult from './components/UserDetailsResult';
import ChartPage from './pages/chart-page';
import SupportPage from './pages/supportPage';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< SignUp />}></Route>
        <Route path='/login' element={< Login />}></Route>
        <Route path='/reset-password' element={< ResetPassword />}></Route>
        <Route path='/dashboard' element={< Dashboard />}></Route>
        <Route path='/dashboard/send-coin' element={< SendCoinPage />}></Route>
        <Route path='/dashboard/receive-coin' element={< ReceiveCoin />}></Route>
        <Route path='/dashboard/chart' element={< ChartPage />}></Route>
        <Route path='/activate-card' element={< ActivateCard />}></Route>
        <Route path='/activate-card/card-list' element={< CardListPage />}></Route>
        <Route path='/activate-card/card-list/card-payment' element={< ActivateCardPayment />}></Route>
        <Route path='/activate-card/card-list/card-payment/card-payment-qr' element={< PayAddressComp />}></Route>
        <Route path='/admin' element={<UserDetails />}></Route>
        <Route path="/admin/user-details" element={<UserDetailsResult />}></Route>
        <Route path='/admin/card-control' element={<CardControl />}></Route>
        <Route path='/admin/balance-control' element={<BalanceControl />}></Route>
        <Route path='/admin/balance-control/info' element={<BalanceControlCrDr />}></Route>
        <Route path='/admin/single-user-register' element={<AdminSingleUserRegister />}></Route>
        <Route path='/admin/update-qr' element={<AdminUpdateQR />}></Route>
      </Routes>
    </>


  );
}

export default App;

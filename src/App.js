import './App.css';
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ResetPassword from './pages/reset-password';
import Dashboard from './pages/dashboard';
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
import DashboardSupportPage from './pages/dashboard-support-page';
import DashboardReportPage from './pages/dashboard-report-page';
import AdminSupportPage from './pages/admin-support-page';
import AdminReportPage from './pages/admin-report-page';
import BtcChartPage from './pages/chart-page-btc';
import EthChartPage from './pages/chart-page-eth';
import SendCoinBtc from './pages/send-coin-btc';
import SendCoinEth from './pages/send-coin-eth';
import ReceiveCoinBtc from './pages/receive-coin-btc';
import ReceiveCoinEth from './pages/receive-coin-eth';
import DashboardSettingsPage from './pages/dashboard-settings-page';
import Home from './pages/home';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/signup' element={< SignUp />}></Route>
        <Route path='/login' element={< Login />}></Route>
        <Route path='/reset-password' element={< ResetPassword />}></Route>



        <Route path='/dashboard' element={< Dashboard />}></Route>

        <Route path='/btc-chart' element={< BtcChartPage />}></Route>
        <Route path='/eth-chart' element={< EthChartPage />}></Route>

        <Route path='/send-coin-btc' element={< SendCoinBtc />}></Route>
        <Route path='/send-coin-eth' element={< SendCoinEth />}></Route>

        <Route path='/receive-coin-btc' element={< ReceiveCoinBtc />}></Route>
        <Route path='/receive-coin-eth' element={< ReceiveCoinEth />}></Route>



        <Route path='/dashboard-support' element={< DashboardSupportPage />}></Route>
        <Route path='/dashboard-report' element={< DashboardReportPage />}></Route>
        <Route path='/dashboard-settings' element={< DashboardSettingsPage />}></Route>




        <Route path='/activate-card' element={< ActivateCard />}></Route>
        <Route path='/activate-card/card-list' element={< CardListPage />}></Route>
        <Route path='/activate-card/card-list/card-payment' element={< ActivateCardPayment />}></Route>
        <Route path='/activate-card/card-list/card-payment/card-payment-qr' element={< PayAddressComp />}></Route>


        <Route path='/admin' element={<UserDetails />}></Route>
        <Route path='/user-details' element={<UserDetails />}></Route>
        <Route path="/admin/user-details" element={<UserDetailsResult />}></Route>

        <Route path='/balance-control' element={<BalanceControl />}></Route>
        <Route path='/card-control' element={<CardControl />}></Route>

        <Route path='/admin-support' element={< AdminSupportPage />}></Route>
        <Route path='/admin-report' element={< AdminReportPage />}></Route>

        <Route path='/single-user-register' element={<AdminSingleUserRegister />}></Route>
        <Route path='/update-qr' element={<AdminUpdateQR />}></Route>





        <Route path='/admin/balance-control/info' element={<BalanceControlCrDr />}></Route>
      </Routes>
    </>


  );
}

export default App;

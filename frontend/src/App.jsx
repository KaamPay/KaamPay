import React, { useState } from 'react';
import { DemoModeProvider, useDemoMode } from './hooks/useDemoMode.jsx';
import { GlobalProvider } from './context/GlobalState.jsx';
import DashboardScreen from './screens/01_Dashboard';
import VoiceInputScreen from './screens/02_VoiceInput';
import PayrollReviewScreen from './screens/03_PayrollReview';
import PaymentSuccessScreen from './screens/04_PaymentSuccess';
import WorkerProfileScreen from './screens/05_WorkerProfile';
import ContractorDashboardScreen from './screens/06_ContractorDashboard';
import AddWorkerScreen from './screens/07_AddWorker';
import AddMoneyScreen from './screens/08_AddMoney';
import WalletSuccessScreen from './screens/09_WalletSuccess';
import CreditScoreScreen from './screens/10_CreditScore';
import BottomNav from './components/BottomNav';

function AppContent() {
  const { demoMode, setDemoMode } = useDemoMode();
  const [currentScreen, setCurrentScreen] = useState('1');
  const [walletTopUpAmount, setWalletTopUpAmount] = useState(0);
  const [selectedWorkerId, setSelectedWorkerId] = useState('W003');

  const handleNavigate = (target) => {
    // Handle parameterized navigation like '9:5000' or '10:W003'
    if (typeof target === 'string' && target.startsWith('9:')) {
      const amount = parseInt(target.split(':')[1], 10) || 0;
      setWalletTopUpAmount(amount);
      setCurrentScreen('9');
    } else if (typeof target === 'string' && target.startsWith('10:')) {
      const wId = target.split(':')[1] || 'W003';
      setSelectedWorkerId(wId);
      setCurrentScreen('10');
    } else if (typeof target === 'string' && target.startsWith('5:')) {
      const wId = target.split(':')[1] || 'W003';
      setSelectedWorkerId(wId);
      setCurrentScreen('5');
    } else {
      setCurrentScreen(target);
    }
  };

  const renderScreen = () => {
    switch(currentScreen) {
      case '1': return <DashboardScreen onNavigate={handleNavigate} />;
      case '2': return <VoiceInputScreen onNavigate={handleNavigate} />;
      case '3': return <PayrollReviewScreen onNavigate={handleNavigate} />;
      case '4': return <PaymentSuccessScreen onNavigate={handleNavigate} />;
      case '5': return <WorkerProfileScreen onNavigate={handleNavigate} workerId={selectedWorkerId} />;
      case '6': return <ContractorDashboardScreen onNavigate={handleNavigate} />;
      case '7': return <AddWorkerScreen onNavigate={handleNavigate} />;
      case '8': return <AddMoneyScreen onNavigate={handleNavigate} />;
      case '9': return <WalletSuccessScreen onNavigate={handleNavigate} topUpAmount={walletTopUpAmount} />;
      case '10': return <CreditScoreScreen onNavigate={handleNavigate} workerId={selectedWorkerId} />;
      default: return <DashboardScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="mobile-wrapper" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <GlobalProvider>
      <DemoModeProvider>
        <AppContent />
      </DemoModeProvider>
    </GlobalProvider>
  );
}

export default App;

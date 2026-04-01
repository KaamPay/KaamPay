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
import BottomNav from './components/BottomNav';

function AppContent() {
  const { demoMode, setDemoMode } = useDemoMode();
  const [currentScreen, setCurrentScreen] = useState('1');

  const renderScreen = () => {
    switch(currentScreen) {
      case '1': return <DashboardScreen onNavigate={setCurrentScreen} />;
      case '2': return <VoiceInputScreen onNavigate={setCurrentScreen} />;
      case '3': return <PayrollReviewScreen onNavigate={setCurrentScreen} />;
      case '4': return <PaymentSuccessScreen onNavigate={setCurrentScreen} />;
      case '5': return <WorkerProfileScreen onNavigate={setCurrentScreen} />;
      case '6': return <ContractorDashboardScreen onNavigate={setCurrentScreen} />;
      case '7': return <AddWorkerScreen onNavigate={setCurrentScreen} />;
      default: return <DashboardScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="mobile-wrapper" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
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

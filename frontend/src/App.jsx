import React, { useState } from 'react';
import ContractorDashboard from './screens/ContractorDashboard';
import VoiceInput from './screens/VoiceInput';
import Processing from './screens/Processing';
import PayrollReview from './screens/PayrollReview';
import PaymentSuccess from './screens/PaymentSuccess';
import WorkerProfile from './screens/WorkerProfile';

/**
 * KaamPay — Main App v2.0
 * Routes between 6 screens (dashboard + original 5).
 * Demo mode toggle for hackathon resilience.
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [vaniOutput, setVaniOutput] = useState(null);
  const [hisaabOutput, setHisaabOutput] = useState(null);
  const [paisaOutput, setPaisaOutput] = useState(null);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [demoMode, setDemoMode] = useState(false);

  const resetFlow = () => {
    setCurrentScreen(0);
    setVaniOutput(null);
    setHisaabOutput(null);
    setPaisaOutput(null);
    setSelectedWorker(null);
  };

  const screens = [
    // Screen 0: Contractor Dashboard
    <ContractorDashboard
      key="dashboard"
      demoMode={demoMode}
      onNewPayroll={() => setCurrentScreen(1)}
      onViewWorker={(worker) => {
        setSelectedWorker(worker);
        setCurrentScreen(5);
      }}
    />,
    // Screen 1: Voice Input
    <VoiceInput
      key="voice"
      demoMode={demoMode}
      onTranscribed={(output) => {
        setVaniOutput(output);
        setCurrentScreen(2);
      }}
    />,
    // Screen 2: Processing
    <Processing
      key="processing"
      demoMode={demoMode}
      vaniOutput={vaniOutput}
      onProcessed={(output) => {
        setHisaabOutput(output);
        setCurrentScreen(3);
      }}
    />,
    // Screen 3: Payroll Review
    <PayrollReview
      key="review"
      demoMode={demoMode}
      hisaabOutput={hisaabOutput}
      onConfirm={(output) => {
        setPaisaOutput(output);
        setCurrentScreen(4);
      }}
    />,
    // Screen 4: Payment Success
    <PaymentSuccess
      key="payment"
      demoMode={demoMode}
      paisaOutput={paisaOutput}
      hisaabOutput={hisaabOutput}
      onViewProfile={(worker) => {
        setSelectedWorker(worker);
        setCurrentScreen(5);
      }}
    />,
    // Screen 5: Worker Profile
    <WorkerProfile
      key="profile"
      demoMode={demoMode}
      worker={selectedWorker}
      paisaOutput={paisaOutput}
      onBack={() => setCurrentScreen(paisaOutput ? 4 : 0)}
      onHome={resetFlow}
    />
  ];

  return (
    <div className="app-container">
      {/* Demo Mode Banner */}
      <div className="demo-banner">
        <span className="demo-banner-label">
          {demoMode ? '🟡 Demo Mode' : '🟢 Live'}
        </span>
        <button
          className="demo-banner-toggle"
          onClick={() => setDemoMode(!demoMode)}
        >
          {demoMode ? 'Switch to Live' : 'Demo Mode'}
        </button>
      </div>

      {screens[currentScreen]}
    </div>
  );
}

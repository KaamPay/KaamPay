import React, { useState } from 'react';
import { DEMO_DATA } from '../demo_data';
import KaamScoreRing from '../components/KaamScoreRing';
import { useGlobalState } from '../context/GlobalState';

export default function WorkerProfileScreen({ onNavigate, workerId = 'W001' }) {
  const { state } = useGlobalState();
  
  // Find worker from global state first, then demo data
  const stateWorker = state.workers.find(w => w.id === workerId);
  const demoWorker = DEMO_DATA.payroll_entries.find(w => w.worker_id === workerId);
  
  const workerData = {
    worker_id: workerId,
    worker_name: stateWorker?.name || demoWorker?.worker_name || 'Worker',
    aadhaar_last4: demoWorker?.aadhaar_last4 || stateWorker?.aadhaar_last4 || 'XXXX',
    phone_type: demoWorker?.phone_type || stateWorker?.phone_type || 'feature_phone',
  };

  const workerScore = stateWorker?.kaam_score || 350;
  
  // Use demo profile if available, otherwise generate a default one
  const profile = DEMO_DATA.kaam_scores[workerId] || {
    score: workerScore,
    band: workerScore >= 600 ? 'established' : workerScore >= 400 ? 'developing' : 'basic',
    days_in_system: stateWorker ? Math.max(1, Math.floor((Date.now() - (stateWorker.joinedAt || Date.now())) / 86400000)) : 1,
    total_earned_90d: Math.round(workerScore * 40),
    loan_eligible: workerScore >= 600 ? '₹25,000' : workerScore >= 400 ? '₹10,000' : '₹2,000',
    benefits: workerScore >= 600
      ? ['₹25,000 business loan', 'PM Vishwakarma scheme', 'PM Suraksha Bima insurance']
      : workerScore >= 400
        ? ['₹10,000 personal loan', 'PMJJBY life insurance (₹330/year)', 'Ration card linkage support']
        : ['₹2,000 emergency loan'],
    score_history: Array.from({ length: 7 }, (_, i) => Math.max(280, workerScore - (7 - i) * 5)),
  };


  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'benefits'
  
  const getBandDetails = (band) => {
    switch(band) {
      case 'established': return { label: 'Established Level', color: '#0ea56c', bg: '#e6f9f0' };
      case 'developing': return { label: 'Developing Level', color: '#00BAF2', bg: '#e0f5fd' };
      default: return { label: 'Basic Level', color: '#f59e0b', bg: '#fff8e6' };
    }
  };

  const bandConfig = getBandDetails(profile.band);

  return (
    <div className="screen-body" style={{ padding: 0, paddingBottom: 80, minHeight: '100vh', background: '#f4f6fb' }}>
      
      {/* ── HEADER HERO ── */}
      <div style={{ background: 'linear-gradient(135deg, #0d1442 0%, #1a2475 100%)', padding: '16px 16px 32px', color: 'white', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <div className="flex justify-between items-center mb-6">
          <button className="tappable" onClick={() => onNavigate('1')} style={{ color: 'white', fontSize: 20 }}>
            ← Back
          </button>
          <div style={{ fontSize: 13, color: '#7b8fcb' }}>Worker Profile</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'white', color: '#0d1442', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 24, border: '2px solid #00BAF2' }}>
            {workerData.worker_name.charAt(0)}
          </div>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 600 }}>{workerData.worker_name}</h1>
            <div style={{ fontSize: 13, color: '#7b8fcb', marginTop: 2 }}>Joined {profile.days_in_system} days ago • UPI Verified</div>
          </div>
        </div>
      </div>

      <div style={{ padding: 16, marginTop: -20, position: 'relative', zIndex: 10 }}>
        {/* ── SCORE CARD ── */}
        <div className="card mb-4" style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <KaamScoreRing score={profile.score} />
          
          <div className="mt-4" style={{ background: bandConfig.bg, color: bandConfig.color, padding: '4px 12px', borderRadius: 16, fontSize: 12, fontWeight: 600 }}>
            {bandConfig.label}
          </div>
          <div style={{ color: '#475569', fontSize: 13, marginTop: 8, textAlign: 'center' }}>
            Unlocks up to <strong>{profile.loan_eligible}</strong> in micro-credit.
          </div>

          {/* View Credit Report Button */}
          <button
            className="tappable"
            onClick={() => onNavigate('10:' + workerId)}
            style={{
              marginTop: 16, width: '100%', padding: '13px 20px', borderRadius: 12,
              background: 'linear-gradient(135deg, #00BAF2 0%, #0096c4 100%)',
              color: 'white', fontSize: 14, fontWeight: 600, border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: '0 4px 14px rgba(0,186,242,0.3)',
              transition: 'transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <span style={{ fontSize: 16 }}>📊</span>
            View Full Credit Report
          </button>
        </div>

        {/* ── METRICS ROW ── */}
        <div className="flex gap-3 mb-4">
          <div className="card flex-1 p-3">
            <div style={{ fontSize: 11, color: '#9ca3af' }}>90-Day Earned</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginTop: 4 }}>₹{profile.total_earned_90d.toLocaleString()}</div>
          </div>
          <div className="card flex-1 p-3">
            <div style={{ fontSize: 11, color: '#9ca3af' }}>Reliability</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#0ea56c', marginTop: 4 }}>94%</div>
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="flex gap-4 mb-4" style={{ borderBottom: '1px solid #e5e9f5' }}>
          <button 
            onClick={() => setActiveTab('overview')} 
            style={{ paddingBottom: 8, fontWeight: 600, fontSize: 14, color: activeTab === 'overview' ? '#0d1442' : '#9ca3af', borderBottom: activeTab === 'overview' ? '2px solid #0d1442' : 'none' }}
          >
            Activity
          </button>
          <button 
            onClick={() => setActiveTab('benefits')} 
            style={{ paddingBottom: 8, fontWeight: 600, fontSize: 14, color: activeTab === 'benefits' ? '#0d1442' : '#9ca3af', borderBottom: activeTab === 'benefits' ? '2px solid #0d1442' : 'none' }}
          >
            Benefits
          </button>
        </div>

        {/* ── TAB CONTENT ── */}
        {activeTab === 'overview' ? (
          <div className="card p-4">
            <h3 className="section-header mb-4">Score Trend (Last 7 Days)</h3>
            <div className="flex items-end justify-between" style={{ height: 100, paddingBottom: 8, borderBottom: '1px solid #e5e9f5' }}>
              {profile.score_history.slice(-7).map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '12%', height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ width: '100%', background: '#00BAF2', height: `${(s/900)*100}%`, borderRadius: '4px 4px 0 0', animation: 'barGrow 0.5s ease-out both', animationDelay: `${i*50}ms` }} />
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 8, textAlign: 'center' }}>Keep consistent attendance to reach 500</div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
             {profile.benefits.map((benefit, i) => (
               <div key={i} className="card p-4 flex gap-3 items-center">
                 <div style={{ width: 36, height: 36, borderRadius: 8, background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                   🎁
                 </div>
                 <div style={{ flex: 1 }}>
                   <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{benefit}</div>
                   <div style={{ fontSize: 12, color: '#0ea56c', fontWeight: 500, marginTop: 4 }}>Unlocked via KaamScore</div>
                 </div>
               </div>
             ))}
          </div>
        )}

      </div>
    </div>
  );
}

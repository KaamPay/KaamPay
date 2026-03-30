/**
 * DEMO DATA — Complete Offline Fallback
 * Pre-computed outputs from ALL agents.
 * If demoMode=true OR any API fails, RANG reads from this file.
 * THE DEMO NEVER STOPS.
 *
 * v2.0 — Added: balance check, disputes, dashboard, KaamScore details
 */

export const CONSTANTS = {
  demo_contractor: {
    contractor_id: "CONT_001",
    name: "Suresh Sharma",
    business: "Sharma Construction",
    location: "Delhi",
    phone: "9876500001",
    state: "Delhi",
    paytm_id: "PAYTM_CONT_001",
    paytm_account: "PAYTM_CONT_001",
    balance: 15000
  },
  demo_workers: [
    { id: "W001", worker_id: "W001", name: "Ramesh Kumar", aadhaar_last4: "4521", phone_type: "feature_phone", days_in_system: 47, kaam_score: 487, band: "developing" },
    { id: "W002", worker_id: "W002", name: "Suresh Yadav", aadhaar_last4: "7832", phone_type: "no_phone", days_in_system: 23, kaam_score: 312, band: "basic" },
    { id: "W003", worker_id: "W003", name: "Mohan Lal", aadhaar_last4: "3319", phone_type: "smartphone", days_in_system: 61, kaam_score: 621, band: "established" }
  ],
  demo_audio_transcript: "Ramesh aur Suresh ne aaj kaam kiya, 8 ghante, 700 rupay rate. Aur Mohan ne aadha din kiya.",
  demo_date: "2026-03-29",
  dispute_number: "1800-XXX-XXXX"
};

// ── DEMO_DATA — unified export for demo mode ──
export const DEMO_DATA = {
  transcript: "Ramesh aur Suresh ne aaj kaam kiya, 8 ghante, 700 rupay rate. Aur Mohan ne aadha din kiya.",

  payroll_entries: [
    {
      worker_id: "W001", worker_name: "Ramesh Kumar", aadhaar_last4: "4521",
      days_worked: 1.0, rate_per_day: 700, gross_pay: 700, deductions: 0, net_pay: 700,
      wage_compliant: true, phone_type: "feature_phone", delivery_method: "sms_payslip"
    },
    {
      worker_id: "W002", worker_name: "Suresh Yadav", aadhaar_last4: "7832",
      days_worked: 1.0, rate_per_day: 700, gross_pay: 700, deductions: 0, net_pay: 700,
      wage_compliant: true, phone_type: "no_phone", delivery_method: "card_load"
    },
    {
      worker_id: "W003", worker_name: "Mohan Lal", aadhaar_last4: "3319",
      days_worked: 0.5, rate_per_day: 700, gross_pay: 350, deductions: 0, net_pay: 350,
      wage_compliant: true, phone_type: "smartphone", delivery_method: "whatsapp_payslip"
    }
  ],

  balance_check: {
    sufficient: true,
    available_balance: 15000,
    required: 1750,
    shortfall: 0,
    message_hindi: "Balance theek hai. ₹15000 available.",
    action: null
  },

  payment_results: [
    {
      payment_id: "demo-pay-001", transaction_id: "PAYABC123DEF456",
      upi_reference: "PAYTM837462819", worker_id: "W001", worker_name: "Ramesh Kumar",
      amount: 700, status: "SUCCESS", attempts: 1,
      timestamp: "2026-03-29T18:43:22+05:30",
      delivery_method: "sms_payslip",
      delivery_status: "SMS payslip sent to Ramesh Kumar ✓",
      message_hindi: "Ramesh Kumar ko ₹700 bhej diye gaye. UPI Ref: PAYTM837462819"
    },
    {
      payment_id: "demo-pay-002", transaction_id: "PAYGHI789JKL012",
      upi_reference: "PAYTM291847562", worker_id: "W002", worker_name: "Suresh Yadav",
      amount: 700, status: "SUCCESS", attempts: 1,
      timestamp: "2026-03-29T18:43:24+05:30",
      delivery_method: "card_load",
      delivery_status: "Loaded to RuPay card ending 8321 ✓",
      message_hindi: "Suresh Yadav ko ₹700 bhej diye gaye. UPI Ref: PAYTM291847562"
    },
    {
      payment_id: "demo-pay-003", transaction_id: "PAYMNO345PQR678",
      upi_reference: "PAYTM648291037", worker_id: "W003", worker_name: "Mohan Lal",
      amount: 350, status: "SUCCESS", attempts: 1,
      timestamp: "2026-03-29T18:43:26+05:30",
      delivery_method: "whatsapp_payslip",
      delivery_status: "WhatsApp payslip sent to Mohan Lal ✓",
      message_hindi: "Mohan Lal ko ₹350 bhej diye gaye. UPI Ref: PAYTM648291037"
    }
  ],

  kaam_scores: {
    W001: {
      score: 487, band: "developing", days_in_system: 47,
      total_days_worked_90d: 39, total_earned_90d: 26950, total_payments: 39,
      unique_contractors: 1, loan_eligible: "₹10,000",
      message: "₹10,000 loan + insurance eligible",
      message_hindi: "₹10,000 loan + insurance ke liye eligible",
      progress_to_next_band: { next_band: "established", points_needed: 163, progress_percent: 75 },
      factors: [
        { name: "Work Consistency", name_hindi: "Kaam ki Niyamitata", value: 112, max: 150 },
        { name: "Days Worked", name_hindi: "Kaam ke Din", value: 136, max: 180 },
        { name: "Total Earnings", name_hindi: "Kul Kamaai", value: 139, max: 180 },
        { name: "Employer Diversity", name_hindi: "Vibhinn Niyokta", value: 30, max: 90 }
      ],
      eligibility: [
        { name: "Emergency Loan", name_hindi: "Emergency Loan", amount: "₹2,000", provider: "Paytm Postpaid", icon: "loan" },
        { name: "Personal Loan", name_hindi: "Personal Loan", amount: "₹10,000", provider: "Paytm Postpaid", icon: "loan" },
        { name: "PMJJBY Health Insurance", name_hindi: "PMJJBY Swasthya Bima", amount: "₹330/year", provider: "Govt of India", icon: "insurance" }
      ],
      benefits: ["₹10,000 personal loan", "PMJJBY life insurance (₹330/year)", "Ration card linkage support"]
    },
    W002: {
      score: 312, band: "basic", days_in_system: 23,
      total_days_worked_90d: 19, total_earned_90d: 14350, total_payments: 19,
      unique_contractors: 1, loan_eligible: "₹2,000",
      message: "₹2,000 emergency loan eligible",
      message_hindi: "₹2,000 emergency loan ke liye eligible",
      progress_to_next_band: { next_band: "developing", points_needed: 188, progress_percent: 62 },
      factors: [
        { name: "Work Consistency", name_hindi: "Kaam ki Niyamitata", value: 65, max: 150 },
        { name: "Days Worked", name_hindi: "Kaam ke Din", value: 66, max: 180 },
        { name: "Total Earnings", name_hindi: "Kul Kamaai", value: 82, max: 180 },
        { name: "Employer Diversity", name_hindi: "Vibhinn Niyokta", value: 30, max: 90 }
      ],
      eligibility: [
        { name: "Emergency Loan", name_hindi: "Emergency Loan", amount: "₹2,000", provider: "Paytm Postpaid", icon: "loan" }
      ],
      benefits: ["₹2,000 emergency loan"]
    },
    W003: {
      score: 621, band: "established", days_in_system: 61,
      total_days_worked_90d: 52, total_earned_90d: 36750, total_payments: 52,
      unique_contractors: 1, loan_eligible: "₹25,000",
      message: "₹25,000 loan + govt schemes eligible",
      message_hindi: "₹25,000 loan + sarkari yojanaon ke liye eligible",
      progress_to_next_band: { next_band: "prime", points_needed: 129, progress_percent: 83 },
      factors: [
        { name: "Work Consistency", name_hindi: "Kaam ki Niyamitata", value: 140, max: 150 },
        { name: "Days Worked", name_hindi: "Kaam ke Din", value: 180, max: 180 },
        { name: "Total Earnings", name_hindi: "Kul Kamaai", value: 175, max: 180 },
        { name: "Employer Diversity", name_hindi: "Vibhinn Niyokta", value: 30, max: 90 }
      ],
      eligibility: [
        { name: "Emergency Loan", name_hindi: "Emergency Loan", amount: "₹2,000", provider: "Paytm Postpaid", icon: "loan" },
        { name: "Personal Loan", name_hindi: "Personal Loan", amount: "₹10,000", provider: "Paytm Postpaid", icon: "loan" },
        { name: "PMJJBY Health Insurance", name_hindi: "PMJJBY Swasthya Bima", amount: "₹330/year", provider: "Govt of India", icon: "insurance" },
        { name: "PM Vishwakarma Scheme", name_hindi: "PM Vishwakarma Yojana", amount: "Up to ₹3,00,000", provider: "Govt of India", icon: "scheme" }
      ],
      benefits: ["₹25,000 business loan", "PM Vishwakarma scheme", "PM Suraksha Bima insurance", "Priority govt scheme enrollment"]
    }
  },

  // Dashboard demo data
  dashboard_summary: {
    today_total: 4200,
    today_workers: 6,
    month_total: 47300,
    pending_count: 0
  },

  dashboard_daily_totals: (() => {
    const totals = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      // Realistic variation — skip some days
      const isWorkday = d.getDay() !== 0 && Math.random() > 0.15;
      totals.push({
        date: dateStr,
        total: isWorkday ? Math.floor(1400 + Math.random() * 2800) : 0,
        count: isWorkday ? Math.floor(2 + Math.random() * 4) : 0
      });
    }
    return totals;
  })(),

  dashboard_workers: [
    { worker_id: "W001", name: "Ramesh Kumar", job_type: "unskilled", kaam_score: 487, kaam_band: "developing", last_paid_date: "2026-03-29", days_since_last_payment: 0, total_days: 39, total_earned: 26950 },
    { worker_id: "W002", name: "Suresh Yadav", job_type: "unskilled", kaam_score: 312, kaam_band: "basic", last_paid_date: "2026-03-29", days_since_last_payment: 0, total_days: 19, total_earned: 14350 },
    { worker_id: "W003", name: "Mohan Lal", job_type: "semi_skilled", kaam_score: 621, kaam_band: "established", last_paid_date: "2026-03-29", days_since_last_payment: 0, total_days: 52, total_earned: 36750 }
  ],

  dashboard_insights: [
    { icon: "star", text_hindi: "Mohan Lal aapka sabse regular worker hai", text_english: "Mohan Lal is your most reliable worker", type: "positive" },
    { icon: "trending_up", text_hindi: "Is hafte spending 12% zyada hai pichhle hafte se", text_english: "Spending is 12% higher than last week", type: "warning" }
  ]
};

// ── Legacy exports (backward compat) ──
export const DEMO_VANI_OUTPUT = {
  status: "success",
  transcript: DEMO_DATA.transcript,
  payroll_entries: [
    { worker_name: "Ramesh Kumar", days_worked: 1.0, rate_per_day: 700, gross_pay: 700.0 },
    { worker_name: "Suresh Yadav", days_worked: 1.0, rate_per_day: 700, gross_pay: 700.0 },
    { worker_name: "Mohan Lal", days_worked: 0.5, rate_per_day: 700, gross_pay: 350.0 }
  ],
  confidence: 0.94,
  readback_hindi: "Maine suna:\nRamesh Kumar — 1 din — ₹700\nSuresh Yadav — 1 din — ₹700\nMohan Lal — 0.5 din — ₹350\nSahi hai?",
  error_message: null
};

export const DEMO_HISAAB_OUTPUT = {
  status: "success",
  payroll_date: "2026-03-29",
  contractor: CONSTANTS.demo_contractor,
  entries: DEMO_DATA.payroll_entries.map((e, i) => ({
    ...e,
    wage_warning: null,
    minimum_wage: 746,
    days_in_system: CONSTANTS.demo_workers[i].days_in_system,
    is_new_worker: false
  })),
  total_payout: 1750.0,
  worker_count: 3
};

export const DEMO_PAISA_OUTPUT = {
  payment_results: DEMO_DATA.payment_results,
  scores: DEMO_DATA.kaam_scores,
  total_paid: 1750.0,
  payment_status: "all_success",
  payslips: {
    W001: { whatsapp_text: "", sms_text: "", qr_data: {}, delivery_method: "sms_payslip" },
    W002: { whatsapp_text: "", sms_text: "", qr_data: {}, delivery_method: "card_load" },
    W003: { whatsapp_text: "", sms_text: "", qr_data: {}, delivery_method: "whatsapp_payslip" }
  }
};

export const DEMO_WORKER_HISTORY = {
  W001: [
    { date: "2026-03-29", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAYABC123DEF456" },
    { date: "2026-03-28", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAY1B2C3D4E5F6" },
    { date: "2026-03-27", days_worked: 1.0, gross_pay: 750, rate_per_day: 750, transaction_id: "PAY7G8H9I0J1K2" },
    { date: "2026-03-26", days_worked: 0.5, gross_pay: 350, rate_per_day: 700, transaction_id: "PAY3L4M5N6O7P8" },
    { date: "2026-03-25", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAY9Q0R1S2T3U4" },
    { date: "2026-03-24", days_worked: 1.0, gross_pay: 680, rate_per_day: 680, transaction_id: "PAY5V6W7X8Y9Z0" },
    { date: "2026-03-22", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAYA1B2C3D4E5F" },
    { date: "2026-03-21", days_worked: 1.0, gross_pay: 650, rate_per_day: 650, transaction_id: "PAY6G7H8I9J0K1" }
  ],
  W002: [
    { date: "2026-03-29", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAYGHI789JKL012" },
    { date: "2026-03-28", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAY2L3M4N5O6P7" },
    { date: "2026-03-27", days_worked: 1.0, gross_pay: 650, rate_per_day: 650, transaction_id: "PAY8Q9R0S1T2U3" },
    { date: "2026-03-25", days_worked: 0.5, gross_pay: 350, rate_per_day: 700, transaction_id: "PAY4V5W6X7Y8Z9" },
    { date: "2026-03-24", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAYB0C1D2E3F4G" }
  ],
  W003: [
    { date: "2026-03-29", days_worked: 0.5, gross_pay: 350, rate_per_day: 700, transaction_id: "PAYMNO345PQR678" },
    { date: "2026-03-28", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAY5H6I7J8K9L0" },
    { date: "2026-03-27", days_worked: 1.0, gross_pay: 750, rate_per_day: 750, transaction_id: "PAY1M2N3O4P5Q6" },
    { date: "2026-03-26", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAY7R8S9T0U1V2" },
    { date: "2026-03-25", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAY3W4X5Y6Z7A8" },
    { date: "2026-03-24", days_worked: 1.0, gross_pay: 680, rate_per_day: 680, transaction_id: "PAY9B0C1D2E3F4" },
    { date: "2026-03-22", days_worked: 1.0, gross_pay: 700, rate_per_day: 700, transaction_id: "PAY5G6H7I8J9K0" },
    { date: "2026-03-21", days_worked: 0.5, gross_pay: 350, rate_per_day: 700, transaction_id: "PAY1L2M3N4O5P6" }
  ]
};

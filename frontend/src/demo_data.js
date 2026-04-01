export const DEMO_DATA = {

  transcript: "Ramesh aur Suresh ne aaj kaam kiya, " +
    "8 ghante, 700 rupay rate. Aur Mohan ne " +
    "aadha din kiya.",

  payroll_entries: [
    {
      worker_id: "W001",
      worker_name: "Ramesh Kumar",
      aadhaar_last4: "4521",
      days_worked: 1.0,
      rate_per_day: 700,
      gross_pay: 700,
      deductions: 0,
      net_pay: 700,
      wage_compliant: true,
      phone_type: "feature_phone",
      delivery_method: "sms_payslip"
    },
    {
      worker_id: "W002",
      worker_name: "Suresh Yadav",
      aadhaar_last4: "7832",
      days_worked: 1.0,
      rate_per_day: 700,
      gross_pay: 700,
      deductions: 0,
      net_pay: 700,
      wage_compliant: true,
      phone_type: "no_phone",
      delivery_method: "card_load"
    },
    {
      worker_id: "W003",
      worker_name: "Mohan Lal",
      aadhaar_last4: "3319",
      days_worked: 0.5,
      rate_per_day: 700,
      gross_pay: 350,
      deductions: 0,
      net_pay: 350,
      wage_compliant: true,
      phone_type: "smartphone",
      delivery_method: "whatsapp_payslip"
    }
  ],

  balance_check: {
    sufficient: true,
    available_balance: 15000,
    required: 1750,
    shortfall: 0
  },

  payment_results: [
    {
      worker_id: "W001",
      worker_name: "Ramesh Kumar",
      amount: 700,
      status: "SUCCESS",
      upi_reference: "PAYTM837462819",
      delivery: "SMS sent to +91 98765 XXXXX"
    },
    {
      worker_id: "W002",
      worker_name: "Suresh Yadav",
      amount: 700,
      status: "SUCCESS",
      upi_reference: "PAYTM291847562",
      delivery: "Loaded to card ending 8321"
    },
    {
      worker_id: "W003",
      worker_name: "Mohan Lal",
      amount: 350,
      status: "SUCCESS",
      upi_reference: "PAYTM648291037",
      delivery: "WhatsApp payslip sent"
    }
  ],

  kaam_scores: {
    "W001": {
      score: 487, band: "developing",
      days_in_system: 47,
      total_earned_90d: 28700,
      loan_eligible: "₹10,000",
      benefits: [
        "₹10,000 personal loan",
        "PMJJBY life insurance (₹330/year)",
        "Ration card linkage support"
      ],
      score_history: [
        310,320,335,350,362,378,390,
        405,418,430,445,451,460,470,
        475,480,483,485,487
      ]
    },
    "W002": {
      score: 312, band: "basic",
      days_in_system: 23,
      total_earned_90d: 14350,
      loan_eligible: "₹2,000",
      benefits: ["₹2,000 emergency loan"],
      score_history: [
        280,285,290,295,300,305,308,310,312
      ]
    },
    "W003": {
      score: 621, band: "established",
      days_in_system: 61,
      total_earned_90d: 36750,
      loan_eligible: "₹25,000",
      benefits: [
        "₹25,000 business loan",
        "PM Vishwakarma scheme",
        "PM Suraksha Bima insurance"
      ],
      score_history: [
        350,375,400,420,445,460,
        478,492,510,525,540,558,
        570,582,595,605,612,618,621
      ],
      loan_offer: {
        amount: 25000,
        rate: "14% p.a.",
        emi: 2380,
        tenure: 12,
        basis: "KaamScore 621 — Established band",
        verified_income: 36750
      }
    }
  },

  contractor: {
    name: "Suresh Sharma",
    business: "Sharma Construction",
    balance: 15000,
    total_workers: 3,
    monthly_total: 47300,
    today_total: 1750,
    pending_count: 1
  },

  insights: [
    {
      icon: "star",
      type: "positive",
      text_english: "Mohan Lal is your most consistent worker",
      text_hindi: "Mohan aapka sabse regular worker hai"
    },
    {
      icon: "trending_up",
      type: "warning",
      text_english: "Spending 12% higher than last week",
      text_hindi: "Is hafte spending 12% zyada hai"
    },
    {
      icon: "alert",
      type: "alert",
      text_english: "1 payment held — retry recommended",
      text_hindi: "1 payment pending hai"
    }
  ]
};

"use client";

export default function Pricing() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-black text-white">
      <h2 className="text-5xl font-bold mb-14">Pricing</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full px-6">
        {/* Free Plan */}
        <div className="flex flex-col justify-between bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl flex-1">
          <div>
            <h3 className="text-xl font-medium mb-2">Free Plan</h3>
            <p className="text-4xl font-bold">Free</p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Send up to 2 transfers per month</li>
              <li>✔ Basic transaction history</li>
              <li>✔ Email support</li>
              <li>✔ Limited currency support (USD, EUR, GBP)</li>
              <li>✔ Basic security features</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold border border-gray-700 hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* Standard Plan */}
        <div className="flex flex-col justify-between bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl scale-105 flex-1">
          <div>
            <h3 className="text-xl font-medium mb-2">Standard Plan</h3>
            <p className="text-4xl font-bold">$9.99<span className="text-lg font-normal">/m</span></p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Unlimited transfers</li>
              <li>✔ Transaction history with export</li>
              <li>✔ Priority email support</li>
              <li>✔ Expanded currency support</li>
              <li>✔ Advanced security features</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col justify-between bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl flex-1">
          <div>
            <h3 className="text-xl font-medium mb-2">Pro Plan</h3>
            <p className="text-4xl font-bold">$19.99<span className="text-lg font-normal">/m</span></p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Unlimited transfers with priority</li>
              <li>✔ Comprehensive analytics</li>
              <li>✔ 24/7 priority support</li>
              <li>✔ Full currency support</li>
              <li>✔ Enhanced security features</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold border border-gray-700 hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Billing toggle */}
      <div className="mt-10 flex items-center gap-3 text-gray-400">
        <div className="w-10 h-6 rounded-full bg-gray-700 flex items-center p-1">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <span>Billed Yearly</span>
      </div>
    </section>
  );
}

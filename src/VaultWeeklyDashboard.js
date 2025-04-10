import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VaultWeeklyDashboard = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());
  const [revealedDigits, setRevealedDigits] = useState([]);
  const [participants, setParticipants] = useState(0);
  const [jackpot, setJackpot] = useState(1000);
  const [code, setCode] = useState('123456');

  useEffect(() => {
    const digitsToReveal = Math.min(dayOfWeek, 4);
    const revealed = code.slice(0, digitsToReveal).split('');
    setRevealedDigits(revealed);
    setParticipants(87); // optional: replace with real logic
    const startDate = new Date('2025-04-07');
    const now = new Date();
    const weeksPassed = Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000));
    setJackpot(1000 + weeksPassed * 1000);
  }, [dayOfWeek]);

  const remainingDigits = 6 - revealedDigits.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-10 font-sans">
      <motion.h1 className="text-5xl font-bold text-green-400 mb-6 tracking-wide" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
        💰 Weekly Vault Jackpot
      </motion.h1>
      <div className="text-7xl font-extrabold text-yellow-300 mb-10 drop-shadow-xl">
        ${jackpot.toLocaleString()}
      </div>
      <div className="flex gap-6 mb-8 flex-wrap justify-center">
        <div className="bg-gray-700 rounded-xl p-6 text-center w-72 shadow-md border border-green-500">
          <h2 className="text-xl font-semibold mb-2">📆 Days Remaining</h2>
          <div className="text-4xl font-bold text-white">{Math.max(0, 6 - dayOfWeek)}</div>
        </div>
        <div className="bg-gray-700 rounded-xl p-6 text-center w-72 shadow-md border border-blue-500">
          <h2 className="text-xl font-semibold mb-2">🔢 Digits Revealed</h2>
          <div className="text-4xl font-bold text-green-300 tracking-widest">
            {revealedDigits.map((digit, idx) => <span key={idx} className="mx-1">{digit}</span>)}
            {Array(remainingDigits).fill('_').map((_, idx) => <span key={idx} className="mx-1 text-gray-500">_</span>)}
          </div>
        </div>
        <div className="bg-gray-700 rounded-xl p-6 text-center w-72 shadow-md border border-purple-500">
          <h2 className="text-xl font-semibold mb-2">👥 Participants</h2>
          <div className="text-4xl font-bold text-white">{participants}</div>
        </div>
      </div>
      <div className="text-lg text-gray-300 text-center max-w-xl mt-10">
        Spend <span className="text-green-400 font-bold">$20</span> to get a guess at the 6-digit code. One digit is revealed each day for 4 days. Guess the last 2 digits before Sunday!
      </div>
      <div className="mt-12 text-sm text-gray-500">📍 Vegas Experience • 16450 San Carlos Blvd, Fort Myers, FL</div>
    </div>
  );
};

export default VaultWeeklyDashboard;
// Dashboard component to be filled

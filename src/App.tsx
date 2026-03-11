import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Plus, Mic, Users, Sparkles, ShieldCheck, Smartphone, Info } from 'lucide-react';

const Switch = ({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-[28px] w-[48px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 ${
      checked ? 'bg-zinc-900' : 'bg-zinc-200'
    }`}
  >
    <motion.span
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
        checked ? 'translate-x-[20px]' : 'translate-x-[2px]'
      }`}
    />
  </button>
);

export default function App() {
  const [autoLabel, setAutoLabel] = useState(true);
  const [sync, setSync] = useState(true);

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-zinc-900 font-sans selection:bg-zinc-200 pb-12">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#FBFBFD]/80 backdrop-blur-xl border-b border-zinc-200/50 px-4 py-3 flex items-center justify-between">
        <button className="p-2 -ml-2 rounded-full hover:bg-zinc-100 transition-colors active:scale-95">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-semibold tracking-tight">Speaker Profiles</h1>
        <div className="w-9" /> {/* Spacer for centering */}
      </header>

      <main className="px-4 py-6 space-y-8 max-w-md mx-auto">
        
        {/* AI Banner - Replacing the bulky hero section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[20px] p-5 flex gap-4 items-start shadow-lg shadow-zinc-900/10"
        >
          <div className="bg-white/10 p-2.5 rounded-xl shadow-sm backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-[15px] font-semibold text-white mb-1.5 tracking-tight">Auto Speaker Labeling</h2>
            <p className="text-[13px] text-zinc-300 leading-relaxed">
              Memoket automatically recognizes and labels frequent speakers. Your voice data is encrypted and stays on your device.
            </p>
          </div>
        </motion.div>

        {/* My Voice Profile */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="space-y-3"
        >
          <h3 className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider ml-1">My Profile</h3>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white border border-zinc-200/60 rounded-[20px] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all text-left group"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-100 transition-colors">
              <Mic className="w-5 h-5 text-zinc-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-[16px] font-medium text-zinc-900 tracking-tight">Add Voice Profile</h4>
              <p className="text-[13px] text-zinc-500 mt-0.5">Help Memoket identify you</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-200/50 group-hover:bg-white transition-colors">
              <Plus className="w-4 h-4 text-zinc-400" />
            </div>
          </motion.button>
        </motion.section>

        {/* Saved Profiles */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between ml-1">
            <h3 className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider">Other Speakers</h3>
          </div>
          <div className="bg-white border border-zinc-200/60 rounded-[20px] shadow-sm overflow-hidden">
            <div className="p-5 border-b border-zinc-100 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0">
                 <Users className="w-5 h-5 text-zinc-400" />
               </div>
               <div>
                 <p className="text-[14px] font-medium text-zinc-700">No other speakers yet</p>
                 <p className="text-[13px] text-zinc-500 mt-0.5">Speakers you label will appear here.</p>
               </div>
            </div>
            <button className="w-full p-3.5 text-[14px] font-medium text-zinc-900 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 active:bg-zinc-100">
              <Plus className="w-4 h-4" />
              Add Speaker Manually
            </button>
          </div>
        </motion.section>

        {/* Settings */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="space-y-3"
        >
          <h3 className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Preferences</h3>
          <div className="bg-white border border-zinc-200/60 rounded-[20px] shadow-sm overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-zinc-100">
              <div className="flex gap-3.5 items-center pr-4">
                <div className="p-2 bg-zinc-50 border border-zinc-100 rounded-xl">
                  <Sparkles className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <h4 className="text-[15px] font-medium text-zinc-900 tracking-tight">Auto-label speakers</h4>
                  <p className="text-[13px] text-zinc-500 mt-0.5 leading-snug">Automatically apply profiles to recognized voices</p>
                </div>
              </div>
              <Switch checked={autoLabel} onChange={setAutoLabel} />
            </div>
            
            <div className="p-4 flex items-center justify-between border-b border-zinc-100">
              <div className="flex gap-3.5 items-center pr-4">
                <div className="p-2 bg-zinc-50 border border-zinc-100 rounded-xl">
                  <Smartphone className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <h4 className="text-[15px] font-medium text-zinc-900 tracking-tight">Sync Across Devices</h4>
                  <p className="text-[13px] text-zinc-500 mt-0.5 leading-snug">Access your profiles on both mobile and web</p>
                </div>
              </div>
              <Switch checked={sync} onChange={setSync} />
            </div>

            <div className="p-4 flex items-center justify-between bg-zinc-50/50">
              <div className="flex gap-3.5 items-center">
                <div className="p-2 bg-zinc-100 border border-zinc-200/50 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <h4 className="text-[14px] font-medium text-zinc-900 tracking-tight">Privacy & Data</h4>
                  <p className="text-[12px] text-zinc-500 mt-0.5">Your data is protected and under your control</p>
                </div>
              </div>
              <button className="p-2 hover:bg-zinc-200/50 rounded-full transition-colors">
                <Info className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}

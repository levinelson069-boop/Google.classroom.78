'use client';

import React, { useState } from 'react';
import { Globe, ArrowRight, X, Maximize2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BuiltInProxy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [proxyUrl, setProxyUrl] = useState<string | null>(null);

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    // Simple proxy logic: we use our API route
    const encodedUrl = encodeURIComponent(url.startsWith('http') ? url : `https://${url}`);
    setProxyUrl(`/api/proxy?url=${encodedUrl}`);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-white text-black px-4 py-2 font-display text-sm hover:bg-[#FF4D00] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,77,0,1)]"
      >
        <Globe size={16} />
        WEB PROXY
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl h-[80vh] bg-[#050505] border border-white/20 flex flex-col shadow-[20px_20px_0px_0px_rgba(255,77,0,0.3)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#111]">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-[#FF4D00]" />
                  <h2 className="font-display text-xl">IGNITE PROXY</h2>
                </div>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setProxyUrl(null);
                  }}
                  className="p-2 hover:bg-[#FF4D00] hover:text-black transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* URL Input */}
              {!proxyUrl ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <Globe size={64} className="text-gray-800 mb-6" />
                  <h3 className="text-3xl font-display mb-2 uppercase tracking-tight">Enter Destination</h3>
                  <p className="text-gray-500 font-mono text-xs mb-8 uppercase tracking-widest">Bypass filters with our built-in stealth proxy</p>
                  
                  <form onSubmit={handleLaunch} className="w-full max-w-md relative">
                    <input 
                      type="text"
                      placeholder="HTTPS://EXAMPLE.COM"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 py-4 px-6 font-display text-lg focus:outline-none focus:border-[#FF4D00] focus:bg-white/10 transition-all placeholder:text-gray-800"
                      autoFocus
                    />
                    <button 
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF4D00] text-black p-2 hover:bg-white transition-colors"
                    >
                      <ArrowRight size={24} />
                    </button>
                  </form>
                  
                  <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="p-4 border border-white/5 bg-white/[0.02] text-left">
                      <div className="text-[10px] font-mono text-gray-600 uppercase mb-1">Status</div>
                      <div className="text-xs text-emerald-500 font-display">ENCRYPTED</div>
                    </div>
                    <div className="p-4 border border-white/5 bg-white/[0.02] text-left">
                      <div className="text-[10px] font-mono text-gray-600 uppercase mb-1">Server</div>
                      <div className="text-xs text-blue-500 font-display">IGNITE-EDGE-01</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 bg-white relative">
                  <iframe 
                    src={proxyUrl}
                    className="w-full h-full border-0"
                    sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => setProxyUrl(null)}
                      className="bg-black/50 backdrop-blur-md text-white p-2 hover:bg-[#FF4D00] transition-colors border border-white/10"
                      title="New URL"
                    >
                      <Globe size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="p-3 bg-[#111] border-t border-white/10 flex justify-between items-center">
                <div className="text-[10px] font-mono text-gray-600 uppercase">
                  {proxyUrl ? `Browsing: ${url}` : 'Ready for connection...'}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-emerald-500 animate-pulse">● LIVE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

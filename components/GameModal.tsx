'use client';

import React from 'react';
import { X, Maximize2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Game } from '@/lib/games';

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

export const GameModal = ({ game, onClose }: GameModalProps) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#050505] border border-white/20 flex flex-col shadow-[20px_20px_0px_0px_rgba(255,77,0,0.3)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#111]">
            <div className="flex items-center gap-4">
              <h2 className="font-display text-2xl text-[#FF4D00]">{game.title}</h2>
              <span className="hidden md:block text-[10px] font-mono text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1">
                {game.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href={game.itchUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                title="Open on itch.io"
              >
                <ExternalLink size={20} />
              </a>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-[#FF4D00] hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Game Container */}
          <div className="flex-1 bg-black relative overflow-hidden">
            <iframe 
              src={game.itchUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope;"
              sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox"
            />
          </div>

          {/* Footer Info */}
          <div className="p-4 bg-[#111] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-gray-400 max-w-2xl">
              {game.description}
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <div className="text-[10px] font-mono text-gray-500 uppercase">Rating</div>
                <div className="font-display text-[#FF4D00]">{game.rating}/5.0</div>
              </div>
              <button 
                onClick={() => {
                  const iframe = document.querySelector('iframe');
                  if (iframe) {
                    if (iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    }
                  }
                }}
                className="bg-white text-black px-6 py-2 font-display text-sm hover:bg-[#FF4D00] transition-colors"
              >
                FULLSCREEN
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

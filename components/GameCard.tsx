'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Play, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Game } from '@/lib/games';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const GameCard = ({ game, onClick, isFavorite, onToggleFavorite }: GameCardProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group relative bg-[#111] border border-white/10 overflow-hidden cursor-pointer"
      onClick={() => onClick(game)}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image 
          src={game.thumbnail} 
          alt={game.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-[#FF4D00] p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Play size={24} fill="black" />
          </div>
        </div>
        <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 text-[10px] font-display uppercase tracking-widest border border-white/10">
          {game.category}
        </div>
        <button 
          onClick={(e) => onToggleFavorite(game.id, e)}
          className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-md transition-all ${
            isFavorite ? 'bg-[#FF4D00] text-black' : 'bg-black/50 text-white hover:bg-white/20'
          }`}
        >
          <Heart size={14} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-4 border-t border-white/10">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-display text-lg leading-none group-hover:text-[#FF4D00] transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center gap-1 text-[#FF4D00]">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-mono">{game.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2 font-sans">
          {game.description}
        </p>
      </div>
      
      {/* Brutalist accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF4D00] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </motion.div>
  );
};

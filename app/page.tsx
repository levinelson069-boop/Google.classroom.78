'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Flame, Zap, Trophy, Gamepad2, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { GAMES, Game } from '@/lib/games';
import { GameCard } from '@/components/GameCard';
import { GameModal } from '@/components/GameModal';
import { StealthMode } from '@/components/StealthMode';
import { BuiltInProxy } from '@/components/BuiltInProxy';

const CATEGORIES = ['All', 'Favorites', 'Action', 'Puzzle', 'Adventure', 'Sports', 'Arcade'];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ignite-favorites');
    if (saved) {
      const parsed = JSON.parse(saved);
      setTimeout(() => setFavorites(parsed), 0);
    }
  }, []);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavs = favorites.includes(id) 
      ? favorites.filter(f => f !== id) 
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('ignite-favorites', JSON.stringify(newFavs));
  };

  const filteredGames = useMemo(() => {
    let list = GAMES;
    if (selectedCategory === 'Favorites') {
      list = GAMES.filter(g => favorites.includes(g.id));
    } else if (selectedCategory !== 'All') {
      list = GAMES.filter(g => g.category === selectedCategory);
    }
    
    return list.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery, selectedCategory, favorites]);

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,0,0.15),transparent_70%)]" />
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] mb-4">
              BEYOND<span className="text-[#FF4D00]">BELIEF</span>
            </h1>
            <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase mb-8">
              Premium Unblocked Entertainment // Curated for Performance
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FF4D00] transition-colors" size={20} />
              <input 
                type="text"
                placeholder="SEARCH GAMES..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 font-display text-lg focus:outline-none focus:border-[#FF4D00] focus:bg-white/10 transition-all placeholder:text-gray-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/10 bg-white/5 py-2">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mx-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                <Flame size={12} className="text-[#FF4D00]" />
                <span>New Games Added Weekly</span>
                <Zap size={12} className="text-[#FF4D00]" />
                <span>100% Unblocked</span>
                <Trophy size={12} className="text-[#FF4D00]" />
                <span>High Performance</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-display text-sm tracking-widest transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                  ? 'bg-[#FF4D00] text-black' 
                  : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-gray-500 font-mono text-xs uppercase">
            <Filter size={14} />
            <span>Showing {filteredGames.length} Results</span>
          </div>
        </div>

        {/* Game Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard 
                key={game.id} 
                game={game} 
                onClick={setSelectedGame}
                isFavorite={favorites.includes(game.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Gamepad2 size={48} className="mx-auto mb-4 text-gray-700" />
            <h3 className="font-display text-2xl text-gray-500">No Games Found</h3>
            <p className="text-gray-600 font-mono text-sm">Try adjusting your search or category</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-40 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl mb-2">BEYOND<span className="text-[#FF4D00]">BELIEF</span></h2>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
              Built for speed. Built for fun. Built for you.
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-[#FF4D00] transition-colors">About</a>
            <a href="#" className="hover:text-[#FF4D00] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FF4D00] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FF4D00] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <GameModal 
        game={selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />
      <StealthMode />
      <BuiltInProxy />
    </main>
  );
}

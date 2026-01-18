import React from 'react';
import { Button } from '../components/Button';
import { Sparkles, Heart, Users, Play } from 'lucide-react';

interface LandingViewProps {
  onHost: () => void;
  onJoin: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onHost, onJoin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 w-full max-w-md mx-auto">
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-pink-500 to-violet-600 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl rotate-3">
          <Heart className="w-12 h-12 text-white fill-white/20" />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
        Love<span className="gradient-text">Sync</span>
      </h1>
      
      <p className="text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
        Il test definitivo per il vostro anniversario. Sincronizza due telefoni e scopri la vostra affinità.
      </p>

      <div className="w-full space-y-4">
        
        {/* Host Button */}
        <Button onClick={onHost} fullWidth className="group py-5 text-lg" variant="primary">
          <span className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Crea Nuova Partita
          </span>
        </Button>

        <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0f172a] px-2 text-gray-500">oppure</span>
            </div>
        </div>

        {/* Guest Button */}
        <Button onClick={onJoin} fullWidth className="group" variant="secondary">
          <span className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5" />
            Partecipa con Codice
          </span>
        </Button>
      </div>
      
      <p className="text-xs text-gray-500 mt-8 opacity-60">
        Richiede connessione internet su entrambi i dispositivi.
      </p>
    </div>
  );
};
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { PlayCircle, Check, Copy, ArrowLeft } from 'lucide-react';
import QRCode from 'react-qr-code';

interface PairingViewProps {
  seed: number;
  onStartGame: () => void;
  onBack: () => void;
}

export const PairingView: React.FC<PairingViewProps> = ({ seed, onStartGame, onBack }) => {
  const [copied, setCopied] = useState(false);

  // Generate URL for QR code (still useful for quick scan)
  const generateShareUrl = () => {
    try {
      const baseUrl = window.location.origin + window.location.pathname;
      return `${baseUrl}#seed=${seed}`;
    } catch (e) {
      return window.location.href;
    }
  };

  const shareUrl = generateShareUrl();

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(seed.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 animate-fadeIn w-full max-w-md mx-auto">
      
      <div className="w-full flex justify-start mb-4">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Annulla
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Sei l'Host! 👑</h2>
        <p className="text-gray-400 text-sm">
          Il tuo partner deve inserire questo codice nel suo telefono:
        </p>
      </div>

      {/* BIG NUMERIC CODE DISPLAY */}
      <div 
        onClick={handleCopyCode}
        className="cursor-pointer bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-white/20 rounded-3xl p-8 mb-8 w-full relative group hover:border-pink-500/50 transition-all"
      >
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-bold">Codice Partita</p>
        <div className="text-6xl font-black font-mono tracking-wider text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            {seed}
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
        </div>
      </div>

      <div className="w-full space-y-4">
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-[#0f172a] text-gray-500">Oppure scansiona QR</span>
          </div>
        </div>

        {/* QR Code (Secondary Option) */}
        <div className="bg-white p-3 rounded-xl mx-auto w-32 h-32 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
            <QRCode
            size={100}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={shareUrl}
            viewBox={`0 0 256 256`}
            fgColor="#0f172a"
            level="L" 
            />
        </div>

        <div className="h-8"></div> {/* Spacer */}

        <Button onClick={onStartGame} variant="primary" fullWidth className="py-4 text-lg shadow-pink-500/20">
           <span className="flex items-center justify-center gap-2">
              Inizia Partita
              <PlayCircle className="w-6 h-6" />
           </span>
        </Button>
        <p className="text-xs text-gray-500">Premi Start quando anche il partner è pronto.</p>

      </div>
    </div>
  );
};
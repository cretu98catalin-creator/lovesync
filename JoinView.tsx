import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ArrowLeft, Link, Loader2 } from 'lucide-react';

interface JoinViewProps {
  onJoin: (code: number) => void;
  onBack: () => void;
}

export const JoinView: React.FC<JoinViewProps> = ({ onJoin, onBack }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = parseInt(code.replace(/\D/g, ''));
    if (cleanCode && !isNaN(cleanCode)) {
      onJoin(cleanCode);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fadeIn p-6">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Indietro
      </button>

      <div className="text-center mb-8">
        <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
            <Link className="w-8 h-8 text-pink-400" />
        </div>
        <h2 className="text-2xl font-bold">Inserisci Codice</h2>
        <p className="text-gray-400 mt-2">
          Chiedi al partner il codice numerico mostrato sul suo schermo.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <input
              type="tel"
              pattern="[0-9]*"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="0000"
              className="w-full bg-transparent border-b-2 border-gray-600 focus:border-pink-500 text-center text-5xl font-mono tracking-widest py-4 outline-none transition-colors placeholder-gray-700"
              autoFocus
            />
        </div>

        <Button 
            type="submit" 
            fullWidth 
            disabled={code.length < 3}
            className="mt-8"
        >
          Entra in Partita
        </Button>
      </form>
    </div>
  );
};
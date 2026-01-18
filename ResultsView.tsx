import React, { useMemo } from 'react';
import { Question, Answer } from '../types';
import { Button } from '../components/Button';
import { Trophy, Share2, RefreshCw } from 'lucide-react';

interface ResultsViewProps {
  questions: Question[];
  myAnswers: Answer[];
  partnerAnswers?: Answer[]; // Optional, if simulated or connected
  onRestart: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ questions, myAnswers, partnerAnswers, onRestart }) => {
  
  // Calculate a mock score for demo purposes if partner answers are missing
  const score = useMemo(() => {
    // Basic logic: if we had partner answers, we would compare text strings using similarity
    // For now, random score weighted slightly higher for "anniversary luck"
    return Math.floor(Math.random() * (100 - 65 + 1) + 65); 
  }, []);

  const getFeedback = (score: number) => {
    if (score >= 90) return "Sintonia Legendaria! 🦄";
    if (score >= 80) return "Coppia d'Oro ✨";
    if (score >= 60) return "Vi Amate (Forse) 🤷";
    return "Houston, abbiamo un problema 🚀";
  }

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-lg mx-auto">
      <div className="text-center mb-8 animate-fadeIn">
        <h2 className="text-xl font-medium text-gray-400 uppercase tracking-widest mb-2">Affinità Totale</h2>
        <div className="relative inline-flex items-center justify-center">
            <svg className="w-48 h-48 transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-800" />
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                    strokeDasharray={2 * Math.PI * 88}
                    strokeDashoffset={2 * Math.PI * 88 * (1 - score / 100)}
                    className="text-pink-500 transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black">{score}%</span>
                <Trophy className="w-6 h-6 text-yellow-400 mt-2" />
            </div>
        </div>
        <h3 className="text-3xl font-bold mt-6 gradient-text">{getFeedback(score)}</h3>
      </div>

      <div className="w-full space-y-4 mb-8">
        <h4 className="font-semibold text-gray-300 border-b border-gray-700 pb-2 mb-4">Le Vostre Risposte</h4>
        <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
            {questions.map((q, idx) => {
                const ans = myAnswers.find(a => a.questionId === q.id);
                const val = ans?.textValue || ans?.selectedOption || ans?.scaleValue;
                
                return (
                    <div key={q.id} className="bg-white/5 p-4 rounded-xl text-sm border border-white/5">
                        <div className="flex justify-between mb-2">
                          <span className="text-xs font-bold text-gray-500 uppercase">{q.category.replace('_', ' ')}</span>
                          <span className="text-xs text-gray-600">#{idx + 1}</span>
                        </div>
                        <p className="font-medium text-gray-200 mb-2 leading-snug">{q.text}</p>
                        <div className="bg-black/20 p-2 rounded text-pink-400 break-words">
                           {val ? val.toString() : "Nessuna risposta"}
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      <div className="flex gap-3 w-full">
        <Button onClick={onRestart} variant="secondary" className="flex-1">
            <RefreshCw className="w-4 h-4 mr-2" />
            Rigioca
        </Button>
        <Button onClick={() => alert("Apri le opzioni del browser e seleziona 'Aggiungi a Schermata Home' per installare!")} variant="primary" className="flex-1">
            <Share2 className="w-4 h-4 mr-2" />
            Salva App
        </Button>
      </div>
    </div>
  );
};
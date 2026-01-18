import React, { useState, useEffect } from 'react';
import { Question, QuestionType, Category } from '../types';
import { Heart, Lightbulb, Laugh, Send } from 'lucide-react';
import { Button } from './Button';

interface QuizCardProps {
  question: Question;
  onAnswer: (val: string | number) => void;
  currentAnswer?: string | number;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, currentAnswer }) => {
  const [textInput, setTextInput] = useState('');

  // Reset input when question changes
  useEffect(() => {
    setTextInput('');
  }, [question.id]);

  const getIcon = () => {
    switch (question.category) {
      case Category.COUPLE: return <Heart className="w-5 h-5 text-pink-400" />;
      case Category.GENERAL_KNOWLEDGE: return <Lightbulb className="w-5 h-5 text-yellow-400" />;
      case Category.FUNNY: return <Laugh className="w-5 h-5 text-emerald-400" />;
      default: return <Heart className="w-5 h-5" />;
    }
  };

  const getCategoryLabel = () => {
    switch (question.category) {
      case Category.COUPLE: return 'Coppia';
      case Category.GENERAL_KNOWLEDGE: return 'Cultura Generale';
      case Category.FUNNY: return 'Fun & Nonsense';
    }
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim()) {
      onAnswer(textInput.trim());
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fadeIn">
      <div className="glass-panel p-6 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-2 mb-4 opacity-75 uppercase tracking-wider text-xs font-bold">
          {getIcon()}
          <span>{getCategoryLabel()}</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-8 leading-snug text-white">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.type === QuestionType.MULTIPLE_CHOICE && question.options?.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(option)}
              className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                currentAnswer === option
                  ? 'bg-gradient-to-r from-pink-500/20 to-violet-600/20 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {currentAnswer === option && (
                  <div className="w-3 h-3 rounded-full bg-pink-500 shadow-lg" />
                )}
              </div>
            </button>
          ))}

          {question.type === QuestionType.SCALE && (
            <div className="py-6">
              <div className="flex justify-between mb-4 px-2 text-sm text-gray-400">
                <span>Per nulla</span>
                <span>Moltissimo</span>
              </div>
              <div className="flex justify-between gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => onAnswer(val)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      currentAnswer === val
                        ? 'bg-pink-500 text-white scale-110 shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          )}

          {question.type === QuestionType.OPEN && (
            <form onSubmit={handleTextSubmit} className="space-y-4">
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Scrivi la tua risposta..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 min-h-[120px] resize-none placeholder-gray-500"
              />
              <Button type="submit" fullWidth disabled={!textInput.trim()}>
                <span className="flex items-center justify-center gap-2">
                  Conferma Risposta <Send className="w-4 h-4" />
                </span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { LandingView } from './views/LandingView.tsx';
import { PairingView } from './views/PairingView.tsx';
import { ResultsView } from './views/ResultsView.tsx';
import { JoinView } from './views/JoinView.tsx';
import { QuizCard } from './components/QuizCard.tsx';
import { getQuestionsFromSeed } from './services/gameService.ts';
import { AppState, Question, Answer } from './types.ts';
import { AlertTriangle, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LANDING);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sessionSeed, setSessionSeed] = useState<number>(0);

  // Check for shared session seed in URL Hash on load (Guest Mode via Link)
  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash && hash.includes('seed=')) {
      try {
        const seedStr = hash.split('seed=')[1];
        const seed = parseInt(seedStr);
        
        if (!isNaN(seed)) {
           // Guest Mode (Link): Found a seed, start generation immediately
           handleSyncAndGenerate(seed, true);
           // Clean URL
           window.history.replaceState(null, document.title, window.location.pathname);
        }
      } catch (e) {
        console.error(e);
        setError("Errore nel link di condivisione.");
      }
    }
  }, []);

  // Central function to generate quiz based on a seed
  const handleSyncAndGenerate = async (seed: number, isGuest: boolean) => {
    try {
      setAppState(AppState.GENERATING);
      setError(null);
      setSessionSeed(seed);
      
      // Removed API Key Check - using Local Data now
      console.log("Picking questions with seed:", seed);

      // Call Local Service
      const generatedQuestions = await getQuestionsFromSeed(seed, 30); // Requesting 30 random questions
      
      if (generatedQuestions.length === 0) {
          throw new Error("Nessuna domanda trovata nel database.");
      }

      setQuestions(generatedQuestions);
      
      if (isGuest) {
        // Guests go straight to game waiting for host (or start immediately)
        setAppState(AppState.GAMEPLAY);
      } else {
        // Hosts go to Pairing screen to show the code
        setAppState(AppState.PAIRING);
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Errore durante il caricamento del quiz.");
      setAppState(AppState.LANDING);
    }
  };

  const handleCreateHost = () => {
    // Generate a random 4-digit seed
    const newSeed = Math.floor(1000 + Math.random() * 9000);
    handleSyncAndGenerate(newSeed, false);
  };

  const handleJoinGuest = () => {
    setAppState(AppState.JOINING);
  };

  const handleGuestSubmitCode = (code: number) => {
    handleSyncAndGenerate(code, true);
  };

  const handleStartGameAsHost = () => {
    setAppState(AppState.GAMEPLAY);
  };

  const handleAnswer = (value: string | number) => {
    const currentQ = questions[currentQuestionIndex];
    const newAnswer: Answer = {
      questionId: currentQ.id,
      selectedOption: typeof value === 'string' ? value : undefined,
      scaleValue: typeof value === 'number' ? value : undefined,
      textValue: typeof value === 'string' && currentQ.type === 'open' ? value : undefined
    };

    setAnswers([...answers, newAnswer]);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 300);
    } else {
      setAppState(AppState.RESULTS);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setAppState(AppState.LANDING);
    setQuestions([]);
    setSessionSeed(0);
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 z-10 w-full max-w-4xl mx-auto">
        
        {appState === AppState.LANDING && (
          <>
            <LandingView 
              onHost={handleCreateHost}
              onJoin={handleJoinGuest}
            />
            {error && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-200 animate-fadeIn max-w-sm text-sm">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <p>{error}</p>
                </div>
            )}
          </>
        )}

        {appState === AppState.JOINING && (
           <JoinView 
             onJoin={handleGuestSubmitCode} 
             onBack={() => setAppState(AppState.LANDING)}
           />
        )}

        {appState === AppState.GENERATING && (
          <div className="text-center animate-pulse p-8">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-spin" />
              <div className="absolute inset-0 bg-pink-500 blur-xl opacity-20"></div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Preparazione Quiz...</h2>
            <p className="text-gray-400">Mescolando il mazzo in modo unico.</p>
            <p className="text-xs text-gray-600 mt-4 font-mono">SEED: {sessionSeed}</p>
          </div>
        )}

        {appState === AppState.PAIRING && (
          <PairingView 
            seed={sessionSeed}
            onStartGame={handleStartGameAsHost}
            onBack={handleRestart}
          />
        )}

        {appState === AppState.GAMEPLAY && questions.length > 0 && (
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-md mb-6 flex justify-between items-end px-4">
              <span className="text-sm font-medium text-gray-400">
                Domanda {currentQuestionIndex + 1} di {questions.length}
              </span>
              <div className="h-1 w-24 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-500"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
            
            <QuizCard 
              question={questions[currentQuestionIndex]} 
              onAnswer={handleAnswer}
            />

            <button 
              onClick={() => {
                if(window.confirm("Vuoi davvero abbandonare la partita?")) {
                  handleRestart();
                }
              }}
              className="mt-8 text-gray-600 hover:text-red-400 text-xs transition-colors"
            >
              Abbandona Partita
            </button>
          </div>
        )}

        {appState === AppState.RESULTS && (
          <ResultsView 
            questions={questions}
            myAnswers={answers}
            onRestart={handleRestart}
          />
        )}
      </main>

      <footer className="p-4 text-center text-xs text-gray-600 z-10">
        <p>LoveSync - Offline Edition</p>
      </footer>
    </div>
  );
};

export default App;
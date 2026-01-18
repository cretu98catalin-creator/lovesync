import { Question } from "../types";
import { QUESTION_BANK } from "../data/questions";

// Pseudo-random number generator based on a seed
// Returns a number between 0 and 1
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

// Fisher-Yates shuffle algorithm using seeded random
const shuffleArray = <T>(array: T[], seed: number): T[] => {
  const shuffled = [...array]; // Create a copy
  let m = shuffled.length;
  let t: T;
  let i: number;
  let currentSeed = seed;

  while (m) {
    // Pick a remaining element
    i = Math.floor(seededRandom(currentSeed) * m--);
    currentSeed++; // Increment seed to change random for next iteration

    // And swap it with the current element
    t = shuffled[m];
    shuffled[m] = shuffled[i];
    shuffled[i] = t;
  }

  return shuffled;
};

export const getQuestionsFromSeed = async (seed: number, count: number = 30): Promise<Question[]> => {
  // Simulate a small delay for UX (loading animation)
  await new Promise(resolve => setTimeout(resolve, 1500));

  // 1. Shuffle the entire bank deterministically based on the seed
  // Both phones will shuffle it exactly the same way.
  const shuffledBank = shuffleArray(QUESTION_BANK, seed);

  // 2. Take the first 'count' questions
  // If bank is smaller than count, take all.
  const selectedQuestions = shuffledBank.slice(0, Math.min(count, shuffledBank.length));

  return selectedQuestions;
};
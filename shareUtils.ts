import { Question, QuestionType, Category } from '../types';

// Minified structure: [id, text, type(0/1/2), category(0/1/2), options?]
type MinifiedQuestion = [number, string, number, number, string[]?];

export const encodeQuizData = (questions: Question[]): string => {
  try {
    const minified = questions.map(q => {
      // Map Enums to integers
      let t = 0; // default multiple_choice
      if (q.type === QuestionType.SCALE) t = 1;
      if (q.type === QuestionType.OPEN) t = 2;

      let c = 0; // default couple
      if (q.category === Category.GENERAL_KNOWLEDGE) c = 1;
      if (q.category === Category.FUNNY) c = 2;

      const opts = (q.options && q.options.length) ? q.options : undefined;
      return opts ? [q.id, q.text, t, c, opts] : [q.id, q.text, t, c];
    });

    const jsonString = JSON.stringify(minified);
    const utf8Bytes = new TextEncoder().encode(jsonString);
    const binaryString = Array.from(utf8Bytes).map(b => String.fromCharCode(b)).join("");
    const base64 = btoa(binaryString);
    
    // Encode to ensure it's safe for URL hash (handling + / =)
    return encodeURIComponent(base64);
  } catch (e) {
    console.error("Encode error", e);
    return "";
  }
};

export const decodeQuizData = (encodedData: string): Question[] | null => {
  try {
    // Decode URI component first (reverses the encodeURIComponent)
    const base64 = decodeURIComponent(encodedData);
    
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const jsonString = new TextDecoder().decode(bytes);
    const minified: any[] = JSON.parse(jsonString);

    return minified.map((m: any) => {
      const type = m[2] === 1 ? QuestionType.SCALE : (m[2] === 2 ? QuestionType.OPEN : QuestionType.MULTIPLE_CHOICE);
      const category = m[3] === 1 ? Category.GENERAL_KNOWLEDGE : (m[3] === 2 ? Category.FUNNY : Category.COUPLE);
      return {
        id: m[0],
        text: m[1],
        type: type,
        category: category,
        options: m[4] || []
      } as Question;
    });
  } catch (e) {
    console.error("Decode error", e);
    return null;
  }
};
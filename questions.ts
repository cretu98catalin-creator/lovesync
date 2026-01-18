import { Question, QuestionType, Category } from "../types";

export const QUESTION_BANK: Question[] = [
  // ==========================================
  // 1-99: STORIA DELLA COPPIA & DETTAGLI (OPEN)
  // ==========================================
  { id: 1, text: "Dove è stato il nostro primo bacio?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 2, text: "Qual è il mio cibo preferito in assoluto?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 3, text: "Qual è la cosa che ti fa arrabbiare di più di me?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 4, text: "Qual è il primo film che abbiamo visto insieme?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 5, text: "Come ho salvato il tuo numero in rubrica?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 6, text: "Qual è il mio sogno nel cassetto?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 7, text: "Qual è il soprannome che odio di più?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 8, text: "In che mese ci siamo messi insieme?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 9, text: "Qual è la mia taglia di scarpe?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 10, text: "Come si chiamava il mio primo animale domestico?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 11, text: "Qual è la mia canzone preferita del momento?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 12, text: "Qual è il mio gusto di gelato preferito?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 13, text: "Cosa prendo di solito al bar per colazione?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 14, text: "Qual è il regalo più bello che ti ho fatto?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 15, text: "Qual è la mia serie TV preferita di sempre?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 16, text: "In che posizione dormo di solito?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 17, text: "Qual è la faccenda domestica che odio di più?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 18, text: "Qual è il nome di mia madre?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 19, text: "Dove vorrei vivere se potessi scegliere qualsiasi posto?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 20, text: "Qual è la mia più grande paura?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 21, text: "Cosa indosso per dormire?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 22, text: "Qual è il mio drink alcolico preferito?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 23, text: "Qual è il mio colore preferito?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 24, text: "Come mi piace il caffè?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 25, text: "Qual è la parte del mio corpo che preferisco?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 26, text: "Qual è la parte del tuo corpo che preferisco?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 27, text: "Quando è il mio onomastico?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 28, text: "Qual è la cosa che mi fa ridere sempre?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 29, text: "Qual è il mio brand di abbigliamento preferito?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 30, text: "Quanti figli vorrei avere?", type: QuestionType.OPEN, category: Category.COUPLE },

  // ==========================================
  // 100-199: CULTURA GENERALE & QUIZ (MULTIPLE CHOICE)
  // ==========================================
  { 
    id: 100, text: "Qual è la capitale della Spagna?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Barcellona", "Madrid", "Siviglia", "Valencia"]
  },
  { 
    id: 101, text: "Quanti giorni ha un anno bisestile?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["364", "365", "366", "367"]
  },
  { 
    id: 102, text: "Chi ha dipinto la Gioconda?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Michelangelo", "Leonardo da Vinci", "Raffaello", "Donatello"]
  },
  { 
    id: 103, text: "Qual è il pianeta più vicino al sole?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Venere", "Marte", "Mercurio", "Terra"]
  },
  { 
    id: 104, text: "Cosa significa 'Carpe Diem'?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Cogli l'attimo", "Mangia il pesce", "Vivi felice", "Ricorda di morire"]
  },
  { 
    id: 105, text: "Qual è l'elemento chimico con simbolo 'O'?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Oro", "Ossigeno", "Osmio", "Oliva"]
  },
  { 
    id: 106, text: "Quanto dura un tempo di una partita di calcio?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["30 minuti", "45 minuti", "60 minuti", "90 minuti"]
  },
  { 
    id: 107, text: "Chi ha scritto la Divina Commedia?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Boccaccio", "Petrarca", "Dante Alighieri", "Leopardi"]
  },
  { 
    id: 108, text: "Qual è l'oceano più grande del mondo?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Atlantico", "Indiano", "Pacifico", "Artico"]
  },
  { 
    id: 109, text: "Quante zampe ha un ragno?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["6", "8", "10", "12"]
  },
  { 
    id: 110, text: "In che continente si trova l'Egitto?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Asia", "Africa", "Europa", "Sud America"]
  },
  { 
    id: 111, text: "Quale colore ottieni mescolando Blu e Giallo?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Viola", "Arancione", "Verde", "Marrone"]
  },
  { 
    id: 112, text: "Chi è il protagonista di 'Super Mario'?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Un idraulico", "Un elettricista", "Un dottore", "Un principe"]
  },
  { 
    id: 113, text: "Qual è la moneta del Regno Unito?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Euro", "Dollaro", "Sterlina", "Franco"]
  },
  { 
    id: 114, text: "Come si chiama il cane di Topolino?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.GENERAL_KNOWLEDGE,
    options: ["Pippo", "Pluto", "Fido", "Rex"]
  },

  // ==========================================
  // 200-299: FUNNY, NONSENSE & WOULD YOU RATHER
  // ==========================================
  { 
    id: 200, text: "Se fossi un animale, quale sarei?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Un bradipo pigro", "Una tigre feroce", "Un gatto snob", "Un cane fedele"]
  },
  { 
    id: 201, text: "Apocalisse Zombie: qual è la mia arma?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Mazza da baseball", "Fucile di precisione", "Padella da cucina", "Mi nascondo e basta"]
  },
  { 
    id: 202, text: "Cosa farei se incontrassi un alieno?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Scappo urlando", "Cerco di comunicarci", "Gli chiedo un passaggio", "Selfie immediato"]
  },
  { 
    id: 203, text: "Quale superpotere è totalmente inutile?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Diventare invisibile solo al buio", "Parlare con la frutta", "Volare ma a 1km/h", "Teletrasporto casuale"]
  },
  { 
    id: 204, text: "Preferiresti...", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Avere le dita fatte di wurstel", "Avere gambe lunghe 3 metri", "Parlare solo urlando", "Dover camminare all'indietro"]
  },
  { id: 205, text: "Scrivi la parola più strana che conosci.", type: QuestionType.OPEN, category: Category.FUNNY },
  { 
    id: 206, text: "Se vincessi 10 milioni di euro domani...", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Sparisco e vado ai Caraibi", "Compro una villa a tutti", "Li sperpero in un mese", "Li metto in banca e vivo uguale"]
  },
  { 
    id: 207, text: "Quale personaggio dei cartoni mi rappresenta?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Homer Simpson", "Paperino", "Bugs Bunny", "Spongebob"]
  },
  { 
    id: 208, text: "Se potessi mangiare solo una cosa per sempre?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Pizza", "Sushi", "Cioccolato", "Pasta"]
  },
  { 
    id: 209, text: "Cosa faresti se ti scambiassi di corpo con me per un giorno?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Mi guarderei nudo/a", "Spenderei i tuoi soldi", "Andrei al lavoro al posto tuo", "Dormirei tutto il giorno"]
  },
  { 
    id: 210, text: "Preferiresti...", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Essere sempre in ritardo", "Essere sempre in anticipo di un'ora", "Dimenticare come si parla", "Dimenticare come si cammina"]
  },
  { 
    id: 211, text: "Se la mia vita fosse un film, che genere sarebbe?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Commedia demenziale", "Drammatico strappalacrime", "Horror psicologico", "Azione ed esplosioni"]
  },
  { 
    id: 212, text: "Qual è la mia abilità segreta inutile?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Toccarmi il naso con la lingua", "Muovere le orecchie", "Ricordare testi di canzoni trash", "Dormire ovunque"]
  },

  // ==========================================
  // 300-399: "CHI È PIÙ..." (MULTIPLE CHOICE COPPIA)
  // ==========================================
  { 
    id: 300, text: "Chi è più disordinato?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io", "Tu", "Uguale", "Dipende dai giorni"]
  },
  { 
    id: 301, text: "Chi cucina meglio?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io (ovviamente)", "Tu (lo ammetto)", "Meglio ordinare glovo", "Siamo entrambi chef stellati"]
  },
  { 
    id: 302, text: "Chi ci mette di più a prepararsi?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io", "Tu", "Siamo veloci", "È una gara a chi è più lento"]
  },
  { 
    id: 303, text: "Chi è più bravo a gestire i soldi?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io sono Paperon de Paperoni", "Tu sei il contabile", "Siamo entrambi mani bucate", "Nessuno dei due"]
  },
  { 
    id: 304, text: "Chi russa di più?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io (impossibile)", "Tu (sembri un trattore)", "Nessuno", "Il cane/gatto"]
  },
  { 
    id: 305, text: "Chi è più geloso?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io sono l'FBI", "Tu controlli tutto", "Siamo chill", "Gelosia sana entrambi"]
  },
  { 
    id: 306, text: "Chi è più probabile che sopravviva su un'isola deserta?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io, ho visto Bear Grylls", "Tu, sei pratico/a", "Moriremmo dopo 2 ore", "Chi ha il telefono?"]
  },
  { 
    id: 307, text: "Chi guida meglio?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io sono Schumacher", "Tu guidi bene", "Meglio se guido io", "Meglio prendere il taxi"]
  },
  { 
    id: 308, text: "Chi è più bravo con la tecnologia?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io sono l'hacker", "Tu te la cavi", "Chiamiamo l'assistenza", "Siamo negati"]
  },
  { 
    id: 309, text: "Chi ha più pazienza?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io sono un santo", "Tu sopporti tutto", "Nessuno dei due", "Dipende dalla situazione"]
  },
  { 
    id: 310, text: "Chi fa i regali migliori?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io ci metto il cuore", "Tu stupisci sempre", "Ci scambiamo soldi", "Sbagliamo sempre taglia"]
  },
  { 
    id: 311, text: "Chi è più testardo?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io non cambio mai idea", "Tu sei un mulo", "Entrambi teste dure", "Cediamo subito"]
  },
  { 
    id: 312, text: "Chi è più romantico?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io (fiori e cioccolatini)", "Tu (sorprese)", "Il romanticismo è morto", "A giorni alterni"]
  },
  { 
    id: 313, text: "Chi piange più facilmente ai film?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io sono una fontana", "Tu ti commuovi sempre", "Siamo cuori di pietra", "Solo con i cani che muoiono"]
  },
  { 
    id: 314, text: "Chi è più schizzinoso col cibo?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io mangio solo cose specifiche", "Tu non mangi nulla", "Mangiamo anche i sassi", "Siamo buone forchette"]
  },
  { 
    id: 315, text: "Chi prende l'iniziativa a letto?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Spesso io", "Spesso tu", "50 e 50", "Dobbiamo prendere appuntamento"]
  },
  { 
    id: 316, text: "Chi è più 'social'?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io vivo su Instagram", "Tu posti sempre", "Odiamo i social", "Io guardo, tu posti"]
  },
  { 
    id: 317, text: "Chi si veste meglio?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io ho stile", "Tu sei fashion", "Usciamo in pigiama", "Siamo uguali"]
  },
  { 
    id: 318, text: "Chi urlerebbe vedendo un ragno?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io scappo", "Tu urli", "Io lo uccido", "Tu lo porti fuori"]
  },
  { 
    id: 319, text: "Chi è più mattiniero?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io all'alba sono attivo", "Tu ti svegli presto", "Siamo ghiri", "Odiamo la sveglia"]
  },
  { 
    id: 320, text: "Chi dimentica le ricorrenze?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.COUPLE,
    options: ["Io (ho la memoria di un pesce)", "Tu (ti scordi tutto)", "Abbiamo Google Calendar", "Ricordiamo tutto"]
  },

  // ==========================================
  // 400-499: PSICOLOGIA & PROFONDITÀ (SCALE 1-5 & OPEN)
  // ==========================================
  { id: 400, text: "Quanto sei felice della nostra comunicazione?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 401, text: "Quanto ti senti supportato/a nei tuoi sogni?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 402, text: "Quanto è importante per te avere i tuoi spazi?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 403, text: "Quanto ti piace passare il tempo con la mia famiglia?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 404, text: "Quanto sei soddisfatto/a della nostra vita intima?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 405, text: "Quanto ti fidi di me?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 406, text: "Quanto ti preoccupi del futuro?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 407, text: "Quanto pensi che siamo simili?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 408, text: "Quanto ti piace viaggiare?", type: QuestionType.SCALE, category: Category.COUPLE },
  { id: 409, text: "Quanto sei disposto/a a scendere a compromessi?", type: QuestionType.SCALE, category: Category.COUPLE },
  
  { id: 410, text: "Qual è la tua definizione di tradimento?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 411, text: "Dove ci vedi tra 5 anni?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 412, text: "Qual è il valore più importante da insegnare a un figlio?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 413, text: "Cosa cambieresti del mio carattere se potessi?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 414, text: "Qual è stato il momento più difficile che abbiamo superato?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 415, text: "Cosa ti fa sentire amato/a?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 416, text: "C'è qualcosa che non mi hai mai detto?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 417, text: "Qual è la tua più grande insicurezza?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 418, text: "Soldi o Tempo libero: cosa sceglieresti?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 419, text: "Qual è il ricordo più felice della tua infanzia?", type: QuestionType.OPEN, category: Category.COUPLE },
  { id: 420, text: "Se la nostra casa andasse a fuoco, cosa salveresti (dopo di me)?", type: QuestionType.OPEN, category: Category.COUPLE },
  
  // ==========================================
  // 500-550: DILEMMI (MULTIPLE CHOICE)
  // ==========================================
  { 
    id: 500, text: "Preferiresti...", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Vivere senza internet per sempre", "Vivere senza musica per sempre", "Vivere senza dolci", "Vivere senza sesso"]
  },
  { 
    id: 501, text: "Preferiresti...", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Saper volare", "Diventare invisibile", "Leggere nel pensiero", "Viaggiare nel tempo"]
  },
  { 
    id: 502, text: "Per 1 milione di euro...", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Non mi laverei per un anno", "Mangerei un insetto vivo", "Mi raserei a zero", "Lascierei il mio lavoro"]
  },
  { 
    id: 503, text: "Cosa è peggio?", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Arrivare tardi al proprio matrimonio", "Dimenticare il nome del partner a letto", "Vomitare al primo appuntamento", "Inviare un nudes al capo"]
  },
  { 
    id: 504, text: "In una vita passata ero...", 
    type: QuestionType.MULTIPLE_CHOICE, category: Category.FUNNY,
    options: ["Un re/regina", "Un pirata", "Un gatto", "Un guerriero"]
  }

  // Puoi continuare ad aggiungere domande seguendo questo schema fino a migliaia!
];
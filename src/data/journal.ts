export type JournalArticle = {
  title: string;
  summary: string;
  readingTime: string;
};

export const journalArticles: JournalArticle[] = [
  {
    title: 'How to Build a Calm Living Room',
    summary: 'A designer-led approach to seating, negative space, lighting layers, and tactile restraint.',
    readingTime: '6 min read',
  },
  {
    title: 'The Minimalist Bedroom Checklist',
    summary: 'The exact details that make a bedroom feel considered, quiet, and deeply restful.',
    readingTime: '5 min read',
  },
  {
    title: 'Choosing Appliances That Do Not Disturb Your Design Language',
    summary: 'How to select modern appliances that serve the home visually as well as functionally.',
    readingTime: '7 min read',
  },
];

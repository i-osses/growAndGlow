const challenges = [
  "Save $1 today.",
  "Write down 3 things you're grateful for.",
  "Plan tomorrow’s top 3 tasks.",
  "Track your expenses today.",
  "Read 10 pages of a book.",
  "Avoid social media for 2 hours.",
  "Drink 8 glasses of water.",
  "Wake up 30 minutes earlier.",
  "Stretch for 10 minutes.",
  "Declutter one area of your home."
];

export function getChallenge() {
  const index = Math.floor(Math.random() * challenges.length);
  return challenges[index];
}

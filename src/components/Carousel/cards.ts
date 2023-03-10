// expedition cards

export type ExpeditionCard = {
  type: string;
  id: string;
  title: string;
  alt?: string;
  url?: string;
};

export const cards: ExpeditionCard[] = [
  { type: 'c', id: 'c1', title: "Cassilda's Song" },
  { type: 'c', id: 'c2', title: 'The Stranger' },
  { type: 'c', id: 'c3', title: 'The King in Yellow' },
  { type: 'rr', id: 'rr1', title: 'The Repairer, I' },
  { type: 'rr', id: 'rr2', title: 'The Repairer, II' },
  { type: 'rr', id: 'rr3', title: 'The Repairer, III' },
  { type: 'rr', id: 'rr4', title: 'The Repairer, IV' },
  { type: 'rr', id: 'rr5', title: 'The Repairer, V' },
  { type: 'rr', id: 'rr6', title: 'The Repairer, VI' },
  { type: 'rr', id: 'rr7', title: 'The Repairer, VII' },
  { type: 'rr', id: 'rr8', title: 'The Repairer, IIX' },
  { type: 'rr', id: 'rr9', title: 'The Repairer, IX' },
  { type: 'ys', id: 'ys1', title: 'The Yellow Sign, I' },
  { type: 'ys', id: 'ys2', title: 'The Yellow Sign, II' },
  { type: 'ys', id: 'ys3', title: 'The Yellow Sign, III' },
  { type: 'ys', id: 'ys4', title: 'The Yellow Sign, IV' },
  { type: 'ys', id: 'ys5', title: 'The Yellow Sign, V' },
  { type: 'ys', id: 'ys6', title: 'The Yellow Sign, VI' },
  { type: 'ys', id: 'ys7', title: 'The Yellow Sign, VII' },
  { type: 'ys', id: 'ys8', title: 'The Yellow Sign, IIX' },
];

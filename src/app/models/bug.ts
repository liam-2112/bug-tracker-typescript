export interface Bug {
    id: number;
    title: string;
    status: 'open' | 'closed';
    priority: 'low' | 'medium' | 'high';
    description: string;
  }
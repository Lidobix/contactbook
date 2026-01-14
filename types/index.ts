export interface Contact {
  id: number;
  lastName: string;
  firstName: string;
  gender: 'Homme' | 'Femme' | 'Autre';
  size: number;
  birth: string;
}

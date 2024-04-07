export interface Pet {
    name: string;
    hunger: number;
    happiness: number;
    feed(): void;
    play(): void;
    update(): void;
  }
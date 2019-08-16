export interface IPalette {
  id: string;
  name: string;
  colors: string[];
  tags: string;
  ownerusername: string;
  saves: number;
  views: number;
}

export interface IPaletteVariables {
  limit: number;
  offset: number;
  query?: string;
}

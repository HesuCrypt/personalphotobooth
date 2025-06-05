export interface Photo {
  id: string;
  src: string;
  filter: string;
}

export interface Filter {
  id: string;
  name: string;
  class: string;
  preview: string;
}

export interface Sticker {
  id: string;
  src: string;
  alt: string;
}
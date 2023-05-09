export interface Obra {
  autor: string;
  descripcion: string;
  modelo: string;
  nombre: string;
  _id: string;
  imagen: string;
}

export interface newObra {
  nombre: string;
  autor: string;
  descripcion: string;
  file: any;
  imagen: any;
}

export interface Locacion {
  _id: string;
  nombre: string;
  screenshot: string;
  ARWorldMap: string;
}

export interface Museo {
  _id: string;
  nombre: string;
  obras: Obra[];
  locations: Locacion[];
  isActive: boolean;
  imagen: string;
}

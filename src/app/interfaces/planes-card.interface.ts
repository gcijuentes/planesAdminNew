export interface PlanesCardResponse {
  data:  PlanCard[];
  links: Links;
  meta:  Meta;
}

export interface PlanCard {
  id:            number;
  codigo:        string;
  nombre:        string;
  valor_base_uf: number;
  isapre_id:     number;
  idTipoPlan:    number;
  zona_id:       number;
  created_at:    Date | null;
  updated_at:    Date | null;
  prestadores:   Prestador[];
  coberturas:    Cobertura[];
  archivo:      Archivo;
  isapre:        Isapre;
}

export interface Isapre {
  id:     number;
  nombre: string;
  rut:    string;
  archivo:   Archivo;
}

export interface Archivo {
    id:     number;
    url:    string;
    nombre: string;

}

export interface Cobertura {
  id:                  number;
  nombre:              string;
  detalle:             string;
  idPlan:              number;
  porcentajeCobertura: number | null;
  updated_at:          Date | null;
  created_at:          Date | null;
}

export interface Prestador {
  id:     number;
  nombre: string;
  rut:    number;
  pivot:  Pivot;
}

export interface Pivot {
  prestador_id: number;
  plan_id:      number;
}

export interface Links {
  first: string;
  last:  string;
  prev:  null;
  next:  null;
}

export interface Meta {
  current_page: number;
  from:         number;
  last_page:    number;
  links:        Link[];
  path:         string;
  per_page:     number;
  to:           number;
  total:        number;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}

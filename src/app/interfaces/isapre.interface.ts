export interface IsapreResponse {
  success: boolean;
  data:    Isapre[];
  message: string;
}

export interface Isapre {
  id:         number;
  nombre:     string;
  rut:        string;
  archivo_id: number;
}

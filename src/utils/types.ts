export interface Service {
  image: string[];
  role: string;
  KPIs: string[];
  color: string;
  addService: (index: number, newKPI: string) => void;
  setEditedTask: (index: number, editedTask: any) => void;
  index: number;
}

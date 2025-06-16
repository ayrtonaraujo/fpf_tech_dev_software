import { CategoriasInterface } from "./categorias.interface";

export interface EntryInterface {
    id?: number;
    type: string;
    description: string;
    value: number;
    date: string;
    category: CategoriasInterface | number;
}

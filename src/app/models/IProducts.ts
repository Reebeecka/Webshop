import { ICategory, IProductCategory } from "./ICategory";

export interface IProducts {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    year: number
    added: Date
    productCategory: IProductCategory[]
}
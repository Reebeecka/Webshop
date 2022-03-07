import { Observable } from "rxjs";
import { apiClass } from "./apiClass";
import { ICategory } from "./ICategory";
import { IProducts } from "./IProducts";

export interface IFetchService{
    products$: Observable<IProducts[]>;
    categories$: Observable<ICategory[]>;
    orders$: Observable<apiClass[]>;

    getProducts():void;
    getOrders():void;
    getCategories():void;
}
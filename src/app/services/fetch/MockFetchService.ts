import { Observable, Subject } from "rxjs";
import { apiClass } from "src/app/models/apiClass";
import { ICategory } from "src/app/models/ICategory";
import { IFetchService } from "src/app/models/IFetchService";
import { IProducts } from "src/app/models/IProducts";


export class MockFetchService implements IFetchService {
    private products = new Subject<IProducts[]>();
    public products$: Observable<IProducts[]> = this.products.asObservable();

    private orders = new Subject<apiClass[]>();
    public orders$: Observable<apiClass[]> = this.orders.asObservable();

    private categories = new Subject<ICategory[]>();
    public categories$: Observable<ICategory[]> = this.categories.asObservable();

//PRODUCTS//
    product1: IProducts = {
        id: 1,
        name: "product1",
        description: "description1",
        price: 140,
        imageUrl: "image1.url",
        year: 1978,
        added: new Date(),
        productCategory: [
            {
                categoryId: 6,
                category: null
            }
        ]
    }
    product2: IProducts = {
        id: 2,
        name: "product2",
        description: "description2",
        price: 111,
        imageUrl: "imgage2.url",
        year: 2009,
        added: new Date(),
        productCategory: [
            {
                categoryId: 8,
                category: null
            }
        ]
    }

    private testProductsData: IProducts[] = [this.product1, this.product2];

    getProducts(): void {
        this.products.next(this.testProductsData)
    };

    //-----------------------------------------------//

    //CATEGORIES//
    category1: ICategory = {
        id: 1,
        name: "testCategory1"
    }
    category2: ICategory = {
        id: 2,
        name: "testCategory2"
    }
    private testCategoryData: ICategory[] = [this.category1, this.category2]

    getCategories(): void {
        this.categories.next(this.testCategoryData)
    };

    //-------------------------------///

    //ORDERS//
    order1: apiClass = {
        id: 8514,
        companyID: 27,
        created: new Date(),
        createdBy: "test1",
        paymentMethod: "Paypal",
        totalPrice: 0,
        status: "0",
        orderRows: [
            {
                id: 8516,
                productId: 76,
                name: "test1",
                amount: 1,
                price: 100,
                imageUrl: ""
            },
            {
                id: 8517,
                productId: 77,
                name: "test11",
                amount: 2,
                price: 100,
                imageUrl: ""
            }
        ]
    }
    order2: apiClass = {
        id: 8515,
        companyID: 27,
        created: new Date(),
        createdBy: "test2",
        paymentMethod: "Klarna",
        totalPrice: 0,
        status: "0",
        orderRows: [
            {
                id: 8518,
                amount: 1,
                productId: 76,
                name: "test2",
                price: 199,
                imageUrl: "http://image.com.url"
            }
        ]
    }
    order3: apiClass = {
        id: 8519,
        companyID: 27,
        created: new Date(),
        createdBy: "test3",
        paymentMethod: "Paypal",
        totalPrice: 0,
        status: "0",
        orderRows: [
            {
                id: 8520,
                productId: 76,
                name: "test3",
                amount: 1,
                price: 100,
                imageUrl: ""
            },
            {
                id: 8521,
                productId: 77,
                name: "test33",
                amount: 1,
                price: 100,
                imageUrl: ""
            }
        ]
    }
    private testOrderData: apiClass[] = [this.order1, this.order2, this.order3]

    getOrders(): void {

        this.orders.next(this.testOrderData)

    }
};
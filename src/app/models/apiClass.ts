import { Cart } from "./CartClass";

export class apiClass {
    id:number;
    companyID:number;
    created:Date;
    createdBy:string;
    paymentMethod:string;
    totalPrice:number;
    status:string;
    orderRows: Cart[];

    constructor(
        id:number,
        companyID:number,
        createdBy:string,
        paymentMethod:string,
        totalPrice:number,
        status:string,
        orderRows: Cart[])
    {
        this.id = id;
        this.companyID = companyID;
        this.created = new Date;
        this.createdBy = createdBy;
        this.paymentMethod = paymentMethod;
        this.totalPrice = totalPrice;
        this.status = status;
        this.orderRows = orderRows;
    }
}
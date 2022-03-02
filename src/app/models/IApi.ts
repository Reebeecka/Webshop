import { Data } from "@angular/router";
import { Custom } from "./TestClass";

export class TEESt {
    id:number;
    companyID:number;
    created:Date;
    createdBy:string;
    paymentMethod:string;
    totalPrice:number;
    status:string;
    orderRows: Custom[];

    constructor(
        id:number,
        companyID:number,
        createdBy:string,
        paymentMethod:string,
        totalPrice:number,
        status:string,
        orderRows: Custom[])
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
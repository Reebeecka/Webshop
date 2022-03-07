import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FetchService } from 'src/app/services/fetch/fetch.service';
import { MockFetchService } from 'src/app/services/fetch/MockFetchService';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [HttpClientModule],
      providers: [{provide: FetchService, useClass: MockFetchService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should get orders from Mockservice", ()=>{
     expect(component.orders.length).toBe(3);
   });
   it("should find orderID in first order", ()=>{
    expect(component.orders[0].orderRows[0].id).toBe(8516);
   });
   it("should find paymentMethod in second order", ()=>{
     expect(component.orders[1].paymentMethod).toBe("Klarna");
   });
   it("should find productID for one product in third order", ()=>{
     expect(component.orders[2].orderRows[1].productId).toBe(77);
   })

});

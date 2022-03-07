import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { FetchService } from 'src/app/services/fetch/fetch.service';
import { MockFetchService } from 'src/app/services/fetch/MockFetchService';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule],
      providers: [{provide: FetchService, useClass: MockFetchService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get data from Mockservice", ()=>{
    expect(component.products.length).toBe(2);
  });
  it("should get ID from first product", ()=>{
    expect(component.products[0].id).toBe(1);
  });
  it("should get price from second product", ()=>{
    expect(component.products[1].price).toBe(111);
  });

  it("should get categories from Mockservice", ()=>{
    expect(component.categories.length).toBe(2);
  });
  it("should find name of first category", ()=>{
    expect(component.categories[0].name).toBe("testCategory1");
  });


});

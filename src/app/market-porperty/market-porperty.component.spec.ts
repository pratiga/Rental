import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPorpertyComponent } from './market-porperty.component';

describe('MarketPorpertyComponent', () => {
  let component: MarketPorpertyComponent;
  let fixture: ComponentFixture<MarketPorpertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPorpertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPorpertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

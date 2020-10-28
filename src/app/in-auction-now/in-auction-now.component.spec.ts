import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAuctionNowComponent } from './in-auction-now.component';

describe('InAuctionNowComponent', () => {
  let component: InAuctionNowComponent;
  let fixture: ComponentFixture<InAuctionNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAuctionNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAuctionNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

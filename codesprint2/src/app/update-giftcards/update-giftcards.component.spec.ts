import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGiftcardsComponent } from './update-giftcards.component';

describe('UpdateGiftcardsComponent', () => {
  let component: UpdateGiftcardsComponent;
  let fixture: ComponentFixture<UpdateGiftcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGiftcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

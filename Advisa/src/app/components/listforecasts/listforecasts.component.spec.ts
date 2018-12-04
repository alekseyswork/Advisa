import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListforecastsComponent } from './listforecasts.component';

describe('ListforecastsComponent', () => {
  let component: ListforecastsComponent;
  let fixture: ComponentFixture<ListforecastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListforecastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListforecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

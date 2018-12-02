import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateforecastComponent } from './create-updateforecast.component';

describe('CreateUpdateforecastComponent', () => {
  let component: CreateUpdateforecastComponent;
  let fixture: ComponentFixture<CreateUpdateforecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateforecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

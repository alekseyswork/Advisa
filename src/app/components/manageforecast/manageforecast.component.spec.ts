import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageforecastComponent } from './manageforecast.component';

describe('ManageforecastComponent', () => {
  let component: ManageforecastComponent;
  let fixture: ComponentFixture<ManageforecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageforecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

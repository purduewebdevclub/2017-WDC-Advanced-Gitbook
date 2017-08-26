import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainHomeComponent } from './villain-home.component';

describe('VillainHomeComponent', () => {
  let component: VillainHomeComponent;
  let fixture: ComponentFixture<VillainHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

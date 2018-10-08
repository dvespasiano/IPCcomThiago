import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHomeComponent } from './tela-home.component';

describe('TelaHomeComponent', () => {
  let component: TelaHomeComponent;
  let fixture: ComponentFixture<TelaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

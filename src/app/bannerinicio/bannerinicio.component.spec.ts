import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerinicioComponent } from './bannerinicio.component';

describe('BannerinicioComponent', () => {
  let component: BannerinicioComponent;
  let fixture: ComponentFixture<BannerinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

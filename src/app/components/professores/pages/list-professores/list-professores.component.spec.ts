import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfessoresComponent } from './list-professores.component';

describe('ListProfessoresComponent', () => {
  let component: ListProfessoresComponent;
  let fixture: ComponentFixture<ListProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfessoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

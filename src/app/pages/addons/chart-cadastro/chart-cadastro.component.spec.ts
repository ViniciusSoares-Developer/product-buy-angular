import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCadastroComponent } from './chart-cadastro.component';

describe('ChartCadastroComponent', () => {
  let component: ChartCadastroComponent;
  let fixture: ComponentFixture<ChartCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

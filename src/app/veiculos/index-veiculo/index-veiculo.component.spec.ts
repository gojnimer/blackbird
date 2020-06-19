import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVeiculoComponent } from './index-veiculo.component';

describe('IndexVeiculoComponent', () => {
  let component: IndexVeiculoComponent;
  let fixture: ComponentFixture<IndexVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

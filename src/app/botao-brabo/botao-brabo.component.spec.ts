import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoBraboComponent } from './botao-brabo.component';

describe('BotaoBraboComponent', () => {
  let component: BotaoBraboComponent;
  let fixture: ComponentFixture<BotaoBraboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoBraboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoBraboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

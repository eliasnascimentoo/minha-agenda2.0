import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluirtarefasPage } from './incluirtarefas.page';

describe('IncluirtarefasPage', () => {
  let component: IncluirtarefasPage;
  let fixture: ComponentFixture<IncluirtarefasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluirtarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

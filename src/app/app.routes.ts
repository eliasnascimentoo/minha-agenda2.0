import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'incluircontato',
    loadComponent: () => import('./paginas/incluircontato/incluircontato.page').then( m => m.IncluircontatoPage)
  },
  {
    path: 'contatos',
    loadComponent: () => import('./paginas/contatos/contatos.page').then( m => m.ContatosPage)
  },  {
    path: 'tarefas',
    loadComponent: () => import('./paginas/tarefas/tarefas.page').then( m => m.TarefasPage)
  },
  {
    path: 'incluirtarefas',
    loadComponent: () => import('./paginas/incluirtarefas/incluirtarefas.page').then( m => m.IncluirtarefasPage)
  },

];

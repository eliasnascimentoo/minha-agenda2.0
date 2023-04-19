import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Tarefas, TarefasService } from 'src/app/servicos/tarefas.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefasPage implements OnInit {
  tarefas: Tarefas[] = [];

  constructor(private service: TarefasService,
              private nav: NavController) {}


  ngOnInit() {
    this.service.listar().subscribe(abc => {
      this.tarefas = abc;
      console.log(this.tarefas);
    });
    
  }

  novo(){
    this.nav.navigateForward("incluirtarefas");
  }

  iniciarEdicao(id:any){
    this.nav.navigateForward(["incluirtarefas",
     {idtarefas: id}]);
  }
}

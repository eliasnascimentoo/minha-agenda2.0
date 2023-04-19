import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { TarefasService } from 'src/app/servicos/tarefas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incluirtarefas',
  templateUrl: './incluirtarefas.page.html',
  styleUrls: ['./incluirtarefas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirtarefasPage implements OnInit {
  id: any;
  contato: any;
  tarefas: { nome: string; tipo: string; descricao: string; };

  constructor(private service: TarefasService, 
              private nav: NavController,
              private rota: ActivatedRoute) {
    this.tarefas = {
      'nome': '', 
      'tipo': '', 
      'descricao': '' 
    };
          
  }

  ngOnInit() {
    this.id = this.rota.snapshot.params['idtarefas'];

    if (this.id != undefined){
      this.service.buscar(this.id).subscribe(res =>{
        this.tarefas = res;
        console.log(res);
      });
    } 
    console.log("Id = " + this.id);
  }

  incluir(){
    if(this.id == undefined){
      this.service.cadastrar(this.tarefas);
    } else {
      this.service.alterar(this.tarefas);
    }
    this.nav.navigateForward("tarefas");
  }
  
  voltar(){
    this.nav.navigateForward("tarefas");
  }
}

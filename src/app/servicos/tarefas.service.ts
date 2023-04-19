import { Injectable } from '@angular/core';
import { addDoc, doc, collection, collectionData, Firestore, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Tarefas{
  id?: string;
  nome: string;
  tipo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  colecao: string = "tarefas";
  constructor(private firestore: Firestore) { }

  cadastrar(obj: any) {
    const tarefas = collection(this.firestore, this.colecao);
    return addDoc(tarefas, obj);
  }  

  listar():Observable<Tarefas[]>{
    const tarefas = collection(this.firestore, 
        this.colecao);
        
    return collectionData(tarefas, 
      {idField:'id'}) as Observable<Tarefas[]>;
  }

  buscar(id:any):Observable<Tarefas>{
    const tarefas = doc(this.firestore, 
      this.colecao + '/' + id);
    
      return docData(tarefas, 
        {idField: 'id'}) as Observable<Tarefas>;
  }

  alterar(obj: any){
    const tarefas = doc(this.firestore, 
      this.colecao + '/' + obj.id );

    return updateDoc(tarefas, {
      nome: obj.nome, tipo: obj.tipo, 
      descricao: obj.descricao
    });  
  }
}




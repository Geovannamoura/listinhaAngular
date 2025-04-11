import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Criando uma estrutura chamada Tarefa (como um molde)
interface Tarefa {
  titulo: string;
  concluida: boolean;
} //não cria nada só serve para o typescript entender como deve ser organizado 

@Component({
  selector: 'app-tarefa',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})

export class TarefaComponent {
  // Armazena o texto que a pessoa digita
  novaTarefa: string = '';

  // Lista de tarefas
  tarefas: Tarefa[] = [];

  // função para o botão adicionar 
  adicionarTarefa() {
    if (this.novaTarefa.trim()) { // Garante que não está vazio
      this.tarefas.push({ titulo: this.novaTarefa, concluida: false });
      this.novaTarefa = ''; // Limpa o campo
    }
  }
  

  // Remove a tarefa da lista
  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }//recebe  posicao da tarefa que vai ser removida e o splice remove 1 item exatamente naquela posicao

  // Alterna se está concluída ou não
  alternarConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  } //se estiver false, vira true. Se estiver true, vira false

}

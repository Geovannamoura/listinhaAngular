import { Component } from '@angular/core';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TarefaComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-tarefas';
}

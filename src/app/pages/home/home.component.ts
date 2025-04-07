import { Component } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-home',
  imports: [QuizzComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

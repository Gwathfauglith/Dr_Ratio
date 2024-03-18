import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterOptimizerComponent } from './character-optimizer/character-optimizer.component';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterOptimizerComponent, CharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dr_Ratio';
}

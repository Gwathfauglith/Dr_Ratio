import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  name!: string;
  imageUrl!: string;

  ngOnInit() {
    this.name = 'Sparkle';
    this.imageUrl = `../../assets/Character_${this.name}_Splash_Art.webp`;
  }
}

import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PagedResponse, Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, TitleCasePipe, RouterLink],
  templateUrl: './card.component.html',
})
export class CardComponent {
  superheroes = input({ data: [], total: 0 } as PagedResponse<Superhero>);
}

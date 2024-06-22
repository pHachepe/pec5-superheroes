import { TitleCasePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PagedResponse, Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, TitleCasePipe],
  templateUrl: './card.component.html',
})
export class CardComponent {
  router = inject(Router);
  superheroes = input({ data: [], total: 0 } as PagedResponse<Superhero>);

  navigateToDetail(superhero: Superhero) {
    this.router.navigateByUrl('/superhero/' + superhero.id, {
      state: { superhero },
    });
  }
}

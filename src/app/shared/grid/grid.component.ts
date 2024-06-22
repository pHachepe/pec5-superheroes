import { Component, inject, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { PagedResponse, Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  router = inject(Router);
  superheroes = input({ data: [], total: 0 } as PagedResponse<Superhero>);

  displayedColumns: string[] = [
    'id',
    'name',
    'image',
    'race',
    'height',
    'weight',
  ];

  navigateToDetail(superhero: Superhero) {
    this.router.navigateByUrl('/superhero/' + superhero.id, {
      state: { superhero },
    });
  }
}

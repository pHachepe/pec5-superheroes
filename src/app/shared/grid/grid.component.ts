import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { PagedResponse, Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  superheroes = input({ data: [], total: 0 } as PagedResponse<Superhero>);

  displayedColumns: string[] = [
    'id',
    'name',
    'image',
    'race',
    'height',
    'weight',
  ];
}

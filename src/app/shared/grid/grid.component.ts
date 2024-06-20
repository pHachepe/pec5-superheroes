import { Component, input } from '@angular/core';
import { PagedResponse, Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  superheroes = input({ data: [], total: 0 } as PagedResponse<Superhero>);
}

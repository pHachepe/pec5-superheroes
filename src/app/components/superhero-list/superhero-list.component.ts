import { Component, Signal, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PagedResponse, Superhero } from '../../models/superhero.model';
import { SuperheroService } from '../../services/superhero.service';
import { CardComponent } from '../../shared/card/card.component';
import { GridComponent } from '../../shared/grid/grid.component';

enum View {
  Card = 'card',
  Grid = 'grid',
}

@Component({
  selector: 'app-superhero-list',
  standalone: true,
  imports: [CardComponent, GridComponent, MatIconModule, MatButtonModule],
  templateUrl: './superhero-list.component.html',
})
export class SuperheroListComponent {
  superheroService = inject(SuperheroService);
  viewEnum = View;
  view = signal(this.viewEnum.Card);

  superheroes: Signal<PagedResponse<Superhero>> = toSignal(
    this.superheroService.getSuperheroes(),
    { initialValue: { data: [], total: 0 } },
  );
}

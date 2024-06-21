import { Component, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
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
  route = inject(ActivatedRoute);
  router = inject(Router);

  viewEnum = View;

  superheroes: Signal<PagedResponse<Superhero>> = toSignal(
    this.superheroService.getSuperheroes(),
    { initialValue: { data: [], total: 0 } },
  );

  queryParamsSignal = toSignal(this.route.queryParams, {
    initialValue: { view: '' },
  });

  view = computed(() => {
    const view = this.queryParamsSignal().view;
    return view === this.viewEnum.Grid
      ? this.viewEnum.Grid
      : this.viewEnum.Card;
  });

  setView(view: View) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { view: view },
    });
  }
}

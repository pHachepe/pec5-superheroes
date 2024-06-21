import { Location } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-superhero-detail',
  standalone: true,
  imports: [MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './superhero-detail.component.html',
})
export class SuperheroDetailComponent {
  superheroService = inject(SuperheroService);
  route = inject(ActivatedRoute);
  location = inject(Location);

  superheroId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  superhero = toSignal(this.superheroService.getSuperhero(this.superheroId))!;
  showDetails = signal(false);

  goBack(): void {
    this.location.back();
  }

  toggleDetails(): void {
    this.showDetails.update((value) => !value);
  }
}

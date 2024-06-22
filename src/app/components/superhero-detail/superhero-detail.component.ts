import { Location } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Superhero } from '../../models/superhero.model';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-superhero-detail',
  standalone: true,
  imports: [MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './superhero-detail.component.html',
})
export class SuperheroDetailComponent {
  superheroService = inject(SuperheroService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  location = inject(Location);

  superhero = signal({} as Superhero);
  showDetails = signal(false);

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const superhero = navigation?.extras?.state['superhero'];
      if (superhero) {
        this.superhero.set(superhero);
      }
    } else {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.superheroService.getSuperhero(id).subscribe((superhero) => {
        this.superhero.set(superhero);
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  toggleDetails(): void {
    this.showDetails.update((value) => !value);
  }
}

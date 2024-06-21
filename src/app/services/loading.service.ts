import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSignal = signal(false);

  constructor() {}

  public show(): void {
    this.loadingSignal.set(true);
  }

  public hide(): void {
    this.loadingSignal.set(false);
  }
}

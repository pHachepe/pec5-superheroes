import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  const snackBar = inject(MatSnackBar);

  loadingService.show();

  return next(req).pipe(
    catchError((error: HttpErrorResponse): Observable<never> => {
      snackBar.open(`Error: ${error.status} ${error.message}`, 'Close', {
        duration: 2000,
      });
      return throwError(() => error);
    }),
    finalize(() => loadingService.hide()),
  );
};

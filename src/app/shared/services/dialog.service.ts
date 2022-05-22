import {Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogState} from '@angular/material/dialog';
import {BehaviorSubject, Observable} from 'rxjs';
import {ComponentType} from '@angular/cdk/overlay';
import {take} from 'rxjs/operators';
import {SharedModule} from '../shared.module';
import {MatDialogOptions} from '../models/dialog-options.model';


@Injectable({
  providedIn: SharedModule
})
export class DialogService {

  private isDialogOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isDialogOpen$: Observable<boolean> = this.isDialogOpen.asObservable();

  constructor(private dialog: MatDialog) {

  }


  open<T>(component: ComponentType<unknown>, config: MatDialogConfig, options: MatDialogOptions) {
    let dialog = this.dialog.open(component, {
        width: config.width ? config.width : '764px',
        height: config.height ? config.height : '550px',
        panelClass: config.panelClass || '',
        data: options
      }
    );

    dialog.afterClosed().pipe(take(1)).subscribe(() => {
      this.isDialogOpen.next(false)
    });

    return dialog;
  }

  close() {
    this.dialog.closeAll();
    this.isDialogOpen.next(false)
  }
}

import {AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {MatDialogOptions} from '../../models/dialog-options.model';



@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit,AfterViewInit {
 @ViewChild('ngContainerRef',{read: ViewContainerRef}) containerRef!: ViewContainerRef;
  constructor( @Inject(MAT_DIALOG_DATA) public config: MatDialogOptions) { }

  ngOnInit(): void {
    console.log(this.config)
  }
  ngAfterViewInit() {
  }

}

import {AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {MatDialogOptions} from '../../models/dialog-options.model';
import {InstitutionResearchComponent} from './steps/institution-research/institution-research.component';
import {ReaearchDetailsFormComponent} from './steps/reaearch-details-form/reaearch-details-form.component';
import {ResearchNameFormComponent} from './steps/research-name-form/research-name-form.component';



@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit,AfterViewInit {
 @ViewChild('ngContainerRef',{read: ViewContainerRef}) containerRef!: ViewContainerRef;
  constructor( @Inject(MAT_DIALOG_DATA) public config: MatDialogOptions) { }
  counter: number = 1;
  ngOnInit(): void {
    console.log(this.config)
  }
  ngAfterViewInit() {
    this.containerRef.createComponent(InstitutionResearchComponent);

  }

  onNext() {
    this.counter++;

    switch (this.counter) {
      case 2:
        this.containerRef.clear();
        this.containerRef.createComponent(ReaearchDetailsFormComponent);
        break
      case 3:
        this.containerRef.clear();
        this.containerRef.createComponent(ResearchNameFormComponent)
        break;
    }
  }
}

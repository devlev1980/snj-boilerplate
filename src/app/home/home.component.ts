import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiMap } from 'src/app/common/api.map';
import { DataService } from 'src/app/core/services/data.service';
import { TestModel } from './models/test.model';
import {DialogService} from '../shared/services/dialog.service';
import {YesNoDialogComponent} from '../shared/components/yes-no-dialog/yes-no-dialog.component';
import {MatDialogOptions} from '../shared/models/dialog-options.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute,private dialog: DialogService) { }

  ngOnInit(): void {
    // this.data.request<TestModel[]>(ApiMap.test).subscribe(
    //   (o) => {
    //     console.log(o)
    //     console.log(`%c` + JSON.stringify(o,undefined,2), 'color: yellow');
    //     console.log('%c' + o.body?.[0].title, 'color: yellow');
    //   });

    this.data.request<TestModel[]>(ApiMap.test).subscribe({
      next: ({body,status})=> {
        console.log(status)
      },
    });
  }

  onShowComponent() {
    const options: MatDialogOptions = {
      isShowButtons: false,
      isShowTitle: false,
      isShowCloseButton: true,
      links: [
        {
          aHref: '#',
          aText: 'a'
        },
        {
          aHref: '#',
          aText: 'b'
        },
        {
          aHref: '#',
          aText: 'c'
        }
      ]
    }
    this.dialog.open(YesNoDialogComponent,{
      width: '500px',
      panelClass: 'yl_dialog',
    }, options)
  }
}

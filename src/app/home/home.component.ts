import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiMap } from 'src/app/common/api.map';
import { DataService } from 'src/app/core/services/data.service';
import { TestModel } from './models/test.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data.request<TestModel[]>(ApiMap.test).subscribe(
      (o) => {
        console.log(o.body?.[0].text);
      });
  }
}

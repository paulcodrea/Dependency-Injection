import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple.service';
import { SimpleServiceWithDefaultService } from 'src/app/services/simple-service-with-default.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'], 
  providers: [{provide: SimpleService, useClass: SimpleServiceWithDefaultService}]
})
export class ParentComponent implements OnInit {

  constructor(private simpleService: SimpleService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'], 
  providers: [SimpleService]
})
export class ParentComponent implements OnInit {

  constructor(private simpleService: SimpleService) { }

  ngOnInit() {
  }

}

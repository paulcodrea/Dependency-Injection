import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private simpleService: SimpleService) { }

  ngOnInit() {
  }

}

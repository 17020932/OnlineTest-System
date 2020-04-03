import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input()
  test: any;

  // @Output()
  // continue: EventEmitter<any> = new EventEmitter();
  constructor(private route: Router) { }

  ngOnInit() {
  }

}

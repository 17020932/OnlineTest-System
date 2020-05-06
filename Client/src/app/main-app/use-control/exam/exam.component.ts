import { Component, OnInit, Input } from '@angular/core';
import { EnumTypeQuestion, EnumLevelQuestion } from 'src/app/common/enum-common';
import { FunctionCommon } from 'src/app/common/funtion-common';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  @Input()
  lstQuestions: any;

  enumTypeQuestion = EnumTypeQuestion;
  constructor() { }

  ngOnInit() {
    //this.getListQuestion();
  }

 

}

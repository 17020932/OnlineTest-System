import { FunctionCommon } from './../../../../common/funtion-common';
import { EnumTypeQuestion, EnumLevelQuestion } from './../../../../common/enum-common';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.scss']
})
export class ViewTestComponent implements OnInit {

  lstQuestions = [];
  testName: string = '';
  testCode: string = '';

  enumTypeQuestion = EnumTypeQuestion;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data.test);
    this.getListQuestion();
  }

  // Lấy về danh ssách question theo id đề thi
  getListQuestion(){
    this.lstQuestions = [
      {
        id: 1,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng nhất trong các mệnh đề sau',
        type: EnumTypeQuestion.radio,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 2,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng các mệnh đề sau',
        type: EnumTypeQuestion.checkbox,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4", "mệnh đề 5", "Mệnh đề 6"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2", "Mệnh đề 1"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 3,
        idBank: 1,
        idTest: 1,
        name: 'điền mệnh đề thích hợp để điền vào chỗ trống',
        content: 'chọn mệnh đề_____________',
        type: EnumTypeQuestion.text,
        // answer: '["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]',
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 1,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng nhất trong các mệnh đề sau',
        type: EnumTypeQuestion.radio,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 4,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng các mệnh đề sau',
        type: EnumTypeQuestion.checkbox,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4", "mệnh đề 5", "Mệnh đề 6"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2", "Mệnh đề 1"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 5,
        idBank: 1,
        idTest: 1,
        name: 'điền mệnh đề thích hợp để điền vào chỗ trống',
        content: 'chọn mệnh đề_____________',
        type: EnumTypeQuestion.text,
        // answer: '["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]',
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 6,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng nhất trong các mệnh đề sau',
        type: EnumTypeQuestion.radio,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 7,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng các mệnh đề sau',
        type: EnumTypeQuestion.checkbox,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4", "mệnh đề 5", "Mệnh đề 6"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2", "Mệnh đề 1"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 8,
        idBank: 1,
        idTest: 1,
        name: 'điền mệnh đề thích hợp để điền vào chỗ trống',
        content: 'chọn mệnh đề_____________',
        type: EnumTypeQuestion.text,
        // answer: '["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]',
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 9,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng nhất trong các mệnh đề sau',
        type: EnumTypeQuestion.radio,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 10,
        idBank: 1,
        idTest: 1,
        name: 'chọn mệnh đề đúng các mệnh đề sau',
        type: EnumTypeQuestion.checkbox,
        answer: FunctionCommon.convertJsonToArray('["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4", "mệnh đề 5", "Mệnh đề 6"]'),
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2", "Mệnh đề 1"]'),
        level: EnumLevelQuestion.easy
      },
      {
        id: 11,
        idBank: 1,
        idTest: 1,
        name: 'điền mệnh đề thích hợp để điền vào chỗ trống',
        content: 'chọn mệnh đề_____________',
        type: EnumTypeQuestion.text,
        // answer: '["mệnh đề 1", "mệnh đề 2", "mệnh đề 3", "mệnh đề 4"]',
        correct: FunctionCommon.convertJsonToArray('["mệnh đề 2"]'),
        level: EnumLevelQuestion.easy
      }
    ]
  }

}

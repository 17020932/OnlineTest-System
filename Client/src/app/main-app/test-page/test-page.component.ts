import { Component, OnInit } from '@angular/core';
import { EnumTypeQuestion, EnumLevelQuestion, FakelstQuestions, FakelstTest } from 'src/app/common/enum-common';
import { FunctionCommon } from 'src/app/common/funtion-common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  // data fake start
  fakeDataQuestion = FakelstQuestions;
  fakeDataTest = FakelstTest;
  // data fake end

  doExam: boolean = false;

  lstQuestions = [];
  constructor(private route: ActivatedRoute) {
  }

  test: any = {};

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getListQuestion(id);
    this.getTest(id);
  }

  // Lấy về danh ssách question theo id đề thi
  getListQuestion(id) {
    this.lstQuestions = this.fakeDataQuestion.filter(f => f.idTest == id);
  }

  // Lấy về test theo id
  getTest(id) {
    this.test = this.fakeDataTest.find(f => f.id == id);
  }

}

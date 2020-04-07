import { ViewTestComponent } from './bottomSheet/view-test/view-test.component';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatBottomSheet } from '@angular/material';
import { column } from 'src/app/models/column';
import { EnumDataType } from 'src/app/common/enum-common';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-manager-test',
  templateUrl: './manager-test.component.html',
  styleUrls: ['./manager-test.component.scss']
})

export class ManagerTestComponent implements OnInit {
  date = new Date();
  lstTest: Test[] = [
    { id: 1, code: 'MS001', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS002', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0020', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0019', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0018', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0017', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0016', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0015', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0014', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0013', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0012', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0011', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0010', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS009', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS008', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS007', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS006', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS005', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS004', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
  ];

  totalPage = this.lstTest.length;

  displayedColumns: string[] = ['code', 'name', 'datePublic', 'time', 'status', 'amount'];

  dataSource = new MatTableDataSource<any>(this.lstTest);

  Columns: Array<column> = [
    {
      type: EnumDataType.selectBox,
      name: '',
      dataIndex: 'select',
    },
    {
      type: EnumDataType.default,
      name: 'Mã đề thi',
      dataIndex: 'code',
    },
    {
      type: EnumDataType.default,
      name: 'tên đề thi',
      dataIndex: 'name',
    },
    {
      type: EnumDataType.date,
      name: 'ngày xuất bản',
      dataIndex: 'datePublic',
    },
    {
      type: EnumDataType.number,
      name: 'thời gian (phút)',
      dataIndex: 'time',
    },
    {
      type: EnumDataType.status,
      name: 'trạng thái',
      dataIndex: 'status',
    },
    {
      type: EnumDataType.number,
      name: 'Số lượt thi',
      dataIndex: 'amount',
    }
  ];

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  viewTest(element) {
    this._bottomSheet.open(ViewTestComponent,
      {
        data: {
          test: element
        }
      });
  }

}

import { AddTestComponent } from './../../bottomSheet/add-test/add-test.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-type-import',
  templateUrl: './type-import.component.html',
  styleUrls: ['./type-import.component.scss']
})
export class TypeImportComponent implements OnInit {

  constructor(
    private _dialogRef:MatDialogRef<TypeImportComponent>,
    private _bottomsheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }

  openAddTest(){
    this.closedialog();
    this._dialogRef.afterClosed().subscribe(() => {
      this._bottomsheet.open(AddTestComponent);
    });
  }

  closedialog(){
    this._dialogRef.close();
  }

  openAlert(){
    alert("tính năng đang phát triển")
  }

}

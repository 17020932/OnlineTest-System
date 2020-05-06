import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeImportComponent } from './type-import.component';

describe('TypeImportComponent', () => {
  let component: TypeImportComponent;
  let fixture: ComponentFixture<TypeImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

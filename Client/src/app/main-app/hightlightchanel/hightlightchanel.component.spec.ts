import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightchanelComponent } from './hightlightchanel.component';

describe('HightlightchanelComponent', () => {
  let component: HightlightchanelComponent;
  let fixture: ComponentFixture<HightlightchanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightlightchanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightlightchanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

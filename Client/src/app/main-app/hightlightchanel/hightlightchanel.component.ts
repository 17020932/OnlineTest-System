import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FakelstTitle, FakelstChannel, FakelstTest } from 'src/app/common/enum-common';

@Component({
  selector: 'app-hightlightchanel',
  templateUrl: './hightlightchanel.component.html',
  styleUrls: ['./hightlightchanel.component.scss']
})
export class HightlightchanelComponent implements OnInit {

  // fake data
  fakeDataChannel = FakelstChannel;
  fakeDataTest = FakelstTest;
  // fake data end

  channel: any = {};

  listTitles: Array<any> = FakelstTitle;

  listTest: Array<any> = [];

  constructor(private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.getLstTest(id);
    this.getChannelById(id);
  }

  // đi vào bài test
  goToTestById(test) {
    if (test && test.id) {
      const url = 'main/test/' + test.id;
      this.route.navigate([url]);
    }
  }

  // get lst test
  getLstTest(id) {
    const lstTest = this.fakeDataTest.filter(f => f.idChannel == id);
    this.listTest = lstTest.sort((a, b) => {
      if (a.amount < b.amount) {
        return -1;
        // a should come after b in the sorted order
      } else if (a.amount > b.amount) {
        return 1;
        // and and b are the same
      } else {
        return 0;
      }
    });
  }

  // Lấy về test theo id
  getChannelById(id) {
    this.channel = this.fakeDataChannel.find(f => f.id == id);
  }
}

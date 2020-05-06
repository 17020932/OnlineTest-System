import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakelstTitle, FakelstChannel, FakelstTest } from 'src/app/common/enum-common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // fake data
  fakeDataChannel = FakelstChannel;
  fakeDataTest = FakelstTest;
  // fake data end

  listTitles: Array<any> = FakelstTitle;

  listChannel: Array<any> = [];

  date: Date = new Date();

  listTest: Array<any> = [];

  constructor(private route: Router) { }

  ngOnInit() {
    this.getLstChannel();
    this.getLstTest();
  }

  // đi vào bài test
  goToTestById(test) {
    if (test && test.id) {
      const url = 'main/test/' + test.id;
      this.route.navigate([url]);
    }
  }

  // đi vào kênh cá nhân
  goToChannelById(channel) {
    if (channel && channel.id) {
      const url = 'main/channel/' + channel.id;
      this.route.navigate([url]);
    }
  }

  // get lst test
  getLstTest() {
    this.listTest = this.fakeDataTest.sort((a, b) => {
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
    this.listTest = this.listTest.slice(0, 8);
  }

  // get lst channel
  getLstChannel() {
    this.listChannel = this.fakeDataChannel.sort((a, b) => {
      if (a.amountLike < b.amountLike) {
        return -1;
        // a should come after b in the sorted order
      } else if (a.amountLike > b.amountLike) {
        return 1;
        // and and b are the same
      } else {
        return 0;
      }
    });
    this.listChannel = this.listChannel.slice(0, 8);
  }

}

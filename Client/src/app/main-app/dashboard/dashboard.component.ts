import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listTitles: Array<any> = [
    {
      title: 'Code',
      imageUrl: '/assets/Image/chu_de/code.svg',
      color: '#994d4d'
    },
    {
      title: 'Vật lý',
      imageUrl: '/assets/Image/chu_de/vatly.svg',
      color: '#2f5256'
    },
    {
      title: 'Test IQ',
      imageUrl: '/assets/Image/chu_de/testiq.svg',
      color: '#22264b'
    },
    {
      title: 'Sinh học',
      imageUrl: '/assets/Image/chu_de/sinhhoc.svg',
      color: '#e6cf8b'
    },
    {
      title: 'Toán',
      imageUrl: '/assets/Image/chu_de/math.svg',
      color: '#3e4530'
    },
    {
      title: 'Lịch sử',
      imageUrl: '/assets/Image/chu_de/history.svg',
      color: '#95c4d7'
    },
    {
      title: 'địa lý',
      imageUrl: '/assets/Image/chu_de/geo.svg',
      color: '#bd7878'
    },
    {
      title: 'Ielts',
      imageUrl: '/assets/Image/chu_de/ielts.svg',
      color: '#bd7878'
    }

  ];

  listChannel: Array<any> = [
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    },
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    },
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    },
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    },
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    },
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    },
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    },
    {
      Id: 1,
      Name: 'Hóa học 24h',
      AmountFollow: 11245
    }
  ];

  date: Date = new Date();
  listTest: Array<any> = [
    {
      Id: 1,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 2,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 3,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 4,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 5,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 6,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 7,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 8,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    }

  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  // đi vào bài test
  goToTestById(test) {
    if (test && test.Id) {
      const url = 'main/test/' + test.Id;
      this.route.navigate([url]);
    }
  }

  // đi vào kênh cá nhân
  goToChannelById(channel) {
    if (channel && channel.Id) {
      const url = 'main/channel/' + channel.Id;
      this.route.navigate([url]);
    }
  }

}

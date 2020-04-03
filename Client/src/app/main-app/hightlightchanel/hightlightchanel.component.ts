import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hightlightchanel',
  templateUrl: './hightlightchanel.component.html',
  styleUrls: ['./hightlightchanel.component.scss']
})
export class HightlightchanelComponent implements OnInit {
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
  listExam: Array<any> = [
    {
      title: 'Đề thi môn Vật lý',
      imageUrl: '/assets/Image/chu_de/vatly.svg',
      color: '#2f5256'
    },
    {
      title: 'Đề thi Test IQ',
      imageUrl: '/assets/Image/chu_de/testiq.svg',
      color: '#22264b'
    },
    {
      title: 'Đề thi môn Sinh học',
      imageUrl: '/assets/Image/chu_de/sinhhoc.svg',
      color: '#e6cf8b'
    },
    {
      title: 'Đề thi môn Toán',
      imageUrl: '/assets/Image/chu_de/math.svg',
      color: '#3e4530'
    },
    {
      title: 'Đề thi môn Lịch sử',
      imageUrl: '/assets/Image/chu_de/history.svg',
      color: '#95c4d7'
    },
    {
      title: 'Đề thi môn địa lý',
      imageUrl: '/assets/Image/chu_de/geo.svg',
      color: '#bd7878'
    },
    {
      title: 'Đề thi môn Ielts',
      imageUrl: '/assets/Image/chu_de/ielts.svg',
      color: '#bd7878'
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
      Id: 1,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 1,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 1,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 1,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 1,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 1,
      Name: 'Đề thi thử THPTQG hóa học năm 2020',
      Passwodrs: null,
      Title: 'Hóa học 24h',
      createdDate: this.date
    },
    {
      Id: 1,
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
    debugger
    if (test && test.Id) {
      const url = 'main/test/' + test.Id;
      this.route.navigate([url]);
    }
  }
}

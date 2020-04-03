import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  isOpen: boolean = true;
  mode: string = 'side';

  listUrl: string[] = [
    '/main/dashboard',
    '/main/search',
    '/main/channel',
    '/main/notify',
    '/main/personal-channel',
    '/main/home',
    '/main/history-test'
  ];
  selectedPage: number = null;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    const me = this;
    me.toggleSideBar();
    this.selectedPage = this.listUrl.indexOf(me.route.url) + 1;
  }

  // chạy tới trang trên menu
  redirectTo(page) {
    const me = this;
    me.selectedPage = page;
    me.route.navigate([me.listUrl[page - 1]]);
  }

  //
  @HostListener('window:resize', ['$event'])
  toggleSideBar() {
    const limitWidth = 1200;
    const currentWidth = window.innerWidth;
    if (currentWidth < limitWidth){
      this.mode = 'mode';
      this.isOpen = false;
    } else {
      this.mode = 'side';
      this.isOpen = true;
    }
  }

}

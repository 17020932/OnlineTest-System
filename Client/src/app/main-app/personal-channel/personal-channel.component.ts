import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-channel',
  templateUrl: './personal-channel.component.html',
  styleUrls: ['./personal-channel.component.scss']
})
export class PersonalChannelComponent implements OnInit {

  hasChannel: boolean = false;
  constructor( private router: Router) { }

  ngOnInit() {
    if(this.hasChannel){
      this.router.navigate(['/manager']);
    }
  }

}

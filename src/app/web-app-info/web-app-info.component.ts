import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-app-info',
  templateUrl: './web-app-info.component.html',
  styleUrls: ['./web-app-info.component.scss'],
  host: {
    class: 'full-width'
  }
})
export class WebAppInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

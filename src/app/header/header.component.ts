import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: string = "EN";

  constructor() { }

  ngOnInit(): void {
  }

  selectLanguage(lang: string) {
    switch (lang) {
      case "DE":
        this.language = "DE";
        break;
      case "EN":
        this.language = "EN";
        break;
      default:
        this.language = "DE";
        break;
    }
  }

}

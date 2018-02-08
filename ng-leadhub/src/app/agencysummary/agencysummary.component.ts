import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'app-agencysummary',
  templateUrl: './agencysummary.component.html',
  styleUrls: ['./agencysummary.component.css'],
})
export class AgencysummaryComponent implements OnInit {

  title = "Agency Summary";

  constructor() { }

  ngOnInit() {
  }

}

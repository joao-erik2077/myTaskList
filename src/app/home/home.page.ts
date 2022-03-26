import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private taskList: any = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 15; i++) {
      this.taskList[i - 1] = { name: `Example ${i}` };
    }
  }
}

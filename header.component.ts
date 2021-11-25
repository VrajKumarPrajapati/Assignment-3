import { Component, OnInit } from '@angular/core';
import { Prajapvr } from '../prajapvr';
import { MyIntro } from 'src/assets/Data/prajapvrData';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  prajapvrData = MyIntro;
  prajapvr = Prajapvr;
  constructor() { }

  ngOnInit(): void {
  }

 

}

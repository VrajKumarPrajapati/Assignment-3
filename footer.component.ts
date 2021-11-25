import { Component, OnInit } from '@angular/core';
import { Prajapvr } from '../prajapvr';
import { MyIntro } from 'src/assets/Data/prajapvrData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  prajapvrData = MyIntro;
  prajapvr = Prajapvr;

  constructor() { }

  ngOnInit(): void {
  }

  
}

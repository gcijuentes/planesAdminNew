import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector: 'app-modalpdf',
  templateUrl: './modalpdf.component.html',
  styles: [
  ]
})
export class ModalpdfComponent implements OnInit {

  @Input() planCard:any = {};

  base_url:string = environment.base_url;

  constructor() { }

  ngOnInit(): void {
  }

}

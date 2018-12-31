import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss'],
  animations: [
    trigger('easeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(1000)
      ])
    ])
  ]
})
export class IdeaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

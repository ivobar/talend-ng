import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('void => *', [
        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateX(-100px)'
          }),
          stagger(200, animate(1000, style({
            opacity: 1,
            transform: 'translateX(0)'
          })))
        ])
      ])
    ])
  ]
})
export class ContributorsComponent implements OnInit {
  contributors = [
    'Fernando Gonzales Amigo Cojones',
    'Maria Esmeralda Ija de Mama',
    'Feliziano de Vaso de Coca',
    'Carro Armada con Unalarma',
    'Dio God Alot',
    'Puta de Tumadre Pendejo Amor',
    'Diego Armando Pederona',
    'Sere Mise Gaspacho',
    'Tortilla de Franco Pendejo'
  ];
  constructor() { }

  ngOnInit() {
  }

}

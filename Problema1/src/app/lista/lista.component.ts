import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input()listaClientes: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}

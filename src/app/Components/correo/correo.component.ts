import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    this.correo = {
      titulo: "titu",
      cuerpo: "cuerpoooo",
      emisor: "emisor - sdfsdf",
      destinatario: "asdasd@#as.asd"
    }
  }

  ngOnInit(): void {
  }

}

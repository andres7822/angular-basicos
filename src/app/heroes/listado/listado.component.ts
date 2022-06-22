import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
//ng g c heroes/listado
//El OnInit son ciertos pasos o metodos que angular ejecuta de manera automatica
// export class ListadoComponent implements OnInit {

//   constructor() { 
//     console.log('constructor')
//     //el constructor se genera antes que el renderizado del componente
//   }

//   ngOnInit(): void {
//     console.log('ngOnInit')
//     //Usualmente se utiliza para inicializar cosas, como peticiones a un servicio.
//   }
 
// }

export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string="";
  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
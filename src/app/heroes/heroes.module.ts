import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Que cosas quiero hacer publicas/visibles fuera de este modulo
        ListadoComponent
    ],
    imports: [ //Aqui adentro van modulos
        CommonModule
    ]
})
export class HeroesModule {

}
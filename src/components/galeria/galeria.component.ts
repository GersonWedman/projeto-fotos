import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  public title: string = 'Tex Willer';

  public default:boolean = true;

//public title = "Galeria de Gibis";
  public fotos = ['https://www.lordinario.it/wp-content/uploads/2018/10/TEX-rampante-Galep.jpg',
  'https://1.bp.blogspot.com/-oZULWV9Csh0/Xej09rnLPbI/AAAAAAAAiXw/BYJUaTwNDuwCvijht0a210b_FKxpPstFwCLcBGAsYHQ/s1600/FB_IMG_1575546796489.jpg',
   'https://i.pinimg.com/736x/53/67/e6/5367e6f10f28181de20a42b5960407b4.jpg'];

  public fotoAtual = 0;

  public voltarParaPrimeira(){
    this.fotoAtual = this.primeira();
  }

  public irParaProxima(){
    this.fotoAtual++;
  }

  public voltarParaAnterior(){
    this.fotoAtual--;
  }

  public vaiParaUltima(){
    this.fotoAtual = this.ultima();
  }

  public primeira(){
    return 0;
  }

  public ultima(){
    return this.fotos.length - 1;
  }



}

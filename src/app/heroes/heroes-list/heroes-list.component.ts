import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',

})
export class HeroesListComponent {
  imageWidth: number = 40;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter:string='';

  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }

  heroes: any[] = [
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      name: "Goku",
      description: "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
      race: "Saiyan",
      ki: "60.000.000"
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      name: "Vegeta",
      description: "Príncipe de la raza Saiyan, orgulloso y rival eterno de Goku. Aunque empezó como villano, terminó convirtiéndose en uno de los defensores de la Tierra.",
      race: "Saiyan",
      ki: "55.000.000"
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      name: "Freezer",
      description: "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
      race: "Frieza Race",
      ki: "530.000"
    },
  ];
}

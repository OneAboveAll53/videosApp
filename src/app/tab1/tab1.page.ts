import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.models';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilmes.models';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  handlerMessage = '';
  titulo = 'Filmes';
  listaVideos: IFilme[] = [
    {
      nome: 'Doutor Estranho no Multiverso da Loucura (2022)',
      lancamento: '05/05/2022',
      duracao: '2h 6m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      pagina: '/doutor-estranho'
    },
    {
      nome: 'Lightyear (2022)',
      lancamento: '16/06/2022',
      duracao: '1h 45m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wDnKL1eBkSkGGBK6WoQxZZVDCHU.jpg',
      generos: ['Animação', 'Ficção científica', 'Aventura', 'Ação', 'Família'],
      pagina: '/buzzlightyear'
    }
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) {}

    buscarFilmes(evento: any){
      console.log(evento.target.value);
      const busca = evento.target.value;
      if(busca && busca.trim() !== ''){
        this.filmeService.buscarFilmes(busca).subscribe(dados=>{
          console.log(dados);
          this.listaFilmes = dados;
        }
          );
      }
    }

    exibirFilme(filme: IFilmeApi){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Sim, favoritar',
          role: 'confirm',
          handler: () => {
            this.presentToast();
          },
        },
      ],
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Adicionado com sucesso.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit(){
    this.generoService.buscarGeneros().subscribe(dados=>{
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero=>{
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });
  }
}

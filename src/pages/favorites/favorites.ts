import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.services';
import { QuotePage } from '../quote/quote';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-favorites',
 	templateUrl: 'favorites.html',
 })
 export class FavoritesPage {

 	favoriteQuotes: Quote[];

 	constructor(public navCtrl: NavController, public navParams: NavParams, private quotesService: QuotesService, private modalCtrl: ModalController, private menuCtrl: MenuController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FavoritesPage');

 	}

 	ionViewWillEnter() {
 		this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
 	}

 	onViewQuote(quote: Quote) {
 		const modal = this.modalCtrl.create(QuotePage, quote);
 		modal.present();
 		//ionic will pass remove argument when modal is dismissed in quotes.ts
 		//only runs if remove is true
 		modal.onDidDismiss((remove: boolean) => {
 			if (remove) {
 				this.quotesService.removeQuoteFromFavorite(quote);
 				this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
 				console.log("quote Removed");
 			}	
 		});
 	}

 	onRemoveFromFavorites(quote: Quote) {
 		this.quotesService.removeQuoteFromFavorite(quote);
 		this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
 	}


 }

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.services';

 @IonicPage()
 @Component({
 	selector: 'page-quotes',
 	templateUrl: 'quotes.html',
 })
 export class QuotesPage implements OnInit {

 	quoteGroup: {category: string, quotes: Quote[], icon: string};

 	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private quoteService: QuotesService ) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad QuotesPage');
 	}

 	ngOnInit() {
 		this.quoteGroup = this.navParams.data;
 	}

 	onAddToFavorites(selectedQuote: Quote) {	
 		const alert = this.alertCtrl.create( {
 			title: 'Add Quote',
 			subTitle: 'Are you sure?',
 			message: 'Are you sure you want to add the quote?',
 			buttons: [
	 			{
	 				text: 'Yes',
	 				handler: () => {
	 					this.quoteService.addQuoteToFavorites(selectedQuote);
	 					console.log('quoteAdded');
	 				}
	 			},
	 			{
	 				text: 'No',
	 				role: 'cancel',
	 				handler: () => {
	 					console.log('no');
	 				}
	 			}
 			]
 		});

 		alert.present();
 	}

 	onRemoveFromFavorites(selectedQuote: Quote) {
 		this.quoteService.removeQuoteFromFavorite(selectedQuote);
 	}

 	isFavorite(quote: Quote) {
 		//returns true/false if quote is found in array
 		return this.quoteService.isQuoteFavorite(quote);
 	}


 }

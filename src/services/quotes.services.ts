import { Quote } from '../data/quote.interface';

export class QuotesService {
	private favoriteQuotes: Quote[] = [];

	addQuoteToFavorites(quote: Quote) {
		this.favoriteQuotes.push(quote);
		console.log(this.favoriteQuotes);
	}

	removeQuoteFromFavorite(quote: Quote) {
		//search for position of specific quote in array
		const position = this.favoriteQuotes.indexOf(quote);
		this.favoriteQuotes.splice(position, 1);
	}

	getFavoriteQuotes(){
		//copy of array
		return this.favoriteQuotes.slice();
	}

	isQuoteFavorite(quote: Quote) {
		//find method takes in function that acts on each element in array
		//returns true if id in array matches id of quote passed in parameter
		return this.favoriteQuotes.find((quoteElement: Quote) => {
			return quoteElement.id == quote.id;
		});
	}
}

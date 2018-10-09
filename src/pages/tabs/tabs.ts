import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchText = '';

  constructor(private router: Router) {}

  onClickCleanBtn() {
    this.searchText = '';
  }

  onKeyPress(e: KeyboardEvent) {
    // Event tipini netleştirin
    const input = e.target as HTMLInputElement;
    if (e.key === 'Enter' && input.value.trim()) {
      const city = input.value.trim(); // Trim, boşlukları temizler
      this.router.navigate([`/${city}`]);
      this.searchText = '';
    }
  }
}

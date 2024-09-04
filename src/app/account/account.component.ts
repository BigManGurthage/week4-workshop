import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { CommonModule } from '@angular/common';
import { MembershipModule } from './membership/membership.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { PopupComponent } from './shared/components/popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CatalogModule,
    ShoppingCartModule,
    MembershipModule,
    ShoppingCartModule,
    PopupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Transflower Store';
}

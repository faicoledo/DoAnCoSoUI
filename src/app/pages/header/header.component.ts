import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
logout() {
throw new Error('Method not implemented.');
}
loginRedirect() {
throw new Error('Method not implemented.');
}
editProfile() {
throw new Error('Method not implemented.');
}
loginDisplay: any;
isAdmin: any;
profilePictureUrl: any;

}

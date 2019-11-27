import { Component } from '@angular/core';
import { StorageService } from './shared/Storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2login';

  constructor(
    private storageService: StorageService
  ) {}
}

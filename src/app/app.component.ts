import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private metaTagService: Meta) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'marketing, seo, páginas web, rd marketing, diseño, logo, branding, redes sociales' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'RD Marketing' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2023-03-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }
}

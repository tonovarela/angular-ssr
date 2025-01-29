import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({ name: 'description', content: 'About Page Description' });
    this.meta.updateTag({ name: 'keywords', content: 'About Page Keywords,Tonovarela' });
    this.meta.updateTag({ name: 'author', content: 'About Page Author' });
    this.meta.updateTag({ name: 'og:title', content: 'About Page Open Graph Title' });

  }



 }

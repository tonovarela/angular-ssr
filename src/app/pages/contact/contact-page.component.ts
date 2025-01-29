import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit { 
   private title = inject(Title);
    private meta = inject(Meta);
  
    ngOnInit(): void {
      
      this.title.setTitle('Contact Page');
      this.meta.updateTag({ name: 'description', content: 'About Page Description' });
      this.meta.updateTag({ name: 'keywords', content: 'About Page Keywords,Tonovarela' });
      this.meta.updateTag({ name: 'author', content: 'About Page Author' });
      this.meta.updateTag({ name: 'og:title', content: 'About Page Open Graph Title' });
  
    }
  
}

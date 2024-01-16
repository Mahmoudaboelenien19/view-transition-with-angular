import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  template: `
    @if(imgSrc()){

    <img [src]="imgSrc()" style="view-transition-name: img-{{ imgId() }}" />
    }@else{
    <div>no image</div>
    }
  `,
  styles: `  
  img{
    width:100%;
    height:400px;
    object-fit:cover;
    margin-top:70px

  }
  `,
})
export class ImageComponent {
  imgSrc = computed(() => {
    if (this.imgId) {
      return 'assets/images/' + this.imgId() + '.jpg';
    } else {
      return '';
    }
  });
  imgId = signal('');
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.imgId.set(params.get('id') || '');
      console.log(params.get('id'));
    });
  }
}

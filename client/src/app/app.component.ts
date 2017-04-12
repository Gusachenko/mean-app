import { Component } from '@angular/core';
import { ProductService } from './services/products.service.js';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/app.component.html',
  styleUrls: ['src/app/app.component.css'],
  providers: [ProductService]
})

export class AppComponent {
  name: string = 'Angular App!';
  inputName: string;
  inputPass: string;
  result: string = 'response';

  constructor(private productService: ProductService) {}

  public connectToMongo(): void {
    console.log('connectToMongo');
    // let sendedObject = { name: this.inputName, pass: this.inputPass };

this.productService.getProducts(this.inputName, this.inputPass ).subscribe(products => {
  console.log(products);
  this.result = JSON.stringify(products);
});

  }


  public clearForm(): void {
    this.inputName = '';
    this.inputPass = '';
  }



}

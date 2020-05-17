import { Component, OnInit } from '@angular/core';

import { HomeModule} from '../../Modules/home/home.module';

import { HomeService } from '../../services/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  prods: HomeModule[];

  constructor(private prd: HomeService) { }
  ngOnInit() {

    this.AfficherProduit()
  }

  // -------function---------
  AfficherProduit() {

    this.prd.getProduits().subscribe( ( res: HomeModule [] ) => {

      this.prods = res

      console.log( this.prods );

    })
  }


}

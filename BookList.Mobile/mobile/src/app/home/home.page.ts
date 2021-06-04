import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public books : Array<any> = [
    {
      Id: 2,
      Titulo: "O Inimigo de Deus",
      Autor: "Bernard Cornwell",
      Preco: 47,
      Link: "https://www.amazon.com.br/inimigo-Deus-Vol-Cr%C3%B4nicas-Artur/dp/8501061182/ref=pd_bxgy_img_2/137-2757064-9948448?_encoding=UTF8&pd_rd_i=8501061182&pd_rd_r=4456d71c-768d-40bc-99bc-d8f08db77c47&pd_rd_w=VGKSm&pd_rd_wg=ZHrrn&pf_rd_p=617d877a-3164-4f62-ae4c-4449357c5b5e&pf_rd_r=GZVNK4Y27N59NBJXFCCS&psc=1&refRID=GZVNK4Y27N59NBJXFCCS"
    },
    {
      Id: 3,
      Titulo: "Os próprios deuses",
      Autor: "Isaac Asimov",
      Preco: 51.92,
      Link: "https://www.amazon.com.br/Os-pr%C3%B3prios-deuses-Isaac-Asimov/dp/6586064430/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=os+proprios+deuses&qid=1622742612&sr=8-1"
    }

  ]
  constructor(private apiService: ApiService) {
    //this.createBook();
    //this.getBook()
    this.getBooks();
    //this.updateBook();
    //this.deleteBook();
  }

  getBooks(){
    this.apiService.getBooks().subscribe(data=>{
      console.log(data);
    })
  }

}

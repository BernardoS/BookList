import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl:string = 'https://localhost:44351';
  
  constructor(private http:HttpClient) {

  }
  createBook(){

  }
  getBook(id:number){
    console.log(id);
  }
  getBooks(){
    return this.http.get(`${this.apiUrl}/Book/GetBooks`);
  }
  updateBook(){

  }
  deleteBook(){

  }

}

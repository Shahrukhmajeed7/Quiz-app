import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getQuestionjson(){
    return this.http.get<any>("../assets/questions.json");
    
  }


}

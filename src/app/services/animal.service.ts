import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  deleteAnimal(buffalo: any){
  return this.http.delete(`xyz/`+ buffalo);
  }
}

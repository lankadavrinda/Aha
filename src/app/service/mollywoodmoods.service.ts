import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Mollywoodmood } from '../models/mollywoodmood';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodsService {
  private baseurl="assets/mollywoodmood.json"
  constructor(private http: HttpClient){}
  onSubmit():Observable<Mollywoodmood[]>{
    return this.http.get<Mollywoodmood[]>(this.baseurl);
  }
}

import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

    constructor(private http: HttpClient, private ProcessHTTPMsgService: ProcessHTTPMsgService) { }

    getLeaders(): Observable<Leader []> {
      return this.http.get<Leader []>(baseURL + 'leaders').pipe(catchError(this.ProcessHTTPMsgService.handleError));
    }

    getFeaturedLeader(): Observable<Leader> {
      return this.http.get<Leader>(baseURL + 'leaders?featured=true').pipe(map(leaders => leaders[0])).pipe(catchError(this.ProcessHTTPMsgService.handleError));
    }

  }

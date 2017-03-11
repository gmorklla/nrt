import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpGetServiceService } from '../http-get-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	api1: string;

  	constructor(private apiService: ApiService, private http: HttpGetServiceService) { }

  	ngOnInit() {
  		this.api1 = this.apiService.getApi().endpoint;
  		this.gettingData();
  	}

  	gettingData() {
  		this.http.getData(this.api1).subscribe(
            result => {
                console.log( result );
            },
            error  => console.error( error ) );
  	}

}

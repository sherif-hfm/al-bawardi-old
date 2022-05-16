import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService} from '../services/auth.service';
import { FuneralService} from '../services/funeral.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  statistics:any={};
  statisticsDisplayStyle = "none";

  constructor(public authService:AuthService,private router: Router,public funeralService: FuneralService) { }

  ngOnInit(): void {
  }

  logout(e:any){
    this.authService.logout().subscribe({
      next:(data:any)=>{
        this.authService.isAuth=false;
       this.router.navigate(['/']);
      },
      error:(err:any)=>{
        console.log('http error');
        console.log(err.error);
      }
    });
  }

  openStatisticsPopup() {

    this.funeralService.getStatistics().subscribe({
      next:(data:any)=>{
       console.log(data);
       this.statistics=data;
       this.statisticsDisplayStyle = "block";
      },
      error:(err:any)=>{
        console.log('http error');
        console.log(err.error);
      }
    });
    
  }
  closeStatisticsPopup() {
    this.statisticsDisplayStyle = "none";
  }

}

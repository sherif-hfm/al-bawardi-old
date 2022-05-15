import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService} from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,private router: Router) { }

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

}

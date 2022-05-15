import { Component, OnInit } from '@angular/core';
import { FuneralService} from '../services/funeral.service';
import { ArabicNumsService} from '../services/arabic-nums.service';
import { UmalquraCalendarService} from '../services/umalqura-calendar.service';

@Component({
  selector: 'funeral-list',
  templateUrl: './funeral-list.component.html',
  styleUrls: ['./funeral-list.component.css']
})
export class FuneralListComponent implements OnInit {
  
  funeralList:any=[];

  constructor(public funeralService: FuneralService,public arabicNums: ArabicNumsService,public umalquraCalendar:UmalquraCalendarService) {
    console.log(umalquraCalendar.gregorianToUmAlQura(new Date()));
   }
  
  ngOnInit(): void {
    //console.log(this.arabicNums.toArabicNum('123')) ;
    this.getTodayFuneral();
  }

  toArabicNum(num:string){
    return this.arabicNums.toArabicNum(num);
  }

  getTodayFuneral(){
    this.funeralService.getTodayFuneral().subscribe({
      next:(data:any)=>{
       console.log(data);
       this.funeralList=data;
      },
      error:(err:any)=>{
        console.log('http error');
        console.log(err.error);
       
      }
    });
  }

}

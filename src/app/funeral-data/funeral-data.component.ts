import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray,FormBuilder,Validators, ValidationErrors  } from '@angular/forms';

import { FuneralService} from '../funeral.service';
import { ArabicNumsService} from '../arabic-nums.service';
import { UmalquraCalendarService} from '../umalqura-calendar.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-funeral-data',
  templateUrl: './funeral-data.component.html',
  styleUrls: ['./funeral-data.component.css']
})
export class FuneralDataComponent implements OnInit {
  mode:string='view'; // view || edit || add
  funeralList:any[]=[];
  funeralFrom = this.fb.group({
    id:new FormControl('',Validators.required),
    deadName:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    prayerId:new FormControl('',Validators.required),
    sex:new FormControl('',Validators.required),
  });
  searchDate:string='';

  constructor(public funeralService: FuneralService,public arabicNums: ArabicNumsService,public umalquraCalendar:UmalquraCalendarService,public authService:AuthService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchDate=this.getCurrentDate();
    this.search();
  }

  toArabicNum(num:string){
    return this.arabicNums.toArabicNum(num);
  }

  getCurrentDate(){
    const crDate=new Date();
    return crDate.getFullYear() + '-' + (crDate.getMonth() + 1)+ '-' +crDate.getDate();
  }

  getFuneralDetails(){
    this.funeralService.getDetails(this.searchDate).subscribe({
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
  getSexDesc(sexId:string){
    switch(sexId){
      case 'M':
        return 'ذكر';
        case 'F':
        return 'انثى';
        case 'B':
        return 'طفل';
        case 'G':
        return 'طفلة';
        default:
          return '';
    }
  }
  getPrayerDesc(prayerId:number){
    switch(prayerId){
      case 1:
        return 'الصبح';
        case 2:
        return 'الظهر';
        case 3:
        return 'العصر';
        case 4:
        return 'المعرب';
        case 5:
        return 'العشاء';
        default:
          return '';
    }
  }

search(){
  this.getFuneralDetails();
}
  add(){
    this.mode='add';
    this.funeralFrom.get('id')?.setValue(0);
    this.funeralFrom.get('date')?.setValue(this.getCurrentDate());
    }

  edit(id:any){
    this.funeralService.getDetail(id).subscribe({
      next:(data:any)=>{
       console.log(data);
       this.funeralFrom.get('id')?.setValue(data.id);
       this.funeralFrom.get('date')?.setValue(data.date);
       this.funeralFrom.get('sex')?.setValue(data.sex);
       this.funeralFrom.get('deadName')?.setValue(data.deadName);
       this.funeralFrom.get('prayerId')?.setValue(data.prayerId);
       this.mode='edit';
      },
      error:(err:any)=>{
        console.log('http error');
        console.log(err.error);
      }
    });
  
  }

  save(){
    console.log('save');
    console.log(this.funeralFrom)
    if(this.funeralFrom.status==='INVALID'){
      return;
    }
    if(this.mode=='add')
      this.saveNew();
    else
      this.saveEdit();
  }

  saveNew(){
      const funeral={
      deadName:this.funeralFrom.get('deadName')?.value,
      date:this.funeralFrom.get('date')?.value,
      sex:this.funeralFrom.get('sex')?.value,
      prayerId:this.funeralFrom.get('prayerId')?.value,
    };
    this.funeralService.addFuneral(funeral).subscribe({
      next:(data:any)=>{
       console.log(data);
       this.mode='view';
       this.search();
      },
      error:(err:any)=>{
        console.log('http error');
        console.log(err.error);
      }
    });
  }

  saveEdit(){
    console.log('saveEdit');
    const funeral={
      id:this.funeralFrom.get('id')?.value,
      deadName:this.funeralFrom.get('deadName')?.value,
      date:this.funeralFrom.get('date')?.value,
      sex:this.funeralFrom.get('sex')?.value,
      prayerId:this.funeralFrom.get('prayerId')?.value,
    };
    console.log(funeral);
    this.funeralService.updateFuneral(funeral).subscribe({
      next:(data:any)=>{
       console.log(data);
       this.mode='view';
       this.search();
      },
      error:(err:any)=>{
        console.log('http error');
        console.log(err.error);
      }
    });
  }

  delete(id:any){
    this.funeralService.deleteFuneral(id).subscribe({
      next:(data:any)=>{
        this.mode='view';
        this.search();
      },
      error:(err:any)=>{
        console.log('http error');
        console.log(err.error);
      }
    });
  }

  exit(){
    this.mode='view';
  }

}

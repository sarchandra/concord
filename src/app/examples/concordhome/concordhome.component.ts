import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { EmailContent } from 'services/emailcontent';


@Component({
  selector: 'app-concordhome',
  templateUrl: './concordhome.component.html',
  styleUrls: ['./concordhome.component.scss']
})
export class ConcordhomeComponent implements OnInit {
  emailcontent = new EmailContent();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }
  ngOnInit() {
  }

  sendmail(form:NgForm){
    if (form.invalid) {  
       
      return;  
   }
    alert("submit");
    form.resetForm();
    
  }
}

import { Component,OnInit, Renderer } from '@angular/core';
import { NgbDateStruct ,NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { EmailContent } from 'services/emailcontent';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {AlertmessageComponent} from '../alertmessage/alertmessage.component';

@Component({
  selector: 'app-concordhome',
  templateUrl: './concordhome.component.html',
  styleUrls: ['./concordhome.component.scss'],
})
export class ConcordhomeComponent implements OnInit {
  emailcontent = new EmailContent();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  showloader = false;
  page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer,private http: HttpClient,private modalService: NgbModal) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

  ngOnInit() {
  }

  AlertMessage(title,msg){
    const modalRef = this.modalService.open(AlertmessageComponent);
    modalRef.componentInstance.title=title;
    modalRef.componentInstance.message=msg;
  }
  sendmail(form:NgForm){
    if (form.invalid) {  
      this.AlertMessage("Contact Us Send Mail","All fields are required");
      return;  
   }
    this.sendMessageToServer()
    form.resetForm();
  }

  sendMessageToServer(){
   
  this.showloader=true;
    
    this.getData().subscribe(
      data => {
        this.AlertMessage("Contact Us Send Mail",data);
       console.log(data);
       this.showloader = false;
   },
   error => {
      //alert(error);
      this.AlertMessage("Contact Us Send Mail",error);
      console.log(error);
      this.showloader=false;
     
   });
  }

  getData():Observable<any>{

    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Headers","*");
    headers.append("Access-Control-Allow-Origin","*");
    headers.append("Access-Control-Allow-Methods","*");

    var HTTPOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/x-www-form-urlencoded'
      }),
      'responseType': 'text'
   }
  let options = { headers: headers};
   
    // return this.http.post<any>('http://charan.concord.co.in/mail.php',
    //  { subject: 'Contact Us from ' + this.emailcontent.name,
    //  email:this.emailcontent.emailid,
    //  message:this.emailcontent.message,
    //  mobile:this.emailcontent.mobile
    // },options)
 
    var fd = new FormData();
   fd.append('subject', this.emailcontent.name);
   fd.append('email', this.emailcontent.emailid);
   fd.append('message', this.emailcontent.message);
   fd.append('mobile', this.emailcontent.mobile);
 
    return this.http.post('http://charan.concord.co.in/mail.php',
    fd,{ responseType: 'text' })
  }
 
} 

import { Component, OnInit ,Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alertmessage',
  templateUrl: './alertmessage.component.html',
  styleUrls: ['./alertmessage.component.scss']
})
export class AlertmessageComponent implements OnInit {
  @Input() message :string;
  @Input() title:string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}

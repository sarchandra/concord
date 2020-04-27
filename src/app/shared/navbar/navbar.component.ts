import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.removeAllMenuSelect();
    }
    ngOnChanges(changes: any) {
        this.removeAllMenuSelect();

    }
    removeAllMenuSelect(){
        var body = document.querySelectorAll('.menu');
       //alert(body);
       body.forEach(e=>{
           e.classList.remove("select");
       })
       // body.classList.add("select");
    }
   
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    selectedMenu(event:any){
        this.removeAllMenuSelect();
        event.target.classList.add("select");
    }
    onClickAboutus(event:any){
        // this.removeAllMenuSelect();
        // event.target.classList.add("select");
        this.selectedMenu(event);
    }
    onClickProduct(event:any){
        this.selectedMenu(event);
    }
    onClickPublication(event:any){
        this.selectedMenu(event);
    }
    onClickVideo(event:any){
        this.selectedMenu(event);
    }
    onClickBrochure(event:any){
        this.selectedMenu(event);
    }
    onfocusproduct(event: any) {
        alert('a');
        event.target.dispatchEvent(new Event('click'));
    }
    isAboutus() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 1 );
        }
          if( titlee === '/aboutus' ) {
              return true;
          }
          else {
              return false;
          }
      }
    isVideo() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 1 );
        }
          if( titlee === '/video' ) {
              return true;
          }
          else {
              return false;
          }
      }
      isPublication() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 1 );
        }
          if( titlee === '/pulication' ) {
              return true;
          }else {
              return false;
          }
      }
      isBrochure() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 1 );
        }
          if( titlee === '/brochure' ) {
              return true;
          } else {
              return false;
          }
      }
    isHome() {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }else {
            return false;
        }
    }
    isDocumentation() {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}

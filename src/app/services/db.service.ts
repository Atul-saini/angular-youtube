import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import * as M from 'materialize-css';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private authService: AuthService) { }
  saveQuote(quote:string){
    firebase.firestore().collection('quotes').add({
      text:this.saveQuote,
      by: this.authService.getUid()
    }).then((data)=>{
      M.toast({html :'quote Added',classes:"green"})
    }).catch((err)=>{
      console.log(err)
      M.toast({html :'Error creating quote',classes:"red"})
    })
  }
}

getAllQuote
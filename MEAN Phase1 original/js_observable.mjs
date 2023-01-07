import { Observable } from 'rxjs'

const observable = new Observable((observer) =>{

    observer.next("Hi Observable");
 
 })
 
 observable.subscribe((data)=>{
    console.log(data);    // output - ‘Hi Observable’
 })
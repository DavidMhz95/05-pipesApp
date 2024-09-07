import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'David'
  public gender : 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female' : 'invitarla'
  }

  changeClient():void{
    if(this.name === 'David'){
      this.name= 'Amal'
      this.gender = 'female'

    }else{
      this.name = 'David'
      this.gender= 'male'
    }
  }


  //i18nPlural

  public clients: string[] = ['Maria','Pedro','David','Lucas','Ana','Natalia','Andrea']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }
  deleteClient(){
    this.clients.shift()
  }

  //KeyValue Pipe

  public person = {
    name: 'David',
    age: 29,
    address: 'Toledo, Spain'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap',value)
    )
  )

  public promiseValue = new Promise<string>((resolve, reject)=> {
    setTimeout(() => {
      resolve('We have promise data')
    }, 3500);
  })

}

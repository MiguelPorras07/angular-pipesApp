import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select

  public name: string = 'Miguel';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    // this.name = 'Melissa';
    // this.gender = 'female';
    if( this.name == 'Miguel' ){
      this.name = 'Camila'
      this.gender = 'female'
    }else{
      this.name = 'Miguel'
      this.gender = 'male'
    }
  }

  //i18n Plural

  public clients: string[] = ['Miguel', 'Jocho', 'Daniel', 'Manja', 'Roger', 'Crucito', 'Diego', 'Camila', 'Lorena', 'Vinilo'];
  public clientsMap = {
    '=0': 'no hay clientes en espera',
    '=1': 'hay un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue pipe

  public person = {
    name: 'Miguel',
    age: 34,
    address: 'Toluca, México'
  }

  //Async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa');
      console.log( 'Tenemos data en la promesa' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}

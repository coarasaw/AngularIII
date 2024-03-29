import { Component, OnDestroy } from '@angular/core';
import { pipe } from 'rxjs';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
  
})
export class RxjsComponent  implements OnDestroy{

  public intervalSubs: Subscription = new Subscription;
  
  constructor() { 
    
    /* this.retornaObservable().pipe(
       retry()
      ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.log('Error:', error),
      () => console.info('Obs Terminado')
    ); */

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    return interval(100)
    .pipe(
      take(10),
      map( valor => valor + 1),
      filter( valor => ( valor % 2 === 0)? true: false)
    );
  }

  retornaObservable(): Observable<number>{
    let i = -1;

    return new Observable<number>( observer => {

      const intervalo = setInterval( () => {
        //console.log('tick');
        i++;
        observer.next(i);

        if ( i === 4) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000)

    });
  }

  ngOnInit(): void {
  }
}

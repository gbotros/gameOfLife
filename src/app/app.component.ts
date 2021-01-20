import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { drawGliderPatternAction, nextDayAction } from './store/actions/grid.actions';
import { RootState } from './store/reducers';

@Component({
  selector: 'gol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inPlayMode = true;
  private readonly _1sec = 1000;
  private playModeSubscription = new Subscription();

  constructor(private store: Store<RootState>) {
    this.drawGlider();
    this.play();
  }

  public play(): void {
    this.inPlayMode = true;
    this.playModeSubscription = timer(this._1sec, this._1sec)
      .subscribe(() => this.next());
  }

  public pause(): void {
    this.inPlayMode = false;
    this.playModeSubscription.unsubscribe();
  }

  public next(): void {
    this.store.dispatch(nextDayAction());
  }

  public drawGlider(): void {
    this.store.dispatch(drawGliderPatternAction());
  }
}

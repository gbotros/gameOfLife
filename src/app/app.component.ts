import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { take, takeWhile, tap } from 'rxjs/operators';
import { Grid } from './models/grid';
import { drawGliderPatternAction, loadAllPatternsAction, nextDayAction, savePatternAction } from './store/actions/grid.actions';
import { RootState } from './store/reducers';
import { getCurrentGrid } from './store/selectors/grid.selectors';

@Component({
  selector: 'gol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inPlayMode = true;
  public patternName = 'Pattern Sample 1';
  public patternNumber = 1;
  private readonly _1sec = 1000;
  private playModeSubscription = new Subscription();

  constructor(private store: Store<RootState>) {
    this.drawGlider();
    this.pause();
    this.loadAll();
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

  public save(): void {
    const name = this.patternName;
    this.store.pipe(select(getCurrentGrid), take(1))
      .subscribe((grid) => {
        this.store.dispatch(savePatternAction({ name, grid }));
        this.patternNumber++;
        this.patternName = 'Pattern Sample ' + this.patternNumber;
      });

  }

  public loadAll(): void {
    this.store.dispatch(loadAllPatternsAction());
  }

}

import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Grid } from '../models/grid';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }

  public save(name: string, grid: Grid): Observable<void> {
    localStorage.setItem(name, JSON.stringify(grid));
    return of(void 0);
  }

  public loadAll(): Observable<{ [id: string]: Grid }> {
    const ls = { ...localStorage };
    // console.log(ls);

    const gridsDictionary: { [id: string]: Grid } = {};
    for (const [key, value] of Object.entries(localStorage)) {

      const gridAsJson = value;
      console.log(typeof (gridsDictionary[key]));

      const grid = Object.assign(new Grid(0, 0), gridAsJson);

      gridsDictionary[key].next();
      gridsDictionary[key] = grid;
    }

    return of(gridsDictionary);
  }




}

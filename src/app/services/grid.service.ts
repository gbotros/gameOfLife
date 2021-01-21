import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Grid } from '../models/grid';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private readonly prefix = 'GameOfLife_';

  public save(name: string, grid: Grid): Observable<void> {
    localStorage.setItem(this.prefix + name, JSON.stringify(grid));
    return of(void 0);
  }

  public loadAll(): Observable<{ allGrids: { [id: string]: Grid } }> {
    const gridsDictionary: { [id: string]: Grid } = {};
    for (const [key, value] of Object.entries(localStorage)) {

      if (!key.startsWith(this.prefix)) {
        continue;
      }

      const deserializedGrid = JSON.parse(value);
      const copy = this.createGrid(deserializedGrid.rowsCount, deserializedGrid.colsCount, deserializedGrid.cells);

      const userKey = key.substring(this.prefix.length);
      gridsDictionary[userKey] = copy;
    }

    return of({ allGrids: gridsDictionary });
  }

  public remove(name: string): Observable<void> {
    localStorage.removeItem(this.prefix + name);
    return of(void 0);
  }

  private createGrid(rowsCount: number, colsCount: number, cells: { _row: number, _col: number, _isAlive: boolean }[][]): Grid {
    const copyGrid = new Grid(rowsCount, colsCount);

    for (let r = 0; r < rowsCount; r++) {
      for (let c = 0; c < colsCount; c++) {
        copyGrid.cells[r][c].update(cells[r][c]._isAlive);
      }
    }

    return copyGrid;
  }

}

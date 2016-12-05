import {useView, customElement, bindable} from 'aurelia-framework';

@customElement('grid')
@useView('./grid.html')
export class Grid {
  constructor(private element: Element) {}
}

@useView('./gridRow.html')
@customElement('grid-row')
export class GridRow {}

@useView('./gridHeader.html')
@customElement('grid-header')
export class GridHeader {
  @bindable sortable = false;
  @bindable sortingDir = 'asc';
  @bindable sortingActive = false;
  @bindable filterable = false;
}

@useView('./gridCol.html')
@customElement('grid-col')
export class GridCol {}

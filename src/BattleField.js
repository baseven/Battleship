import Snap from 'snapsvg';

const surfaceWidth = 500;
const surfaceHeight = 500;

const cellsCount = 10;
const cellWidth = surfaceWidth / cellsCount;
const cellHeight = surfaceHeight / cellsCount;

export default class BattleFiled {
  constructor(element) {
    this.element = element;
    this.field = element.querySelector('.field');
    this.ships = element.querySelector('.ships');
  }

  init() {
    const field = Snap(this.field);
    // const ships = Snap(this.ships);

    for (let i = 0; i < cellsCount; i += 1) {
      for (let j = 0; j < cellsCount; j += 1) {
        const rect = field.rect(cellWidth * i, cellHeight * j, cellWidth, cellHeight);
        rect.attr({
          fill: '#ffff',
          stroke: '#000',
          strokeWidth: 3,
        });
      }
    }
  }
}

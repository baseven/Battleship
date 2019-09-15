const FIELD_SIZE = 500;
const CELL_COUNT = 10;
const CELL_SIZE = FIELD_SIZE / CELL_COUNT;

const GRID_PADDING = 50;
const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];


export default class BattleFiled {
  constructor(element) {
    this.element = element;
    this.ctx = element.getContext('2d');
  }

  init() {
    this.ctx.strokeRect(GRID_PADDING, GRID_PADDING, FIELD_SIZE, FIELD_SIZE);

    this.ctx.font = '30px Arial';
    this.ctx.beginPath();
    for (let i = 0; i < CELL_COUNT; i += 1) {
      // Vertical
      // line
      this.ctx.moveTo(GRID_PADDING + i * CELL_SIZE, GRID_PADDING);
      this.ctx.lineTo(GRID_PADDING + i * CELL_SIZE, GRID_PADDING + FIELD_SIZE);
      this.ctx.stroke();
      // symbols
      this.ctx.fillText(ALPHABET[i], GRID_PADDING + i * CELL_SIZE + 20, GRID_PADDING - 20);

      // Horizontal
      this.ctx.moveTo(GRID_PADDING, GRID_PADDING + i * CELL_SIZE);
      this.ctx.lineTo(GRID_PADDING + FIELD_SIZE, GRID_PADDING + i * CELL_SIZE);
      this.ctx.stroke();
      // digits
      this.ctx.fillText(i + 1, GRID_PADDING - 40, GRID_PADDING + i * CELL_SIZE + 20);
    }
  }
}

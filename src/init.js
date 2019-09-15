import BattleField from './BattleField';

export default () => {
  const element = document.getElementById('battlefield');
  const field = new BattleField(element);
  field.init();
};

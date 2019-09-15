import BattleField from './BattleField';

export default () => {
  const firstSectionElement = document.getElementById('firstSection');
  const firstSection = new BattleField(firstSectionElement);
  firstSection.init();

  // const secondSectionElement = document.getElementById('secondSection');
  // const secondSection = new BattleField(secondSectionElement);
  // secondSection.init();
};

function UnitStats(options) {
  this.level = (options["level"] ? options["level"] : 1);
  this.experience = (options["experience"] ? options["experience"] : 0);
  this.hp = (options["hp"] ? options["hp"] : 20);
  this.strength = (options["strength"] ? options["strength"] : 5);
  this.skill = (options["skill"] ? options["skill"] : 5);
  this.speed = (options["speed"] ? options["speed"] : 5);
  this.luck = (options["luck"] ? options["luck"] : 5);
  this.defense = (options["defense"] ? options["defense"] : 5);
  this.resistance = (options["resistance"] ? options["resistance"] : 5);
  this.move = (options["move"] ? options["move"] : 5);
  this.constitution = (options["constitution"] ? options["constitution"] : 7);
  this.hp_growth_rate = (options["hp_growth_rate"] ? options["hp_growth_rate"] : 30);
  this.strength_growth_rate = (options["strength_growth_rate"] ? options["strength_growth_rate"] : 30);
  this.skill_growth_rate = (options["skill_growth_rate"] ? options["skill_growth_rate"] : 30);
  this.speed_growth_rate = (options["speed_growth_rate"] ? options["speed_growth_rate"] : 30);
  this.luck_growth_rate = (options["luck_growth_rate"] ? options["luck_growth_rate"] : 30);
  this.defense_growth_rate = (options["defense_growth_rate"] ? options["defense_growth_rate"] : 30);
  this.resistance_growth_rate = (options["resistance_growth_rate"] ? options["resistance_growth_rate"] : 30);
  this.affinity = (options["affinity"] ? options["affinity"] : 'wind');
}

export default UnitStats;

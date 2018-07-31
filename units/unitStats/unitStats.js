function UnitStats(options) {
  this.level = options["level"];
  this.experience = options["experience"];
  this.hp = options["hp"];
  this.strength = options["strength"];
  this.skill = options["skill"];
  this.speed = options["speed"];
  this.luck = options["luck"];
  this.defense = options["defense"];
  this.resistance = options["resistance"];
  this.move = options["move"];
  this.constitution = options["constitution"];
  this.hp_growth_rate = options["hp_growth_rate"];
  this.strength_growth_rate = options["strength_growth_rate"];
  this.skill_growth_rate = options["skill_growth_rate"];
  this.speed_growth_rate = options["speed_growth_rate"];
  this.luck_growth_rate = options["luck_growth_rate"];
  this.defense_growth_rate = options["defense_growth_rate"];
  this.resistance_growth_rate = options["resistance_growth_rate"];
  this.affinity = options["affinity"];
}

export default UnitStats;

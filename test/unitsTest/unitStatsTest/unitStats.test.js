import UnitStats from '../../../units/unitStats/unitStats';

describe('UnitStats', () => {
  it('sets all stat attributes', () => {
    const unitStats = new UnitStats({
      level: 1,
      experience: 0,
      hp: 42,
      strength: 16,
      skill: 19,
      speed: 22,
      luck: 17,
      defense: 14,
      resistance: 7,
      move: 6,
      constitution: 8,
      hp_growth_rate: 80,
      strength_growth_rate: 40,
      skill_growth_rate: 50,
      speed_growth_rate: 40,
      luck_growth_rate: 60,
      defense_growth_rate: 25,
      resistance_growth_rate: 30,
      affinity: "wind"
    });

    expect(unitStats.level).toBe(1);
    expect(unitStats.experience).toBe(0);
    expect(unitStats.hp).toBe(42);
    expect(unitStats.strength).toBe(16);
    expect(unitStats.skill).toBe(19);
    expect(unitStats.speed).toBe(22);
    expect(unitStats.luck).toBe(17);
    expect(unitStats.defense).toBe(14);
    expect(unitStats.resistance).toBe(7);
    expect(unitStats.move).toBe(6);
    expect(unitStats.constitution).toBe(8);
    expect(unitStats.hp_growth_rate).toBe(80);
    expect(unitStats.strength_growth_rate).toBe(40);
    expect(unitStats.skill_growth_rate).toBe(50);
    expect(unitStats.speed_growth_rate).toBe(40);
    expect(unitStats.luck_growth_rate).toBe(60);
    expect(unitStats.defense_growth_rate).toBe(25);
    expect(unitStats.resistance_growth_rate).toBe(30);
    expect(unitStats.affinity).toBe('wind');
  });

  it('sets default values', () => {
    const unitStats = new UnitStats({});

    expect(unitStats.level).toBe(1);
    expect(unitStats.experience).toBe(0);
    expect(unitStats.hp).toBe(20);
    expect(unitStats.strength).toBe(5);
    expect(unitStats.skill).toBe(5);
    expect(unitStats.speed).toBe(5);
    expect(unitStats.luck).toBe(5);
    expect(unitStats.defense).toBe(5);
    expect(unitStats.resistance).toBe(5);
    expect(unitStats.move).toBe(5);
    expect(unitStats.constitution).toBe(7);
    expect(unitStats.hp_growth_rate).toBe(30);
    expect(unitStats.strength_growth_rate).toBe(30);
    expect(unitStats.skill_growth_rate).toBe(30);
    expect(unitStats.speed_growth_rate).toBe(30);
    expect(unitStats.luck_growth_rate).toBe(30);
    expect(unitStats.defense_growth_rate).toBe(30);
    expect(unitStats.resistance_growth_rate).toBe(30);
    expect(unitStats.affinity).toBe('wind');
  });
});

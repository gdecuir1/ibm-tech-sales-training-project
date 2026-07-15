import { describe, it, expect } from 'vitest';
import {
  formatDate,
  formatDuration,
  getScoreColor,
  getDifficultyColor,
  getMasteryColor,
  getMasteryLabel,
  getCalendarHeatColor,
  groupByWeek
} from '../../utils/helpers';

describe('Helper Functions', () => {
  describe('formatDate', () => {
    it('should format date string correctly', () => {
      const result = formatDate('2024-01-15');
      expect(result).toMatch(/Jan|1/);
    });

    it('should handle invalid dates gracefully', () => {
      const result = formatDate('invalid');
      expect(result).toBeDefined();
    });

    it('should handle null/undefined', () => {
      expect(() => formatDate(null)).not.toThrow();
      expect(() => formatDate(undefined)).not.toThrow();
    });
  });

  describe('formatDuration', () => {
    it('should format seconds correctly', () => {
      expect(formatDuration(45)).toBe('45s');
    });

    it('should format minutes and seconds', () => {
      expect(formatDuration(125)).toBe('2m 5s');
    });

    it('should handle zero', () => {
      expect(formatDuration(0)).toBe('0s');
    });

    it('should handle large numbers', () => {
      const result = formatDuration(3665);
      expect(result).toContain('m');
    });
  });

  describe('getScoreColor', () => {
    it('should return green for excellent scores (90+)', () => {
      expect(getScoreColor(95)).toContain('green');
      expect(getScoreColor(90)).toContain('green');
    });

    it('should return blue for good scores (70-89)', () => {
      expect(getScoreColor(85)).toContain('blue');
      expect(getScoreColor(70)).toContain('blue');
    });

    it('should return yellow for satisfactory scores (50-69)', () => {
      expect(getScoreColor(60)).toContain('yellow');
      expect(getScoreColor(50)).toContain('yellow');
    });

    it('should return red for poor scores (<50)', () => {
      expect(getScoreColor(40)).toContain('red');
      expect(getScoreColor(0)).toContain('red');
    });

    it('should handle edge cases', () => {
      expect(getScoreColor(100)).toBeDefined();
      expect(getScoreColor(-1)).toBeDefined();
    });
  });

  describe('getDifficultyColor', () => {
    it('should return correct color for Beginner', () => {
      const result = getDifficultyColor('Beginner');
      expect(result).toContain('green');
    });

    it('should return correct color for Intermediate', () => {
      const result = getDifficultyColor('Intermediate');
      expect(result).toContain('blue');
    });

    it('should return correct color for Advanced', () => {
      const result = getDifficultyColor('Advanced');
      expect(result).toContain('yellow');
    });

    it('should return correct color for Expert', () => {
      const result = getDifficultyColor('Expert');
      expect(result).toContain('red');
    });

    it('should handle unknown difficulty', () => {
      const result = getDifficultyColor('Unknown');
      expect(result).toBeDefined();
    });
  });

  describe('getMasteryColor', () => {
    it('should return green for expert level (80+)', () => {
      expect(getMasteryColor(90)).toContain('green');
      expect(getMasteryColor(80)).toContain('green');
    });

    it('should return blue for advanced level (60-79)', () => {
      expect(getMasteryColor(70)).toContain('blue');
      expect(getMasteryColor(60)).toContain('blue');
    });

    it('should return yellow for intermediate level (40-59)', () => {
      expect(getMasteryColor(50)).toContain('yellow');
      expect(getMasteryColor(40)).toContain('yellow');
    });

    it('should return red for beginner level (<40)', () => {
      expect(getMasteryColor(30)).toContain('red');
      expect(getMasteryColor(0)).toContain('red');
    });
  });

  describe('getMasteryLabel', () => {
    it('should return Expert for 80+', () => {
      expect(getMasteryLabel(90)).toBe('Expert');
      expect(getMasteryLabel(80)).toBe('Expert');
    });

    it('should return Advanced for 60-79', () => {
      expect(getMasteryLabel(70)).toBe('Advanced');
      expect(getMasteryLabel(60)).toBe('Advanced');
    });

    it('should return Intermediate for 40-59', () => {
      expect(getMasteryLabel(50)).toBe('Intermediate');
      expect(getMasteryLabel(40)).toBe('Intermediate');
    });

    it('should return Beginner for <40', () => {
      expect(getMasteryLabel(30)).toBe('Beginner');
      expect(getMasteryLabel(0)).toBe('Beginner');
    });
  });

  describe('getCalendarHeatColor', () => {
    it('should return correct color for each level', () => {
      expect(getCalendarHeatColor(0)).toContain('gray');
      expect(getCalendarHeatColor(1)).toBeDefined();
      expect(getCalendarHeatColor(2)).toBeDefined();
      expect(getCalendarHeatColor(3)).toBeDefined();
      expect(getCalendarHeatColor(4)).toContain('green');
    });

    it('should handle out of range values', () => {
      expect(getCalendarHeatColor(-1)).toBeDefined();
      expect(getCalendarHeatColor(10)).toBeDefined();
    });
  });

  describe('groupByWeek', () => {
    it('should group calendar data by weeks', () => {
      const mockData = [
        { date: '2024-01-01', scenarios: 2 },
        { date: '2024-01-02', scenarios: 1 },
        { date: '2024-01-08', scenarios: 3 }
      ];
      const result = groupByWeek(mockData);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should handle empty array', () => {
      const result = groupByWeek([]);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should create weeks of 7 days', () => {
      const mockData = Array.from({ length: 14 }, (_, i) => ({
        date: `2024-01-${String(i + 1).padStart(2, '0')}`,
        scenarios: 1
      }));
      const result = groupByWeek(mockData);
      result.forEach(week => {
        expect(week.length).toBeLessThanOrEqual(7);
      });
    });
  });
});

// Made with Bob

import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
  test('should add two positives numbers', () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });

  test('should add two negative numbers', () => {
    // ! 1. Arrange
    const a = -2;
    const b = -4;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract',()=>{
  test('should subtract two numbers ', () => {
    // ! 1. Arrange
    const a = 12;
    const b = 4;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
  test('should subtract two negative numbers ', () => {
    // ! 1. Arrange
    const a = -12;
    const b = -4;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
  test('should result a negative number ', () => {
    // ! 1. Arrange
    const a = 4;
    const b = 12;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });


})
describe('multiply',()=>{
  test('should multiply two numbers ', () => {
    // ! 1. Arrange
    const a = 12;
    const b = 4;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
  test('should multiply with one negative number ', () => {
    // ! 1. Arrange
    const a = 12;
    const b = -4;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
  test('should multiply with two negative number ', () => {
    // ! 1. Arrange
    const a = -12;
    const b = -4;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
  test('should multiply with zero ', () => {
    // ! 1. Arrange
    const a = 12;
    const b = 0;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });


})
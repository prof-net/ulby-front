import { describe, expect, test } from '@jest/globals'
import { classNames } from './classNames'

describe('classnames', () => {
  test('1 параметр', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('с доп. параметрами', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expected)
  })

  test('с модами', () => {
    const expected = 'someClass class1 class2 hovered scrollable'
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2']))
      .toBe(expected)
  })

  test('когда 1 мод false', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2']))
      .toBe(expected)
  })
})

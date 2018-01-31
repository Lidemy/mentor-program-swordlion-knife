import {capitalize} from './hw2'

describe("hw2", () => {
  it("should return correct answer when str = nick", () => {
    expect(capitalize('nick')).toBe('Nick')
   })
  it("should return correct answer when str = zoy", () => {
    expect(capitalize('zoy')).toBe('Zoy')
   })
  it("should return correct answer when str = ,peter", () => {
    expect(capitalize(',peter')).toBe(',peter')
   })
  it("should return correct answer when str = Abc", () => {
    expect(capitalize('Abc')).toBe('Abc')
   })
})
import {isPalindromes} from './hw4'

describe("hw4", () => {
  it("should return correct answer when str = abcdcba", () => {
    expect(isPalindromes('abcdcba')).toBe(true)
  })
  it("should return correct answer when str = baab", () => {
    expect(isPalindromes('baab')).toBe(true)
  })
  it("should return correct answer when str = adasdfa", () => {
    expect(isPalindromes('adasdfa')).toBe(false)
  })
})
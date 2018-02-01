import {isPrime} from './hw3'

describe("hw3", () => {
  it("should return correct answer when n = 1", () => {
    expect(isPrime(1)).toBe(false)
  })
  it("should return correct answer when n = 17", () => {
    expect(isPrime(17)).toBe(true)
  })
  it("should return correct answer when n = 13", () => {
    expect(isPrime(13)).toBe(true)
  })
  it("should return correct answer when n = 2", () => {
    expect(isPrime(2)).toBe(true)
  })
})
const expect = require('chai').expect
const PrimeFactors = require('./../src/prime-factors')

describe('PrimeFactors', () => {
    
    describe('constructor', () => {
        it('Should receive a number, and initialize a property on class for that number', () => {
            let primeFactors = new PrimeFactors(24)

            expect(primeFactors.number).to.not.be.undefined
            expect(primeFactors.number).to.equal(24)
        })
    })

    describe('isAPrimeNumber', () => {
        it('Should return true if the number is a prime number', () => {
            let primeFactors = new PrimeFactors(34)
            
            expect(primeFactors.isAPrimeNumber(2)).to.be.true 
            expect(primeFactors.isAPrimeNumber(3)).to.be.true 
            expect(primeFactors.isAPrimeNumber(5)).to.be.true 
            expect(primeFactors.isAPrimeNumber(17)).to.be.true
        })

        it('Should return false if the number is not a prime number', () => {
            let primeFactors = new PrimeFactors(34) 

            expect(primeFactors.isAPrimeNumber(4)).to.be.false 
            expect(primeFactors.isAPrimeNumber(6)).to.be.false 
            expect(primeFactors.isAPrimeNumber(8)).to.be.false 
            expect(primeFactors.isAPrimeNumber(100)).to.be.false 
        })
    })

    describe('findFactors', () => {
        it('Should return an array of all the factors of number', () => {
            let primeFactors = new PrimeFactors(51)
            let primeFactors2 = new PrimeFactors(10)
            let primeFactors3 = new PrimeFactors(12)
            let primeFactors4 = new PrimeFactors(2)

            expect(primeFactors4.findFactors()).to.have.members([1,2])
            expect(primeFactors2.findFactors()).to.have.members([1,2,5,10])
            expect(primeFactors3.findFactors()).to.have.members([1,2,3,4,6,12])            
            expect(primeFactors.findFactors()).to.have.members([1,3,17,51])
        })
    })

    describe('findPrimeFactors', () => {
        it('Should return all the prime factors of a number', () => {
            let primeFactors = new PrimeFactors(24)
            let primeFactors2 = new PrimeFactors(240)
            let primeFactors3 = new PrimeFactors(123)

            expect(primeFactors3.findPrimeFactors()).to.have.members([3,41])
            expect(primeFactors.findPrimeFactors()).to.have.members([2,3])
            expect(primeFactors2.findPrimeFactors()).to.have.members([2,3,5])            
        })
    })

})
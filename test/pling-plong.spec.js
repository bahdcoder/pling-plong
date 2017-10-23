const expect = require('chai').expect
const PlingPlong = require('./../src/pling-plong')
const PrimeFactor = require('./../src/prime-factors')

describe('PlingPlong', () => {
    describe('constructor', () => {
        it('Should initialize a message property to an empty string', () => {
            let plingplong = new PlingPlong(40) 

            expect(plingplong.message).to.not.be.undefined
            expect(plingplong.message).to.equal('')
        })

        it('Should set a primeFactor property (instance of PrimeFactor)', () => {
            let plingplong = new PlingPlong(40) 
            
            expect(plingplong.primeFactor).to.not.be.undefined
            expect(plingplong.primeFactor).to.be.an.instanceof(PrimeFactor)
        })
    })

    describe('evaluate', () => {
        it("Should return 'Pling' for numbers whose prime factors contain 3", () => {
            let plingplong = new PlingPlong(6)
            let plingplong2 = new PlingPlong(3)
            let plingplong3 = new PlingPlong(9)
            
            expect(plingplong.evaluate()).to.equal("Pling")
            expect(plingplong2.evaluate()).to.equal("Pling")
            expect(plingplong3.evaluate()).to.equal("Pling")
        })

        it("Should return 'Plang' for number whose prime factors contains 5", () => {
            let plingplong = new PlingPlong(25)
            let plingplong2 = new PlingPlong(50)
            let plingplong3 = new PlingPlong(20)
            let plingplong4 = new PlingPlong(40)            

            expect(plingplong.evaluate()).to.equal("Plang")
            expect(plingplong2.evaluate()).to.equal("Plang")
            expect(plingplong3.evaluate()).to.equal("Plang")
            expect(plingplong4.evaluate()).to.equal("Plang")
        })

        it("Should return 'Plong' for number whose prime factors contains 7", () => {
            let plingplong = new PlingPlong(28)
            let plingplong2 = new PlingPlong(77)
            let plingplong3 = new PlingPlong(7)

            
            expect(plingplong.evaluate()).to.equal("Plong")
            expect(plingplong2.evaluate()).to.equal("Plong")
            expect(plingplong3.evaluate()).to.equal("Plong")
        })

        it("Should return 'PlingPlang' for number whose prime factors contains 3 and 5", () => {
            let plingplong = new PlingPlong(15)
            let plingplong2 = new PlingPlong(1755)
            let plingplong3 = new PlingPlong(75)
            let plingplong4 = new PlingPlong(225)
            let plingplong5 = new PlingPlong(1125)
            


            expect(plingplong.evaluate()).to.equal("PlingPlang")
            expect(plingplong2.evaluate()).to.equal("PlingPlang")
            expect(plingplong3.evaluate()).to.equal("PlingPlang")
            expect(plingplong4.evaluate()).to.equal("PlingPlang")
            expect(plingplong5.evaluate()).to.equal("PlingPlang")
        })

        it("Should return 'PlingPlangPlong' for numbers whose prime factors contains 3, 5, and 7", () => {
            let plingplong = new PlingPlong(105)
            let plingplong2 = new PlingPlong(735)
            let plingplong3 = new PlingPlong(2205)
            let plingplong4 = new PlingPlong(1620675)

            expect(plingplong.evaluate()).to.equal("PlingPlangPlong")
            expect(plingplong2.evaluate()).to.equal("PlingPlangPlong")
            expect(plingplong3.evaluate()).to.equal("PlingPlangPlong")         
            expect(plingplong4.evaluate()).to.equal("PlingPlangPlong")            
        })

        it("Should return 'number' for number whose prime factors contains neither 3, 5, nor 7", () => {
            let plingplong = new PlingPlong(34)
            let plingplong2 = new PlingPlong(2938484)
            let plingplong3 = new PlingPlong(00000000)


            expect(plingplong3.evaluate()).to.equal("0")            
            expect(plingplong.evaluate()).to.equal("34")
            expect(plingplong2.evaluate()).to.equal("2938484")            
        })
    })
})
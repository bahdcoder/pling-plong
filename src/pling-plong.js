const PrimeFactor = require('./prime-factors')

class PlingPlong {
    constructor(number) {
        this.message = ''

        if(!Number.isInteger(number)) {
            throw new Error(`${number} must be a number.`)
        }

        this.primeFactor = new PrimeFactor(number) 
    }

    evaluate() {
        let primeFactors = this.primeFactor.findPrimeFactors() 

        if(primeFactors.indexOf(3) === -1 && primeFactors.indexOf(5) === -1 && primeFactors.indexOf(7) === -1) {
            this.message += this.primeFactor.number

            return this.message 
        }

        if(primeFactors.indexOf(3) !== -1 ) {
            this.message += 'Pling'
        } if(primeFactors.indexOf(5) !== -1) {
            this.message += 'Plang'
        } if(primeFactors.indexOf(7) !== -1) {
            this.message += 'Plong'
        }

        return this.message 
     }
}

module.exports = PlingPlong 
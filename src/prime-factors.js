class PrimeFactors {

    constructor(number) {
        if(!Number.isInteger(number)) {
            throw new Error(`${number} must be a number.`)
        }

        this.number = number         
    }

    findPrimeFactors() {
         return this.findFactors().filter((number) => {
             return this.isAPrimeNumber(number)
         })
    }

    findFactors(number = this.number) {
         let factors = []

         for(let num = 1; num <= number / 2; num++) {
            if(Number.isInteger(number / num)) {
                factors.push(num)
            }
         }

         factors.push(number)

         return factors 
    }
    
    isAPrimeNumber(number) {
        return this.findFactors(number).length == 2 ? true : false 
    }
}

module.exports = PrimeFactors
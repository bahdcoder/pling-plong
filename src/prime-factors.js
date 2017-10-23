class PrimeFactors {

    /**
     * Initializes class properties
     */
    constructor(number) {
        if(!Number.isInteger(number)) {
            throw new Error(`${number} must be a number.`)
        }

        this.number = number         
    }

    findPrimeFactors() {
        /**
         * okay, we have a number, we need to find its prime factors.
         * Get all the factors, and simply filter out the ones that are not prime numbers 
         */

         return this.findFactors().filter((number) => {
             return this.isAPrimeNumber(number)
         })
    }

    findFactors(number = this.number) {
        /**
         * The factors are numbers that divide with no remainders
         * we can divide the number by all of the numbers less than or equal to it,
         * then we push those that divided without any remainders into a factors array . 
         * Jeez  - maybe there's a better way ? :grinning:
         */

         let factors = []

         for(let num = 1; num <= number / 2; num++) {
             let resultOfDivision = number / num 
            if(Number.isInteger(resultOfDivision)) {
                factors.push(num)
            }
         }

         factors.push(number)

         return factors 
    }
    
    isAPrimeNumber(number) {
        /**
         * Okay, so we have a number, and we wanna know if its a prime number or not. 
         * we can simply get its factors, using findFactors, and check if the number of factors is 2 
         */

         let factors = this.findFactors(number)

         if(factors.length == 2) {
             return true 
         } else {
             return false 
         }
    }
}

module.exports = PrimeFactors
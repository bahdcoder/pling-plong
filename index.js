const PlingPlong = require("./src/pling-plong")

/**
 * Initialize number to plingPlong String converter
 */
let plingPlong = new PlingPlong(28)


/**
 * Output the results
 */
console.log(plingPlong.evaluate())
const regression = require( 'regression' )

/**
 *  Interpolates an array of temperatures and determines if temperatures are, in
 *  average, increasing or decreasing
 *
 * @param temperatures Array of temperatures and dates [[date, temperature], [date, temperature]]
 * @returns true if temperature is increasing in average, false instead
 */
function isTemeperatureIncreasing( temperatures ) {
  const result = regression( 'linear', temperatures )
  const gradient = result.equation[ 0 ]
  return gradient > 0;
}

module.exports = {
  isTemeperatureIncreasing: isTemeperatureIncreasing
}

const weatherAnalyzer = require( './weatherAnalyzer' )
const expect = require( 'chai' ).expect

describe( 'Weather Analyzer Test', function() {

  it( 'Should return true if temperatures are increasing', () => {
    const result = weatherAnalyzer.isTemeperatureIncreasing( [
      [ 1457730000, 17 ],
      [ 1457740800, 23 ],
      [ 1457751600, 22 ],
      [ 1457762400, 25 ]
    ] )
    expect( result ).to.be.true
  } )

  it( 'Should return false if temperatures are decreasing', () => {
    const result = weatherAnalyzer.isTemeperatureIncreasing( [
      [ 1457730000, 17 ],
      [ 1457740800, 19 ],
      [ 1457751600, 15 ],
      [ 1457762400, 12 ]
    ] )
    expect( result ).to.be.false
  } )
} )


// make JavaScript sing the most irritating kids song ever, 100 bottles of beer on the wall.
function oneHundredBottles() {
  for(let i = 100; i >= 1; i--) {
    console.log(`${i} bottles of beer on the wall ${i} bottles of beer,
                if one of thos bottles should happen to fall ${i-1} bottles of beer on the wall`)
  }
}

oneHundredBottles();
let attacks = [
  {
    name: 'slap',
    damage: 1
  },
  {
    name: 'punch',
    damage: 5
  },
  {
    name: 'kick',
    damage: 10
  }
]


var health = 100
var targetName = "Zilla"
var hits = 0
drawName()


function drawStats() {
  document.getElementById('health').innerHTML = ` ${health}%`
  document.getElementById('targetName').innerHTML = ` ${targetName}`
  document.getElementById('hits').innerHTML = ` ${hits}`
}
function drawName() {
  document.getElementById('targetName').innerHTML = ` ${targetName}`
}


function fight(attack) {
  let currentAttack = attacks.find(a => a.name == attack)
  health -= currentAttack.damage
  hits++
  drawStats()

  console.log(currentAttack);
}

// function drawHits() {
//   document.getElementById('hits').innerHTML = ` ${hits}`
// }
// function slap() {
//   health--
//   hits++
//   console.log(health)
//   drawHits()
//   drawHealth()
// }
// function punch() {
//   health -= 5
//   hits++
//   console.log(health)
//   drawHits()
//   drawHealth()
// }
// function kick() {
//   health -= 10
//   hits++
//   console.log(health)
//   drawHits()
//   drawHealth()
// }

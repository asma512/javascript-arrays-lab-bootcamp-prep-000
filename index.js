const app = "I don't do much."
var kittens= ["Milo", "Otis", "Garfield"]
//directly add a kitten at the END of the array
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
//add a kitten at the BEGN. of the array
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens

}
//removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}

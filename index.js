
let line = []
function takeANumber(queue){
  let counter = 0
  counter ++
  queue.push(counter)
  return `Welcome. You are number ${counter}.`
}

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(line)

function currentLine(queue){
 var pos = []
 if(!queue.length){
   return "The line is currently empty."
 }

 for (let counter = 0; counter < queue.length; counter++){
   pos.push(`${counter + 1}. ${queue[counter]}`)
 }

  return `The line is currently: ${pos.join(', ')}`
}

function nowServing(queue){

  if(!queue.length){
    return "There is nobody waiting to be served!"
  }

  var name  = queue[0]
  queue.splice(0,1)
  return `Currently serving ${name}.`
}

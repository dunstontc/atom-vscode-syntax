module.exports =

date = if friday then sue else jill

grade = (student, period=(if b? then 7 else 6)) ->
  if student.excellentWork
    "A+"
  else if student.okayStuff
    if student.triedHard then "B" else "B-"
  else
    "C"

# classes & inheritence
class Hello extends World
  constructor: (name) ->
    @label = "Hello #{name}!"

  log: ->
    console.log(@label)

# existential operator
solipsism = true if mind? and not world?
speed = 0
speed ?= 15
footprints = yeti ? "bear"

# IIFEs
alert(
  try
    nonexistent / undefined
  catch error
    "And the error is ... #{error}"
)


# iterate over a generator function
fibonacci = ->
  [previous, current] = [1, 1]
  loop
    [previous, current] = [current, previous + current]
    yield current
  return

getFibonacciNumbers = (length) ->
  results = [1]
  for n from fibonacci()
    results.push n
    break if results.length is length
  results


# switch statements
switch day
  when "Mon" then go work
  when "Tue" then go relax
  when "Thu" then go iceFishing
  when "Fri", "Sat"
    if day is bingoDay
      go bingo
      go dancing
  when "Sun" then go church
  else go work

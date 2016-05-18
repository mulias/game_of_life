### Conway's Game of Life
### AND
### A Demo on Simultaneous vs Sequential Update Order (aka the delta time problem)

This is my gamedev independent project. I was supposed to do multiple small
projects, but hopefully one larger one will suffice.

The inspiration for this project came from a discussion with Professor Wolz
about the infection spreading model in Epidemic, where she commented that the
specific people who become sick at a location could depend on the order in which
they are evaluated. Prof Wolz referred to this issue as the "delta time problem"
but as I'm unable to find reference to the concept online, I'm refering to it
as "simultaneous vs sequential update order."

This unity project contains two scenes. The first, `GameOfLife` is an
implementation of Conway's Game of Life on a 30x30 grid. (The game board 
actually wraps on all 4 edges, so it's a torus!) The second, `DeltaTimeDemo`
has two game boards, one which properly implements GoL with simultaneous
updating, and another which uses sequential updating, with messy results.

# Simultaneous vs Sequential Updating

Here's the idea behind simultaneous updating: We have a bunch of objects, which
all need to update their state based off the state of other objects. We want to
update all the objects, but have the final result be independent of the order
in which the updates happen. For example, in my group's project Epidemic, people
become sick when they are in proximity to sick people, and recover when they are
around healthy people. If we evaluate each person one by one, we can get very 
different results depending on the order of evaluation.

Lets say we have a sick person and two healthy people.  
A(sick)       B(healthy)     C(healthy)  
We update A first. A is surrounded by healthy people, so A gets better.  
A(healthy)    B(healthy)     C(healthy)  
B and C then stay healthy. So if we update in the order A -> B -> C, everyone 
gets better.

Now we try a different order.  
A(sick)    B(healthy)     C(healthy)  
We update B first. B is next to a sick person, so B gets sick.  
A(sick)    B(sick)        C(healthy)  
We update C first. C is surrounded by sick people, so C gets sick.  
A(sick)    B(sick)        C(sick)  
If we update in the order B -> C -> A, everyone gets sick.  

This kind of evaluation uses sequential update. We can instead get consistent 
results using simultaneous updating. Instead of reading and updating at the same
time, we check each object, and save the update result to a separate location.
After we have checked every object, we copy in the new results, so that all the
objects are changed simultaniusly.

In the case of the game of life, we use one game board to keep track of the
current state of each cell, and a second game board to save the next state of
each cell. After we check each cell, we copy in the new values to the current
board.

# Testing it Out

In `DeltaTimeDemo`, the sequential GoL implementation runs through all of the
(i,j) board indices in order. As a result, shapes will do different things based
on their rotation. This is not the case in `GameOfLife`, where a shape rotated
different amounts will still do the same thing. Try this out by making some
gliders, a classic GoL configuration:

```
 *
  *
***
        **
        * *
        *
``` 
These two gliders are at different rotations, so they will act differently
on the two boards in `DeltaTimeDemo`.

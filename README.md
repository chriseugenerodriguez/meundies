# MeUndies Take-Home Assignment

Welcome to our coding assignment! We're hoping this will give you the best opportunity to show us how you think about and write code within the context of a project. This won't be graded on anything like "correctness", so try not to get too bogged down in the puzzle details (we've actually solved it for you already!). We really want to see your approach to _improving_ code and its supporting tools.

## Instructions

This repo contains a fairly messy solution to the bishop's problem. It's functionally complete, but still leaves a lot to be desired. Take some time familiarizing yourself with the code (and its supporting tools) and find some ways to make it "better". This, of course, has wide meaning! We're curious to see what you come up with, but here are a few ideas to get you started (in no particular order):

- refactor the functionality of the code itself
- improve consistency within the code
- add tests
- add other helpful tools
- convert it to TypeScript

Whatever you do, be sure to explain how and why you did it in your commits! You can get an idea of our commit conventions from the existing commits in the repo. We've also included a description of the bishop's problem below, for reference.

### Delivery

You (and only you) have read access to this repo. This ensures that all candidates' submissions are private. However, because you only have read access, you'll need to fork the repo into your own GitHub account before working on it. We'll be grading the PRs you make back into the MeUndies-owned repo from your fork. You can organize them however you like; one PR is fine, as are multiple. You can create a few PRs in your own fork, merge them, and then create one larger PR from your `master` branch to ours! Just ensure the PR(s) into the MeUndies repo contain all context necessary to properly review.

## Bishop's Problem

Imagine an 8x8 grid represented by the numbers 1..64 (like a chessboard).

```
 1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52 53 54 55 56
57 58 59 60 61 62 63 64
```

Write a method that accepts a starting position and an ending position of a piece on the grid and returns the number of moves it would take for the piece to get there.

Movement rules:
- you can **only** move diagonally
- you can move as far as you want in a single direction
- changing directions constitutes the beginning of another move
- example image: http://www.learnchessrules.com/images/bishmove.png

Examples:

```javascript
bishops(3, 39)  // 1
bishops(3, 37)  // 2
bishops(3, 4)   // null
```

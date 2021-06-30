# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

**Provided resources:**

* [Requirements](./REAME_bak.md)
* [Style guide](./style-guide.md)
* [Mockups](./design)
* [Images](./src/images)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer

### Links

- Solution URL: [Add solution URL here](https://github.com/cch5ng/rock_paper_scissors_fementor)
- Live Site URL: [Add live site URL here](https://rock-paper-scissors-fementor.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Create React App

### What I learned

Where I got stuck was handling function dependencies within the `useEffect` hook. I refactored to include function dependencies (function definitions) inside the useEffect() call.

Reminder that useEffect can be a callback after updating state from a setter call (defined by the useState hook).

### Continued development

There are some [items that can still be improved](https://github.com/cch5ng/rock_paper_scissors_fementor/issues).

I could still better understand the use case for the useCallback hook/wrapper.

### Useful resources

- [When do I use functions in a Hooks Dependency Array?](https://reacttraining.com/blog/when-to-use-functions-in-hooks-dependency-array/) - Explained when functions are required dependencies in the useEffect hook.
- [React useState with Callback](https://www.robinwieruch.de/react-usestate-callback) - Reminder of ability to use the useEffect hook as a callback to a state update.

## Author

- Website - [Carol Chung](https://github.com/cch5ng)

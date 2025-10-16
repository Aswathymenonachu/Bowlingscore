#  Bowling Score Calculator

A simple JavaScript function to calculate total bowling scores including strikes and spares.

##  How to Run
```bash
npm install
node src/bowling.js

Example
calculateBowlingTotal([[5,3], [10], [4,6]]); // returns 38

How to Test
npm install
npm test

Expected Output

✅ All test cases should pass successfully and return:

PASS  tests/bowling.test.js

Live Demo
https://bowlingscore.vercel.app/

This project includes a **GitHub Actions workflow (`main.yml`)** that runs all Jest test cases automatically on:
- Every `push` to any branch
- Every `pull request` opened or updated
Test status
https://github.com/Aswathymenonachu/Bowlingscore/actions/

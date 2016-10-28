# _Ping-Pong_

#### _Arrays and looping exercise for Epicodus, 10.20.2016_

#### _**By Quinn Schwartz**_

## Description

_This web page will take user input of any number and return a list of numbers counting up the inputted number with certain specified numbers (depending on their divisibility) being replaced by certain specified words. (week 2 independent project)_

## Setup/Installation Requirements

* _Clone the repository_
* _Open the HTML file in a web browser to view the page_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_
* _Git_

## link

_https://quinnschwartz.github.io/ping-pong/_

### Legal

*This software is licensed under the MIT license.*

Copyright (c) 2016 **_Quinn Schwartz**

Rules:
Take a number from a user and return a range of numbers from 1 to the chosen number with the following exceptions:

Numbers divisible by 3 are replaced with "ping"
Numbers divisible by 5 are replaced with "pong"
Numbers divisible by 15 are replaced with "ping-pong"
A user should be able to enter a new number and see new results over and over again.

Spec List:
1) It can count up to the inputted number.
  - Example Input: 2
  - Example Output: [1,2]

2)  It can replace all numbers divisible by three with the string "ping".
  - Example Input: 6
  - Example Output: [1,2,"ping", 4, 5, "ping"]

3) It can replace all numbers divisible by 5 with the string "pong".
  - Example Input: 10
  - Example Output: [1,2,"ping", 4, "pong", "ping", 7, 8, "ping", "pong"]

4) It can replace all numbers divisible by 15 with the string "ping-pong".
  - Example Input: 15
  - Example Output: [1,2,"ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"]

5) It can return an alert to tell the user to only input numbers if they attempt to input any other type of character.  
  - Example Input: Q
  - Example Output: Alert("enter numbers only please");

  function pingPong (countTo) {
  var countToNum = parseInt(countTo);
  var countedNumbers = [];
  for (var i = 1; i <= countToNum; i += 1) {
    if (i % 3 === 0) {
      countedNumbers.push("string");
    } else {
      countedNumbers.push(i);
    }
    return countedNumbers;
    }
  };

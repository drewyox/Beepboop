# _Numbers to BeepBoops_

#### _Numbers to BeepBoops, 1/24/2019_

#### By _*Drew Yoxsimer*_

## Description

_This program takes a number and prints out every integer between 0 and the user's inputted number. Every number that contains a 1 is printed as: Beep. Every number containing 2 is printed as: Boop. Every number containing 3 is printed as: I'm sorry Dave, I cant let you do that. 3,2, and 1 have priority in that respective order, ie 12 is printed as Boop, and 32 is printed as I'm sorry Dave, I cant let you do that._

_My specs are as such._

_The program outputs integers up until the user's specified count._
* _example input: 10       example output: 1,2,3,4,5,6,7,8,9,10_
_The program finds every number containing 3, and replaces all digits with the phrase: "I'm sorry Dave, I can't let you do that"._
* _example input: 32       example output: "I'm sorry Dave, I can't let you do that"._
_The program finds every number containing 2, and replaces all digits with the phrase: "Boop", WITHOUT over riding the 3 rule._
* _example inputs: 12, 32       example outputs: "Boop", "I'm sorry Dave, I can't let you do that"_
_The program finds every number containing 2, and replaces all digits with the phrase: "Beep", WITHOUT over riding the 3 rule or the 2 rule_
* _example input: 11, 21, 103       example outputs: "Beep", "Boop", "I'm sorry Dave, I can't let you do that"_
_The program normally displays all integers that do not contain a 1, 2, or 3._
* _example input: 47       example output: 47_
_The program will replace previous output with new outputs when new inputs have been inputted, without needing to refresh the page_
* _example input: 5       example output: "Beep", "Boop", "I'm sorry Dav...", 4, 5._
* _example new input without page refresh: 7       example output: "Beep", "Boop", "I'm sorry Dav...", 4, 5, 6, 7._

## Setup/Installation Requirements

* _No Setup/Installation Required_

_Download Bootstrap, as well as jQuery v 3.3.1.js_

## Known Bugs

_There are no known bugs._


## Technologies Used

_JavaScript and jQuery_

### License

*This Software is Licensed under the MIT License.*

Copyright (c) 2019 **_Drew Yoxsimer_**

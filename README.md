[![Contact me on Codementor](https://cdn.codementor.io/badges/contact_me_github.svg)](https://www.codementor.io/niladrisekhardutta?utm_source=github&utm_medium=button&utm_term=niladrisekhardutta&utm_campaign=github)

# $.fn.theLimiter



jQuery plugin to limit the number of characters in a text field.It can be customized with custom error messages,font color,maximum charcter limit,DOM Element to show the error and callback function.


## Install

```html

<script type="text/javascript" src="js/jquery-1.10.1.min.js" ></script>

<script type="text/javascript" src="js/jquery.CharCount.js"></script>

```
---

## Example

```html

<div id="newlimit"></div><br/>
<textarea class="textarealimit" rows="10" cols="50" placeholder="Write something here(max 100 char)"></textarea><br/><br/>
<br/>
<textarea class="textarealimit" rows="10" cols="50" placeholder="Write something here(max 100 char)"></textarea><br/><br/>
<br/>
<textarea class="textarealimit" rows="10" cols="50" placeholder="Write something here(max 100 char)"></textarea><br/><br/>

<script type="text/javascript">
    $(document).ready(function(){
    $(".textarealimit").theLimiter({
    errormsg : 'Too much characters',
    element : '#newlimit',
    limit : 100,
    color : 'blue',
    complete : function(){alert("Please write within 100 characters");}
    });
    });
  </script>
  
  ```
  
 ---
## Options

### errormsg `:String` (Optional)
The error message to be shown when the character limit has been exceeded. <br/>
If `undefined` or empty, the default message <b>"You have exceeded character limit!"</b> is shown.

### element `:String` (Mandatory)

The element where the error message will be displayed.<b>This is a mandatory field</b> <br/>
This value can be an ID or Classname e.g "#newlimit" ,".newlimit".If `undefined` or empty,
the plugin looks for an element with ID "#charlimit'.Hence there should be an element with that ID to display the error message.

### limit `:Integer` (Optional)

Maximum character limit.If `undefined` or empty,then default value <b>25</b> is considered. 

### color `:String` (Optional)

The color of the error message to be displayed when the character limit has been exceeded.<br/>
If `undefined` or empty,then default value <b>'Red'</b> is considered. 

---

## Events

### complete `:Function` (Optional)

The callback function to be invoked when the character limit has been exceeded.

## Changelog

### 0.1.1

*  Added CharCount.jquery.json manifest file


### 0.1.0
 * Inital commit
 
 ---
## MIT LICENSE

Copyright (c) 2015 Niladri Dutta <nild2141@gmail.com>
https://github.com/Niladri24dutta/The-limiter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

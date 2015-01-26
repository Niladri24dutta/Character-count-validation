# $.fn.theLimiter



jQuery plugin to limit the number of characters in a text field.It can be customized with custom error messages,font color,maximum charcter limit,DOM Element to show the error and callback function.


## Install

```html

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js" ></script>

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
    $(".textarea").theLimiter({
    errormsg : 'Too much characters',
    element : '#newlimit',
    limit : 100,
    color : 'blue',
    complete : function(){alert("Please write within 100 characters");}
    });
    });
  </script>
  
  ```
## Options

### errormsg `:String`
The error message to be shown when the character limit has been exceeded. <br/>
If `undefined` or empty, the default message <b>"You have exceeded character limit!"</b> is shown.

### element `:String`

The element where the error message will be displayed. <b>This is a mandatory field</b> <br/>
This value can be an ID or Classname e.g "#newlimit" ,".newlimit".If `undefined` or empty,
the plugin looks for an element with ID "#charlimit'.Hence there should be an element with that ID to display the error message.







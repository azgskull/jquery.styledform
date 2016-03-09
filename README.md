#StyledForm
Build html Select, Radio, Checkbox easy to be customized

## First step

#### Including styledform
```
  <script src="js/jquery.styledform.js"></script>
```
  
#### Time to initialise
```
	$('[data-form]').each(function(){
		$(this).styledform();
	});
```
> styledForm plugin is then called for all form's elements having data attribute (data-form)
  
## Second step
### New html generated
#### Select
Select's html
```
<select data-form="select" name="">
  <option disabled="">Options</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```
> data-form="select" : To specify the nature of the element

Then, styledForm will hide the select, and create a fake list as a select replacement
```
<div class="styledSelect">
  <span class="disabled">Options</span>
  <ul>
    <li class="disabled">Options</li>
    <li>Option 1</li>
    <li>Option 2</li>
  </ul>
</div>
```
> where <span class="disabled">Options</span> is the placeholder for the selected option

  

#StyledForm
Build html Select, Radio, Checkbox easy to be customized

## First step

#### Including styledform
```html
  <script src="js/jquery.styledform.js"></script>
```
  
#### Time to initialise
```javascript
	$('[data-form]').each(function(){
		$(this).styledform();
	});
```
> styledForm plugin is then called for all form's elements having data attribute (data-form)
  
## Second step
### New html generated
#### Select
* **HTML**
```html
<select data-form="select" name="">
  <option disabled="">Options</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```
> data-form="select" : To specify the nature of the element

Then, styledForm will hide the select, and create a fake list as a select replacement
```html
<div class="styledSelect">
  <span class="disabled">Options</span>
  <ul>
    <li class="disabled">Options</li>
    <li>Option 1</li>
    <li>Option 2</li>
  </ul>
</div>
```
> where ```<span class="disabled">Options</span>``` is the placeholder for the selected option

* **Basic CSS**
```css
.styledSelect{display:inline-block; width: 100%; position:relative}
.styledSelect span{position: relative;display: block;background: #fbfbfb;padding: 0 5px;width: 100%;border: 1px solid #ccc; cursor: pointer}
.styledSelect span::after{content: '';position: absolute;border: 0.3125rem solid transparent;border-top-color: #333;top: 63%;right: 0.3125rem;transform: translate(0,-50%);}
.styledSelect.open span::after{border: 0.3125rem solid transparent;border-bottom-color: #333; top: 40%}
.styledSelect ul{display:none;position: absolute;margin: 0px;top: 100%;left: 0;background: #fbfbfb;width: 100%;border: 1px solid #ccc;padding: 1px 0px;z-index: 2;}
.styledSelect ul.visible{display:block}
.styledSelect ul li{list-style: none;padding: 0 5px;}
.styledSelect ul li+li{margin-top: 1px;}
.styledSelect ul li:not(.disabled):not(.selected):hover{background-color: #eee; cursor:pointer}
.styledSelect ul li.selected{background-color: #ccc}
.styledSelect ul li.disabled{color: #555; cursor: default} 
```


#### Checkbox
* **HTML**
```html
<label>
	<input type="checkbox" data-form="checkbox" name="">
	Checkbox
</label>
```
> data-form="checkbox" : To specify the nature of the element
> new Html 

```html
<label>
	<input type="checkbox" data-form="checkbox" name="" class="checkbox-ckb">
	<span class="checkbox-ic"></span>
</label>
```

> where ```<span class="checkbox-ic"></span>``` is the icon for the checked element

* **CSS**
```css
.styledCheckbox{position: relative; display: inline-block; padding-left: 1.25rem; cursor: pointer}
.styledCheckbox .checkbox-ckb{visibility: hidden;position: absolute; top: 0px; left: 0px; width: 100%; height: 100%}
.styledCheckbox .checkbox-ckb:checked ~ .checkbox-ic{ background-color: #666}
.styledCheckbox .checkbox-ic{position: absolute; display: inline-block; width: 0.9375rem; height: 0.9375rem; left: 0px; top: 0.3125rem; background: #fbfbfb; border: 1px solid #ccc;}
```

#### Radio (Same as checkbox)
* **HTML**
```html
<label class="radio">
	<input type="radio" data-form="radio" name="" >
	Radiobutton
</label>
```
> data-form="radio" : To specify the nature of the element
> new Html 

```html
<label class="radio styledRadio">
	<input type="radio" data-form="radio" name="" class="radio-ckb">
	Radiobutton
	<span class="radio-ic"></span>
</label>
```

> where ```<span class="radio-ic"></span>``` is the icon for the selected element

* **CSS**
```css
.styledRadio{position: relative; display: inline-block; padding-left: 1.25rem; cursor: pointer;}
.styledRadio .radio-ckb{visibility: hidden;position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;}
.styledRadio .radio-ckb:checked ~ .radio-ic{ background-color: #666}
.styledRadio .radio-ic{position: absolute; display: inline-block; width: 0.9375rem; height: 0.9375rem; left: 0px; top: 0.3125rem; background: #fbfbfb; border: 1px solid #ccc; border-radius: 100%}
```


## Changelog
### Version 0.1.0
* Basic customised select, radio, checkbox form's elements

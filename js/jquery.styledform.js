//////////////////////////////////////////////////////
/// StyledForm v0.1.0 - march,09 2016
/// Build html Select, Radio, Checkbox easy to be customized
/// 
/// @AZGSKULL - StyledForm
/// Released under the MIT license - http://opensource.org/licenses/MIT
//////////////////////////////////////////////////////

(function($){
	DECLARED_DEFAULT_STYLE = false; 
    $.fn.styledform = function( options ) {

 		//////////////////////////////
 		// global var ABB;
 		// var Abbbbb;
 		// function fn_type_role_abbAbbb;
 		//////////////////////////////

        //settings
        var settings = $.extend({
            //
        }, options );
 		
        //////////////////////////
 		// Global var for this element
 		var NAME = $(this).attr('name'); 
        var TYPE = $(this).data('form');

        //////////////////////////
        // Select
        switch(TYPE){
        	case 'select':

        		var Select = $(this); 	 // html select element
        		var Options = null;		 // Options of the select
        		var StyledSelect = null; // New html div select
        		
        		//getting all the select's options
        		Options 		= fn_select_get_options(Select);
        		//preparing the html
        		// DIV >> SPAN + UL
        		StyledSelect 	= fn_select_prepare_html(Select,Options);
        		
        		//handling select event between UL>>LI and SELECT>>OPTION
        		fn_select_handle_event(Options,Select,StyledSelect);

        	break;
        	case 'checkbox':
        		var Checkbox = $(this); 	 // html Checkbox element
        		var StyledCheckbox = null;	// refere to label parent

        		StyledCheckbox = fn_checkbox_prepare_html(Checkbox);
                fn_checkbox_handle_event(Checkbox,StyledCheckbox);
        	break;
        	case 'radio':
        		var Radio = $(this); 	 	// html Radio element
        		var StyledRadio = null;		// refere to Radio parent

        		StyledRadio = fn_radio_prepare_html(Radio);
        	break;
        }

        /////////////////////////
        // global call
        // Default Style for :
        // StyledSelect, StyledRadio, StyledCheckbox
        fn_global_default_styles();



        /////////////////////////////
        // # fn select
        /////////////////////////////

        ///// fn_select_get_options(Select)
        function fn_select_get_options(Select){
        	var Options = Array();
        	$('option',Select).each(function(){

        		var value = $(this).attr('value');
        		var text = $(this).text();
        		var disabled = $(this).prop('disabled');

        		if(value != undefined && text != undefined)
        			Options.push(Array(value,text,disabled));
        		else if(text != undefined)
        			Options.push(Array(text,text,disabled));
        	});
        	return Options;
        }

        ///// fn_select_prepare_html(Options)
        function fn_select_prepare_html(Select,Options){
        	//hide select
        	Select.hide();

        	//create global div 
        	var selectDiv = document.createElement('div');
        	$(selectDiv).addClass("styledSelect");
        	$(selectDiv).insertAfter(Select);

        	var selectedOption = document.createElement('span');
        		$(selectedOption).text(Options[0][1]).addClass('disabled');
        	//the fake select
        	var selectOptions = document.createElement('ul');

        	//adding fake options
        	for(var Option in Options){
        		// getting the text
        		$(selectOptions).append('<li '+ (Options[Option][2] ? 'class="disabled"' : '') +'>'+Options[Option][1]+'</li>');
        	}

        	//appending all to the global div
        	$(selectedOption).appendTo(selectDiv);
        	$(selectOptions).appendTo(selectDiv);

        	return selectDiv;
        }

        ///// fn_select_handle_event()
        function fn_select_handle_event(Options,Select,StyledSelect){
        	$("ul li",StyledSelect).on('click',function(){

        		var Clicked = $(this).index();
        		
        		//if disabled
        		if(Options[Clicked][2] || Options[Clicked][2] == undefined)
        			return true;

        		//click option
        		var text = $(this).text();
        		$('option',Select).eq(Clicked).attr('selected', 'selected');
        		$('span', StyledSelect).text(text);
                $('span', StyledSelect).removeClass('disabled');
        		//add class Selected to li
        		$('ul li',StyledSelect).removeClass('selected');
        		$(this).addClass('selected');

        	});

        	//click toggle class
    		$(StyledSelect).click(function(){
    			$(this).toggleClass('open');
    			$('ul',this).toggleClass('visible');
    		});
        }

        /////////////////////////////
        // # fn checkbox
        /////////////////////////////
        ///// fn_checkbox_prepare_html(Checkbox)
        function fn_checkbox_prepare_html(Checkbox){
        	//check if parent label;
        	var StyledCheckbox;

        	if(!$(Checkbox).parent('label')){
        		var Label = document.createElement('label');
        			$(Label).insertAfter(Checkbox);
        			$(label).append('<span class="checkbox-ic"></span>');
        			$(Checkbox).appendTo(Label);
        			StyledCheckbox = Label;
        	}else{
        		StyledCheckbox = $(Checkbox).parent('label');
        		$(StyledCheckbox).append('<span class="checkbox-ic"></span>');
        	}

        	$(StyledCheckbox).addClass('styledCheckbox');
        	$('input',StyledCheckbox).addClass('checkbox-ckb');

            return StyledCheckbox;
        }
        function fn_checkbox_handle_event(Checkbox,StyledCheckbox){
            $(Checkbox).click(function(){
                
                $(StyledCheckbox).toggleClass('checked');
            });
        }
        /////////////////////////////
        // # fn radio
        /////////////////////////////
        ///// fn_radio_prepare_html(Checkbox)
        function fn_radio_prepare_html(Radio){
        	//check if parent label;
        	var StyledRadio;

        	if(!$(Radio).parent('label')){
        		var Label = document.createElement('label');
        			$(Label).insertAfter(Radio);
        			$(label).append('<span class="radio-ic"></span>');
        			$(Radio).appendTo(Label);
        			StyledRadio = Label;
        	}else{
        		StyledRadio = $(Radio).parent('label');
        		$(StyledRadio).append('<span class="radio-ic"></span>');
        	}

        	$(StyledRadio).addClass('styledRadio');
        	$('input',StyledRadio).addClass('radio-ckb');
        }
        /////////////////////////////
        // # fn global
        /////////////////////////////
        // fn_global_default_styles
        function fn_global_default_styles(){
        	if(DECLARED_DEFAULT_STYLE)
        		return true;
        	var styles = '<style>'
        		var select = '';
	        		select += '.styledSelect{display:inline-block; width: 100%; position:relative}';
	        		select += '.styledSelect span{position: relative;display: block;background: #fbfbfb;padding: 0 5px;width: 100%;border: 1px solid #ccc; cursor: pointer}';
	        		select += '.styledSelect span::after{content: \'\';position: absolute;border: 0.3125rem solid transparent;border-top-color: #333;top: 63%;right: 0.3125rem;transform: translate(0,-50%);}';
	        		select += '.styledSelect.open span::after{border: 0.3125rem solid transparent;border-bottom-color: #333; top: 40%}';
	        		select += '.styledSelect ul{display:none;position: absolute;margin: 0px;top: 100%;left: 0;background: #fbfbfb;width: 100%;border: 1px solid #ccc;padding: 1px 0px;z-index: 2;}';
	        		select += '.styledSelect ul.visible{display:block}';
	        		select += '.styledSelect ul li{list-style: none;padding: 0 5px;}';
	        		select += '.styledSelect ul li+li{margin-top: 1px;}';
	        		select += '.styledSelect ul li:not(.disabled):not(.selected):hover{background-color: #eee; cursor:pointer}';
	        		select += '.styledSelect ul li.selected{background-color: #ccc}';
	        		select += '.styledSelect ul li.disabled{color: #555; cursor: default}';
        		
        		var checkbox = '';
        			checkbox += '.styledCheckbox{position: relative; display: inline-block; padding-left: 1.25rem; cursor: pointer}';
        			checkbox += '.styledCheckbox .checkbox-ckb{visibility: hidden;position: absolute; top: 0px; left: 0px; width: 100%; height: 100%}';
        			checkbox += '.styledCheckbox .checkbox-ckb:checked ~ .checkbox-ic{ background-color: #666}';
        			checkbox += '.styledCheckbox .checkbox-ic{position: absolute; display: inline-block; width: 0.9375rem; height: 0.9375rem; left: 0px; top: 0; background: #fbfbfb; border: 1px solid #ccc;}';
				
				var radio = '';
        			radio += '.styledRadio{position: relative; display: inline-block; padding-left: 1.25rem; cursor: pointer;}';
        			radio += '.styledRadio .radio-ckb{visibility: hidden;position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;}';
        			radio += '.styledRadio .radio-ckb:checked ~ .radio-ic{ background-color: #666}';
        			radio += '.styledRadio .radio-ic{position: absolute; display: inline-block; width: 0.9375rem; height: 0.9375rem; left: 0px; top: 0; background: #fbfbfb; border: 1px solid #ccc; border-radius: 100%}';


        	styles += select + checkbox + radio + '</style>';
        	$('head').append(styles);
        	DECLARED_DEFAULT_STYLE = true;
        }
    };
}(jQuery));
(function($) {

        $.fn.theLimiter = function(options){
        
            var settings = $.extend({

            errormsg : 'You have exceeded character limit!',
            element : '#charlimit',
            limit : 25,
            color : 'red',
            //fontStyle  : 'Arial',
            complete : null
            },options);
            
            return this.each(function(){
             
            //var oldtxt = $(this).text();
            //$(this).text(oldtxt+" "+settings.text);
            
            $(this).keyup(function(){
            
            if(settings.limit)
            {
             var limit = settings.limit;
            }
            if(settings.element)
            {
            $(settings.element).text(limit+" characters left");
            }
            var len = $(this).val().length;
            if(len > limit)
            {
            this.value = this.value.substring(0,limit);
              if(settings.errormsg && settings.color && settings.element )
              { 
                $(settings.element).text(settings.errormsg).css('color',settings.color);
                if($.isFunction(settings.complete))
                 {
                    settings.complete.call(this);
                 }
              }
            } 
            else
            {
                if(settings.element)
                {
                 $(settings.element).text(limit - len+" characters left").css('color','black');
                }
            }
          });  
            /*if(settings.color)
            {
             $(this).css('color',settings.color);
            }
            
            if(settings.fontStyle)
            {
             $(this).css('font-style',settings.fontStyle);
            }
            */
            
             
          });
        };  

  }(jQuery));

$(function() {
    var $container = $('#image-to-annotate');
    var $selection = $('<div>').addClass('selection-box');
    var i = 1;
    var image = "images/"+i.toString()+".jpg";

    
    $container.on('mousedown', function(e) {
        var click_y = e.pageY,
	    click_x = e.pageX;
      
        $selection.css({
          'top':    click_y,
          'left':   click_x,
          'width':  0,
          'height': 0
        });
        $selection.appendTo($container);
        
        $container.on('mousemove', function(e) {            
          var move_x = e.pageX,
              move_y = e.pageY,
              width  = Math.abs(move_x - click_x),
              height = Math.abs(move_y - click_y),
              new_x, new_y;
          
          new_x = (move_x < click_x) ? (click_x - width) : click_x;
          new_y = (move_y < click_y) ? (click_y - height) : click_y;
          
          $selection.css({
            'width': width,
            'height': height,
            'top': new_y,
            'left': new_x
          });
          
        }).on('mouseup', function(e) {
            $container.off('mousemove');
            //$selection.remove();
        });
    });

    //Submit
    $(window).on('keydown', function(e) {
        switch(e.which){
          case 13:
            $selection.remove();
            i = i + 1;
            image = "images/"+i.toString()+".jpg";
            document.getElementById("#image").src=image;
          break;
        }
      });
});
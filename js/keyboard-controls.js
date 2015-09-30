$(document).ready(function(){
    //Set first image with red background
    $("#image1").css("background-color","red");

    var current_image = "#image1";
    var next_image = "#image1";
    var img_num = 1;
    var selection_flag = 0;
    var selected_images = [];
    var already_selected = false;
    var previous_image = "#image1";

    //Based on keyboard input, will change the background color to the selected image, thus highlighting it
    $.fn.change_color = function() {
        //check if image has already been selected
        for(var i = 0; i < selected_images.length; i++){
            if (img_num == selected_images[i]){
                already_selected = true;
            }
        }

        previous_image = current_image;

        $(previous_image).css("background-color", "#ccc");

        //Set img-number
        switch(img_num){

            case 1:
                current_image = "#image1";
            break;

            case 2:
                current_image = "#image2";
            break;

            case 3:
                current_image = "#image3";
            break;

            case 4:
                current_image = "#image4";
            break;

            case 5:
                current_image = "#image5";
            break;

            case 6:
                current_image = "#image6";
            break;
        }

        //spacebar pressed, and image previously not selected
        if(selection_flag == 1 && already_selected == false){
            $(current_image).addClass("keep-color");
            $(current_image).css("background-color","red");
            selected_images.push(img_num);
        }

        //arrow key pressed, previously not selected
        else if(selection_flag == 0){
            $(current_image).css("background-color","red");
        }

        //spacebar pressed, and the image was previously selected
        else if(selection_flag == 1 && already_selected == true){
            selected_images = jQuery.grep(selected_images, function(value){
                return value != img_num;
            });
            $(current_image).css("background-color","red");
            $(current_image).removeClass("keep-color");
        }


        already_selected = false;
        selection_flag = 0;
        return this;
    };

    $.fn.keyboard_control = function() {
        $("#submit").click(function(){
            alert("Images selected: "+selected_images);
            window.location.href = "index.html";       
        });

        $(window).keydown(function(e) {
            switch(e.which){

                case 37: //left
                    if (img_num == 1){img_num = 3;}
                    else if (img_num == 4){img_num = 6;}
                    else{img_num = img_num - 1;}
                    $(document).change_color();
                break;
                
                case 38: //up
                    if (img_num > 3){img_num = img_num - 3;}
                    else if(img_num < 4){img_num = img_num + 3;}
                    $(document).change_color();                    
                break;
                
                case 39: //right
                    if (img_num == 3){img_num = 1;}
                    else if (img_num == 6){img_num = 4;}
                    else{img_num = img_num + 1;}
                    $(document).change_color();
                break;
                
                case 40: //down
                    if (img_num > 3){img_num = img_num - 3;}
                    else if(img_num < 4){img_num = img_num + 3;}
                    $(document).change_color();                    
                break;

                case 32: //spacebar
                    img_num = img_num;
                    selection_flag = 1;
                    $(document).change_color();
                break;

                case 13: //enter
                    alert("Images selected: "+selected_images);
                    window.location.href="index.html";
                break;
            }
        });
    };

    $.fn.retrieve_xml_data = function(){
        $.get('images/image-data.xml', function(d){
            $(d).find('image').each(function(){
                var $image = $(this);
                var link = image.attr("href");
                var description = $image.find('description').text();
                var id = image.attr("id");
            });
        });
    };

    $(document).keyboard_control();
});
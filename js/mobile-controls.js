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
    var imageToAnalyze = [-5,-4,-3,-2,-1,0];
    var imageToAnalyze_String = [];
    var reducedData;

    // //Modify JSON data
    // $.fn.modifyJSON = function() {
    //     $.get('http://localhost:8000/data.js', function(result) {
    //        var json = $.parseJSON(result);
    //        alert(); //Do whatever you want here
    //     });
    // };

    //Based on keyboard input, will change the background color to the selected image, thus highlighting it
    $.fn.change_color = function() {
        
        //check if image has already been selected
        for(var i = 0; i < selected_images.length; i++){
            if ($(current_image).attr("src") == selected_images[i]){
                already_selected = true;
            }
        }

        previous_image = current_image;

        $(previous_image).css("background-color", "#ccc");

        //Set img-number
        // switch(img_num){

        //     case 1:
        //         current_image = "#image1";
        //     break;

        //     case 2:
        //         current_image = "#image2";
        //     break;

        //     case 3:
        //         current_image = "#image3";
        //     break;

        //     case 4:
        //         current_image = "#image4";
        //     break;

        //     case 5:
        //         current_image = "#image5";
        //     break;

        //     case 6:
        //         current_image = "#image6";
        //     break;
        // }
    
        //spacebar pressed, and image previously not selected
        if(selection_flag == 1 && already_selected == false){
            $(current_image).addClass("keep-color");
            $(current_image).css("background-color","red");
            selected_images.push($(current_image).attr("src"));
        }

        //arrow key pressed, previously not selected
        else if(selection_flag == 0){
            $(current_image).css("background-color","red");
        }

        //spacebar pressed, and the image was previously selected
        else if(selection_flag == 1 && already_selected == true){
            selected_images = jQuery.grep(selected_images, function(value){
                return value != $(current_image).attr("src");
            });
            $(current_image).css("background-color","red");
            $(current_image).removeClass("keep-color");
        }


        already_selected = false;
        selection_flag = 0;
        //return this;
    };

    //Repopulate page with new images
    $.fn.updateImages = function() {
        //Reset highlighted image to top left corner
        $(current_image).css("background-color","#ccc");
        //Clear selections
        $("#image1").removeClass("keep-color");        
        $("#image2").removeClass("keep-color");
        $("#image3").removeClass("keep-color");
        $("#image4").removeClass("keep-color");
        $("#image5").removeClass("keep-color");
        $("#image6").removeClass("keep-color");        
        current_image = "#image1";
        next_image = "#image1";
        img_num = 1;
        selection_flag = 0;
        selected_images = [];
        already_selected = false;
        previous_image = "#image1";
        $(current_image).css("background-color","red");    

        //Change images to new set of six
        for(i = 0; i < imageToAnalyze.length; i++){
            imageToAnalyze[i] = imageToAnalyze[i]+6;
            imageToAnalyze_String[i] ='images/' + imageToAnalyze[i].toString()+'.jpg';
        }
        $("#image1").attr("src",imageToAnalyze_String[0]);
        $("#image2").attr("src",imageToAnalyze_String[1]);
        $("#image3").attr("src",imageToAnalyze_String[2]);
        $("#image4").attr("src",imageToAnalyze_String[3]);
        $("#image5").attr("src",imageToAnalyze_String[4]);
        $("#image6").attr("src",imageToAnalyze_String[5]);
        //$(document).modifyJSON();
    };

    //Select images using keyboard
    $.fn.keyboard_control = function() {
        $("#submit").click(function(){
            alert("Images selected: "+selected_images);
            $(document).updateImages();      
        });

    	var box1 = "#image1";
    	var box2 = "#image2";
    	var box3 = "#image3";
    	var box4 = "#image4";
    	var box5 = "#image5";
    	var box6 = "#image6";

        $(box1).click(function(){
            current_image = box1;
            img_num = img_num;
            selection_flag = 1;
            $(document).change_color();
        });

        $(box2).click(function(){
            current_image = box2;
            img_num = img_num;
            selection_flag = 1;
            $(document).change_color();
        });

        $(box3).click(function(){
            current_image = box3;
            img_num = img_num;
            selection_flag = 1;
            $(document).change_color();
        });

        $(box4).click(function(){
            current_image = box4;
            img_num = img_num;
            selection_flag = 1;
            $(document).change_color();
        });

        $(box5).click(function(){
            current_image = box5;
            img_num = img_num;
            selection_flag = 1;
            $(document).change_color();
        });

        $(box6).click(function(){
            current_image = box6;
            img_num = img_num;
            selection_flag = 1;
            $(document).change_color();
        });      

    };

    $(document).updateImages();
    $(document).keyboard_control();

});
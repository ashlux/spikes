$(document).ready(function(){
    parseMerchs();
});

function parseMerchs(){
    var merchList = [];
    $('ul#merchantsList li').each(function(){
        merchList.push($(this).html());
    }).parent().remove();//make the list an array and destroy it
    
  $(".ddcombo").ddcombo({//make the combobox, populate the "ddcombo" div
    minChars: 0,
    options: merchList
  }
  );
}

console.log('Script file is loaded.')

// Single line comment

/*
Multiple
line
comment
*/


$('h1').html('This is done by <em>JavaScript</em>!');
$('p').css('border', '1px solid red');
$('h2').toggleClass('blue');
$('main').append('<p>A p is appended in the main.</p>');
$('p').css('padding', '10px')

let name = 'Norbert';
let age = '24';

function myLittleFunction () {
    //condition : nomber of ps is smaller than 5
    if ($('p').length < 5){
        $('main').append('<p>A p is appended in the main.</p>');
    }else {
        console.log('We reachd the maximum paragraph number');
    }
 
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px')
}

myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});


/*kövi

if (condition that be true or false)  {
    // condition is true 
}else{
    //condition is flase
}*/

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];
colors.forEach(function(color){
    $('#box-container').append ('<div class="box"></div>');
    $('.box:last-child').css('background', color)
})

//$('#box-container').append ('<div class="box"></div>');
//$('.box:last-child').css('background', colors[0])
//$('#box-container').append ('<div class="box"></div>');
//$('.box:last-child').css('background', colors[1])
//$('#box-container').append ('<div class="box"></div>');
//$('.box:last-child').css('background', colors[2])
//$('#box-container').append ('<div class="box"></div>');
//$('.box:last-child').css('background', colors[3])
//$('#box-container').append ('<div class="box"></div>');
//$('.box:last-child').css('background', colors[4])
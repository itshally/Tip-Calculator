//declare variables
var billValue = document.querySelector('#bill-value'), //bill input
    tipValue = document.querySelector('#tip-value'), // tip input
    numOfPeopleValue = document.querySelector('#number-of-people-value'), //numOfPeople input
    totalBillResult = document.querySelector('#total-bill-result'), //total bill result
    totalTipResult = document.querySelector('#total-tip-result'), //total tip result
    tipPerPersonResult = document.querySelector('#split-tip-result'), //total tip per person
    billPerPersonResult = document.querySelector('#split-bill-result'), //total bill per person
//declare default values
    defaultBillValue = 0, 
    defaultTipValue = 15,
    defaultNumOfPeople = 2,
    defaultBillTotal = 0,
    defaultTipAmount = 0;
    
billValue.value = defaultBillValue.toFixed(2);
tipValue.value = Number(defaultTipValue);
numOfPeopleValue.value = Number(defaultNumOfPeople);
totalBillResult.textContent = defaultBillValue.toFixed(2),
totalTipResult.textContent = defaultTipAmount.toFixed(2);

$('.calculate-container').hide();

$('.back-button').click(function(){
    $('.index-view').fadeIn();
    $(this).parent().fadeOut();
    billValue.value = defaultBillValue.toFixed(2);
    tipValue.value = defaultTipValue;
    totalBillResult.textContent = defaultBillValue.toFixed(2);
    totalTipResult.textContent = defaultTipAmount.toFixed(2);
});

$("#yes-button").click(function(){
    $('.index-view').fadeOut('slow');
    $('.calculate-container').fadeIn('slow');
    $('.split-bill-option').show();
    // $('.default-hide').hide();
});

$("#no-button").click(function(){
    $('.index-view').fadeOut('slow');
    $('.calculate-container').fadeIn('slow');
    $('.split-bill-option').hide();
    $('.default-hide').show();
});



$('#tip-value').on('input', function(){
    //!!! FIX VALIDATIONS 
    // if(tipValue.value < 1){
    //     $('#error-message-container').fadeIn();
    //     $('#error-message').text('You\'ve typed less than 5%.' );
    //     $('.calculate-container').hide();
    //     $('.error-okay-button').on('click', function(){
    //         $('#error-message-container').hide();
    //         $('.calculate-container').fadeIn();
    //         tipValue.value = defaultTipValue;
    //     });
    // }else if(tipValue.value > 100){
    //     $('#error-message-container').fadeIn();
    //     $('#error-message').text('You\'ve typed greater than 100%.' );
    //     $('.calculate-container').hide();
    //     $('.error-okay-button').on('click', function(){
    //         $('#error-message-container').hide();
    //         $('.calculate-container').fadeIn();
    //         tipValue.value = defaultTipValue;
    //     });
    // }
    
    
    $tipAmount = (Number(tipValue.value) / 100) * Number(billValue.value);
    $totalBill = $tipAmount + Number(billValue.value);
    $('#total-bill-result').html($totalBill.toFixed(2));
    
    $('#total-tip-result').html($tipAmount.toFixed(2)); 
});

$('#bill-value').on('input', function(){
    $tipAmount = (Number(tipValue.value) / 100) * Number(billValue.value);
    $totalBill = $tipAmount + Number(billValue.value);
    $('#total-bill-result').html($totalBill.toFixed(2));
    
    $('#total-tip-result').html($tipAmount.toFixed(2)); 

});

$('#number-of-people-value').on('input', function(){
    $tipAmount = (Number(tipValue.value) / 100) * Number(billValue.value);
    $totalBill = $tipAmount + Number(billValue.value);
    $splitTip = $tipAmount / Number(numOfPeopleValue.value);
    $splitBill = $totalBill / Number(numOfPeopleValue.value);
    // $('#total-bill-result').html($splitBill.toFixed(2));
    
    // $('#total-tip-result').html($splitTip.toFixed(2)); 
    $('#split-tip-result').html($splitTip.toFixed(2)); 
    $('#split-bill-result').html($splitBill.toFixed(2));

    // var defaultNumberOfPersonValue = 2;
});


//Sets the bill value to decimal
function setDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}
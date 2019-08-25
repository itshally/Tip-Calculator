//declare variables
var billValue = document.querySelector('#bill-value'), //bill input
    tipValue = document.querySelector('#tip-value'), // tip input
    numOfPeopleValue = document.querySelector('#number-of-people-value'), //numOfPeople input
    totalBillResult = document.querySelector('#total-bill-result'), //total bill result
    totalTipResult = document.querySelector('#total-tip-result'), //total tip result
    tipPerPersonResult = document.querySelector('#split-tip-result'), //total tip per person
    billPerPersonResult = document.querySelector('#split-bill-result'), //total bill per person
//default values
    defaultBillValue = 0, 
    defaultTipValue = 15,
    defaultNumOfPeople = 2,
    defaultBillTotal = 0,
    defaultTipAmount = 0;

//displays all the default values
Default();

$('.calculate-container').hide();

$('.back-button').click(() => {
    $('.index-view').fadeIn();
    $(this).parent().hide();
    Default();
});

$("#yes-button").click(() => {
    $('.index-view').fadeOut();
    $('.calculate-container').fadeIn();
    $('.calculate-container').css("display", "block");
    $('.split-bill-option').show();
    $('.default-hide').hide();
});

$("#no-button").click(() => {
    $('.index-view').fadeOut();
    $('.calculate-container').fadeIn();
    $('.calculate-container').css("display", "block");
    $('.split-bill-option').hide();
    $('.default-hide').show();
});

$('#tip-value').on('input', () => {
    Calculate();
});


$('#bill-value').on('input', () => {
    Calculate();
});

$('#number-of-people-value').on('input', () => {
    Calculate();
});


function Default(){
    billValue.value = "";
    tipValue.value = Number(defaultTipValue);
    numOfPeopleValue.value = Number(defaultNumOfPeople);
    totalBillResult.textContent = defaultBillValue.toFixed(2);
    totalTipResult.textContent = defaultTipAmount.toFixed(2);
    tipPerPersonResult.textContent = defaultBillValue.toFixed(2);
    billPerPersonResult.textContent = defaultTipAmount.toFixed(2);
}

function Calculate(){
    $tipAmount = (Number(tipValue.value) / 100) * Number(billValue.value);
    $totalBill = $tipAmount + Number(billValue.value);
    $splitTip = $tipAmount / Number(numOfPeopleValue.value);
    $splitBill = $totalBill / Number(numOfPeopleValue.value);

    $('#total-bill-result').html($totalBill.toFixed(2));
    $('#total-tip-result').html($tipAmount.toFixed(2));     
    $('#split-tip-result').html($splitTip.toFixed(2)); 
    $('#split-bill-result').html($splitBill.toFixed(2));
}


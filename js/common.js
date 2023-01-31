function getTextElementbyId(elementid) {
    const PhoneTotalElement = document.getElementById(elementid);
    const currentPhoneTotalString = PhoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValuebyId(elementid, value) {
    const subTtotalElement = document.getElementById(elementid);
    subTtotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementbyId('phone-total');
    const currentCaseTotal = getTextElementbyId('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValuebyId('sub-total', currentSubTotal);


    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValuebyId('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValuebyId('final-total', finalAmount);
}
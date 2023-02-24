function productQuantity(product, isTrue, price){
    const input = document.getElementById(product + '-number');
    let quantity = input.value;

    if(isTrue){
        quantity = parseInt(quantity) + 1;
    }
    else if(quantity>0){
        quantity = parseInt(quantity) - 1;
    }
    input.value = quantity;

    const updateTotal = document.getElementById(product+ '-total');
    updateTotal.innerText = price * quantity;

}

function priceUpdate(){
    const subTotalPrice = parseInt(document.getElementById('phone-total').innerText)+ parseInt(document.getElementById('case-total').innerText);
    const tax = subTotalPrice/10;
    const totalPrice = subTotalPrice + tax;
    document.getElementById('sub-total').innerText = subTotalPrice;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    productQuantity('phone', true, 1219)
    priceUpdate()
});
document.getElementById('phone-minus').addEventListener('click', function(){
    productQuantity('phone', false, 1219)
    priceUpdate()
});
document.getElementById('case-plus').addEventListener('click', function(){
    productQuantity('case', true, 1219)
    priceUpdate()
});
document.getElementById('case-minus').addEventListener('click', function(){
    productQuantity('case', false, 1219)
    priceUpdate()
});



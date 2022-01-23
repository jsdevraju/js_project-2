const calculate =  document.querySelector('#calculate');
let amount = document.querySelector('#amount');
let services = document.querySelector('#services');
let persons = document.querySelector('#persons');
let each = document.querySelector('#each');
let tip = document.querySelector('.tip');
let total = document.querySelector('#total');

calculate.addEventListener('click', () =>{
    const aVal = amount.value;
    const sVal = services.value;
    const pVal = persons.value;
    
    if(amount === '' && services === 'select'){
        alert('Please enter valid values')
        return;
    }

    if(persons === '1'){
        each.style.display = 'none';
    }else{
        each.style.display = 'block';

        let finalAmount = (aVal * sVal ) / pVal;
        finalAmount = finalAmount.toFixed();

        tip.style.display = 'block';
        total.innerHTML = finalAmount;
    }
})
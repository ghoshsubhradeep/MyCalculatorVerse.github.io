const from_currency=document.getElementById('from_country');
const from_amount1=document.getElementById('from_amount');
const to_currency=document.getElementById('to_country');
const to_amount1=document.getElementById('to_amount');
const rate1=document.getElementById('rate');
const xchg=document.getElementById('exchange');

from_currency.addEventListener('change', calculate);
from_amount1.addEventListener('input', calculate);
to_currency.addEventListener('change', calculate);
to_amount1.addEventListener('input', calculate);
xchg.addEventListener('click',()=>
     {
       const temp=from_currency.value;
       from_currency.value=to_currency.value;
       to_currency.value=temp;
       calculate();
     });
function calculate()
{
    const from_curr=from_currency.value;
    const to_curr=to_currency.value;
    fetch(`https://prime.exchangerate-api.com/v5/ed411fc02e7833dae8a2998f/latest/${from_curr}`)
    .then((res) =>res.json())
    .then((data) =>{
      console.log(data);
      const rate=data.conversion_rates[to_curr];
      rate1.innerHTML=`1 ${from_curr} = ${rate} ${to_curr}`
      to_amount1.value=(from_amount1.value * rate).toFixed(5);
    })
}
calculate();
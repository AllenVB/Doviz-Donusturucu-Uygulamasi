const amountInput = document.querySelector('#amount');
const firstOption = document.querySelector('#firstCurrencyOption');
const secondOption = document.querySelector('#secondCurrencyOption');
const resultInput = document.querySelector('#result');
const convertButton = document.querySelector('#convertButton');

const currency = new Currency();

runEventListeners();

function runEventListeners() {
    convertButton.addEventListener('click', exchange);
}

function exchange() {

    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;

    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount, firstOptionValue, secondOptionValue).then((result) => {
        resultInput.value = result.toFixed(2);
    })
        .catch((error) => {
            console.error('Error fetching exchange rate:', error);
            resultInput.value = 'Error';
        });

}
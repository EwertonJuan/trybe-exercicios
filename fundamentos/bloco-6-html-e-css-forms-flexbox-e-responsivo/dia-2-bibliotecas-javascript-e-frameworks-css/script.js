const btnSubmit = document.getElementById('btn-submit');

function getValues(event) {
    event.preventDefault();
    for (let i = 0; i < inputs.length; i += 1) {
        console.log(inputs[i].value);
    }
}

btnSubmit.addEventListener('click', getValues);

const btnClear = document.getElementById('btn-clear');
const inputs = document.getElementsByTagName('input');

//function clear() {
//    for (let i = 0; i < inputs.length; i += 1) {
//        inputs[i].value = '';
//    }
//}

//btnClear.addEventListener('click', clear);
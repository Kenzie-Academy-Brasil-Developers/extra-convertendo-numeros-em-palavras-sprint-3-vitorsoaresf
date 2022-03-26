const centenas = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhetos', 'seissentos', 'setecentos', 'oitocentos', 'novecentos'];
const dezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const dezenasUnidades = ['onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const unidades = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];

const numbersToWords = (number = 0) => {
    let numberStr = '';
    let digit = 0;
    let removeNumber = '';
    //SE FOSSE O CASO DE PEGAR AS CASAS DOS MILHARES ERA SÓ
    // ACRESCENTAR AS CASAS EM OUTRO IF

    if (number === 1000) {
        return 'mil';
    }

    if (number === 0) {
        return 'zero';
    }

    if (Number.parseInt(number / 100) !== 0) {
        if (Number.isInteger(number / 100)) {
            digit = Number.parseInt(number.toString()[0]);
            numberStr += centenas[digit - 1];

            removeNumber = number.toString().split('');
            removeNumber.shift();
            removeNumber.shift();
            removeNumber.shift();
            number = Number.parseInt(removeNumber.join(''));
        } else {
            digit = Number.parseInt(number.toString()[0]);
            numberStr += centenas[digit - 1] + ' e ';

            removeNumber = number.toString().split('');
            removeNumber.shift();
            number = Number.parseInt(removeNumber.join(''));
        }
    }
    if (Number.parseInt(number / 10) !== 0 && !(Number.isNaN(number))) {
        if (number === 10) {
            digit = Number.parseInt(number.toString()[0]);
            numberStr += dezenas[0];

            removeNumber = number.toString().split('');
            removeNumber.shift();
            removeNumber.shift();
            number = Number.parseInt(removeNumber.join(''));
        }
        else {
            if(number === 11 || number === 12 || number === 13 || number === 14 || number === 15 || number === 16 || number === 17 || number === 18 || number === 19) {
                digit = Number.parseInt(number.toString()[1]);
                numberStr += dezenasUnidades[digit - 1];

                removeNumber = number.toString().split('');
                removeNumber.shift();
                removeNumber.shift();
                number = Number.parseInt(removeNumber.join(''));
            }else {
                digit = Number.parseInt(number.toString()[0]);
                numberStr += dezenas[digit - 1] + ' e ';

                removeNumber = number.toString().split('');
                removeNumber.shift();
                number = Number.parseInt(removeNumber.join(''));

            }

        }
    }

    if (!(Number.isNaN(number))) {
        digit = Number.parseInt(number.toString()[0]);
        numberStr += unidades[digit - 1];

        removeNumber = number.toString().split('');
        removeNumber.shift();
        number = Number.parseInt(removeNumber.join(''));
    }

    return numberStr;
}

const dateToWords = (data) => {
    let time = (new Date() - data) / 1000;
    let strTimeResult = '';

    // TIME ESTÁ EM SEGUNDOS
    if (time < 60) {
        strTimeResult = '' + time + ' alguns segundos';
    } else if (time < 3600) {
        strTimeResult = '' + Math.floor(time / 60) + ' minutos atrás';
    } else if (time < 86400) {
        strTimeResult = '' + Math.floor(time / 3600) + ' horas atrás';
    } else if (time < 31104000) {
        strTimeResult = '' + Math.floor(time / 2592000) + ' meses atrás';
    } else if (time >= 31104000) {
        strTimeResult = '' + Math.floor(time / 31104000) + ' anos atrás';
    }

    return strTimeResult;
}

//PRECISA OBEDECER ESSE FORMATO -> new Date(ano,mes,dia,hora,minuto,segundo)
// DE ACORDO COM A MDN
// console.log(dateToWords(new Date(2018, 7, 6, 0, 0, 0)));

const inputnumber = document.getElementById('inputnumber');
const bt_converter = document.getElementById('bt-converter')
const result = document.getElementById('result');

bt_converter.addEventListener('click', () => {
    // console.log(inputnumber.value);
    result.innerText = numbersToWords(Number.parseInt(inputnumber.value));

});
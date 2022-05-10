const samsungSelect = document.getElementById('samsung');
const lgSelect = document.getElementById('lg');
const appleSelect = document.getElementById('apple');
const hpSelect = document.getElementById('hp');
const lenovoSelect = document.getElementById('lenovo');
const dellSelect = document.getElementById('dell');
const asusSelect = document.getElementById('asus');
const makerList = document.querySelectorAll('.optionList li input');
const productList = document.querySelectorAll('.productList > li');
const noteSamsung = document.querySelectorAll('.noteSamsung');
const noteLg = document.querySelectorAll('.noteLg');
const noteApple = document.querySelectorAll('.noteApple');
const noteHp = document.querySelectorAll('.noteHp');
const noteLenovo = document.querySelectorAll('.noteLenovo');
const noteDell = document.querySelectorAll('.noteDell');
const noteAsus = document.querySelectorAll('.noteAsus');
const resetButton = document.querySelector('.resetButton');



function confirmChecked(){
    // 모든 항목 check 여부 확인
    for (let i = 0; i < makerList.length; i++){
        makerList[i].addEventListener('click', () => {
            for (let k = 0; k < productList.length; k++){
                productList[k].classList.remove('hidden');
            };

            if (samsungSelect.checked || lgSelect.checked || appleSelect.checked || hpSelect.checked || lenovoSelect.checked || dellSelect.checked || asusSelect.checked){
                samsungConfirmChecked();
                lgConfirmChecked();
                appleConfirmChecked();
                hpConfirmChecked();
                lenovoConfirmChecked();
                dellConfirmChecked();
                asusConfirmChecked();
            }
        })
    }
}

function samsungConfirmChecked(){
    if (!samsungSelect.checked){
        for (let i = 0; i < noteSamsung.length; i++){
            noteSamsung[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < noteSamsung.length; i++){
            noteSamsung[i].classList.remove('hidden');
        }
    }
}
function lgConfirmChecked(){
    if (!lgSelect.checked){
        for (let i = 0; i < noteLg.length; i++){
            noteLg[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < noteLg.length; i++){
            noteLg[i].classList.remove('hidden');
        }
    }
}
function appleConfirmChecked(){
    if (!appleSelect.checked){
        for (let i = 0; i < noteApple.length; i++){
            noteApple[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < noteApple.length; i++){
            noteApple[i].classList.remove('hidden');
        }
    }
}
function hpConfirmChecked(){
    if (!hpSelect.checked){
        for (let i = 0; i < noteHp.length; i++){
            noteHp[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < noteHp.length; i++){
            noteHp[i].classList.remove('hidden');
        }
    }
}
function lenovoConfirmChecked(){
    if (!lenovoSelect.checked){
        for (let i = 0; i < noteLenovo.length; i++){
            noteLenovo[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < noteLenovo.length; i++){
            noteLenovo[i].classList.remove('hidden');
        }
    }
}
function dellConfirmChecked(){
    if (!dellSelect.checked){
        for (let i = 0; i < noteDell.length; i++){
            noteDell[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < noteDell.length; i++){
            noteDell[i].classList.remove('hidden');
        }
    }
}
function asusConfirmChecked(){
    if (!asusSelect.checked){
        for (let i = 0; i < noteAsus.length; i++){
            noteAsus[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < noteAsus.length; i++){
            noteAsus[i].classList.remove('hidden');
        }
    }
}

function resetChecked(){
    resetButton.addEventListener('click', () => {
        for (let i = 0; i < makerList.length; i++){
            makerList[i].checked = false;
        }
        for (let k = 0; k < productList.length; k++){
            productList[k].classList.remove('hidden');
        };
    })
}

confirmChecked();
resetChecked();
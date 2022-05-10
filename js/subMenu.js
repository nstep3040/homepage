let main = document.querySelectorAll('.mainMenu > li'),
    sub = document.getElementsByClassName('subMenu'),
    sub_text = document.querySelectorAll('.subMenu > li > a'),
    sub_dp_1 = document.getElementsByClassName('subMenu_depth01'),
    sub_bg = document.getElementsByClassName('subMenu_bg')[0];



menuSelect();


/* mouseover 시 해당 메인메뉴의 서브메뉴만 활성화 및 해당 메인메뉴 over class 추가하여 강조효과 */
function menuSelect() {
    for (let i = 0; i < main.length; i++) {
        main[i].addEventListener('mouseover', function() {
            mouse_over(this);
            sub_bg.style.display = 'block';
        });
    }
    for (let n = 0; n < sub_text.length; n++) {
        sub_text[n].addEventListener('mouseover', function() {
            mouse_over_sub(this);
            if (this.nextElementSibling) {
                subMenu_depth_open(this.nextElementSibling);
            }
        });
    }
    sub_bg.addEventListener('mouseout', function() {
        mouse_out();
        sub_bg.style.display = 'none';
    });
}


function mouse_over(select) {
    for (let j = 0; j < main.length; j++) {
        main[j].firstElementChild.classList.remove('over');
    }
    for (let l = 0; l < sub.length; l++) {
        sub[l].classList.remove('active');
    }

    select.firstElementChild.classList.add('over');
    if (select.childNodes.length >= 5) {
        select.childNodes[3].classList.add('active');
    }
}
function mouse_out() {
    for (let i = 0; i < main.length; i ++) {
        main[i].firstElementChild.classList.remove('over');
    }
    for (let j = 0; j < sub.length; j ++) {
        sub[j].classList.remove('active');
    }
    for (let k = 0; k < sub_text.length; k ++) {
        sub_text[k].classList.remove('over');
    }
    for (let n = 0; n < sub_dp_1.length; n++) {
        sub_dp_1[n].classList.remove('active');
    }
}


function mouse_over_sub(select) {
    for (let m = 0; m < sub_text.length; m++) {
        sub_text[m].classList.remove('over');
    }
    select.classList.add('over');
}

function subMenu_depth_open (s_depth_select) {
    for (let i = 0; i < sub_dp_1.length; i++) {
        sub_dp_1[i].classList.remove('active');
    }
    s_depth_select.classList.add('active');
}
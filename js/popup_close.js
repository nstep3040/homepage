var popup = document.getElementsByClassName('popup'),
    b_close = document.getElementsByClassName('b_close'),
    s_select = document.getElementsByClassName('s_select');


popup_active();

function popup_active() {
    for (var i = 0; i < b_close.length; i++) {
        b_close[i].firstElementChild.addEventListener('click', function() {
            pop_close(this.parentNode.parentNode);
        })
    }

    for (var j = 0; j < s_select.length; j++) {
        s_select[j].addEventListener('click', function() {
            pop_open(this.nextElementSibling);
        })

    }
}


function pop_close(current_pop) {
    current_pop.style.display = 'none';
}

function pop_open(current_pop) {
    for (var k = 0; k < popup.length; k++) {
        popup[k].style.display = 'none';
    }
    current_pop.style.display = 'block';
}
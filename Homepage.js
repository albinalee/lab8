function f1() {
    if (false) {
        console.log("false");
    }
    if (true) {
        console.log("true");
    }
}
function f2() {
    let n;
    let m = document.getElementById("txtbox2").value;
    if (m > 50) {
        n = 'large';
    } else {
        n = 'small';
    }
    console.log('n = ' + n);
}
function f3() {
    var i = 2;
    while (i < 9) {
        console.log(i++);
    }
}
function f4() {
    var i = 45;
    while (i < 68) {
        console.log(i++);
    }
}
function f5() {
    var i = 45;
    while (i < 671) {
        if (i % 10 == 0) {
            console.log(i);
        }
        i++;
    }
}
function f6() {
    for (var i = 45; i < 68; i++) {
        console.log(i);
    }
    for (var i = 45; i < 671; i++) {
        if (i % 10 == 0) {
            console.log(i);
        }
    }
}
function f7() {
    var n = document.getElementById('txtbox7').value;
    console.log(n);
    var res;
    switch(+n) {
        case 0:
            res = 'zero';
            break;
        case 1:
            res = 'one';
            break;
        case 2:
            res = 'two';
            break;
        case 3:
            res = 'three';
            break;
        case 4:
            res = 'four';
            break;
        case 5:
            res = 'five';
            break;
        case 6:
            res = 'six';
            break;
        case 7:
            res = 'seven';
            break;
        case 8:
            res = 'eight';
            break;
        case 9:
            res = 'nine';
            break;
        default:
            res = 'Invalid Input!';
            break;
    }
    console.log(res);
}
function f8() {
    let N = 10;
    let div = document.querySelector('#div8');
    let HTML = '';
    while (N--) {
        HTML += '<img src="images/dog.jpg" style="width:20%">';
    }
    div.innerHTML = HTML;
}
function f9() {
    var size, unit;
    size = document.getElementById("txtbox9").value;
    unit = document.getElementById("units").value;
    if (size < 0) {
        document.getElementById('Byte').innerHTML = '<span style="color: red">Size is Invalid!</span>';
        return;
    }
    console.log(size + unit + " -> " + addSpace(getByte(size, unit)) + ' bytes');
}
function getByte(size, unit) {
    if (unit == 'B') {
        return(size);
    } else {
        let units = ['PB', 'TB', 'GB', 'MB', 'KB', 'B'];
        for (var i = 0; i < units.length; i++) {
            if (unit == units[i]) {
                return(getByte(size * 1024, units[++i]));
            }
        }
    }
}
function addSpace(number) {
    var S1 = number.toString(), S2 = '';
    for (var i = 0, j = 1; i < S1.length; i++, j++) {
        S2 += S1[S1.length - 1 - i];
        if (j % 3 == 0) S2 += ' ';
    }
    S1 = '';
    for (var i = 0; i < S2.length; i++) {
        S1 += S2[S2.length - 1 - i];
    }
    return S1;
}
function f10() {

    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const date = new Date();
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    
    const startDate = new Date(year, month - 1, 1); 
    const endDate = new Date(year, month,  0); 

    const startDay = (startDate.getDay() + 6) % 7; 
    const endDayCount = endDate.getDate();

    let dayCount = 1;
    let calendarHtml = '';

    calendarHtml += '<h3>' + year  + '/' + month + '</h3>';
    calendarHtml += '<table class="calendar" border="1">';

    calendarHtml += '<tr>';
    for (let i = 0; i < 7; i++) calendarHtml += '<td>' + week[i] + '</td>';
    calendarHtml += '</tr>';

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>';
        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                calendarHtml += '<td></td>';
            } else if (dayCount > endDayCount) {
                calendarHtml += '<td></td>';
            } else {
                calendarHtml += '<td>' + (dayCount++) + '</td>';
            }
        }
        calendarHtml += '</tr>';
    }
    document.querySelector('#calendar').innerHTML = calendarHtml;
}
function hello1() {
    let greetingHTML = '<span style="color:red;">Привет, JavaScript!</span>';
    document.getElementById('greeting').innerHTML = greetingHTML;
}
function hello2(name = 'гость') {
    let msg = 'Привет, ' + name;
    document.getElementById('greeting2').innerHTML = msg;
}
function mul(m, n) {
    let N;
    if (n < 0) N = '(' + n + ')';
    else N = n;
    document.getElementById('multi').innerHTML = m + ' x ' + N + ' = ' + m * n;
    return m * n;
}
function repeat(str, n) {
    let String = '';
    if (n < 0) { 
        document.getElementById('repeat-str').innerHTML = 'N is Invalid!';
        return;
    }
    while (n--) {
        String += str;
    }
    document.getElementById('repeat-str').innerHTML = String;
}
function rgb(R = 0, G = 0, B = 0) {
    document.getElementById('lbl-rgb').innerHTML = 'rgb(' + R + ',' + G + ',' + B + ')';
}
function avg(array_str) {
    let sum = 0;
    let array = array_str.split(',');
    for (let i = 0; i < array.length;) {
        if (isNaN(array[i])) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    array.forEach(element => {
        sum += parseInt(element);
    });
    document.getElementById('result-16').innerHTML = 'Sum = ' + sum + ', Avg = ' + sum + ' / ' + array.length + ' = ' + (sum / array.length).toFixed(1);
}
function m(a, b) {
    let B = b;
    if (b < 0) B = '(' + B + ')';
    document.getElementById('result-17').innerText = a + ' x ' + B + ' = ' + mul(a, b);
}
function f18() {
    let o = function myFunction(a, b) { return a + b; };
    function operation(m, n, o) {
        return o(m, n);
    }
    document.getElementById('result-18').innerText = '3 + 5 = ' + operation(3, 5, o);
}
function addN(n) {
    let F = function double(a) { return a + n; };
    return F(n);
}
function f19() {
    document.getElementById('result-19').innerText = '5 + 5 = ' + addN(5);
}
function word(n) {
    let res;
    if (11 <= n % 100 && n % 100 <= 14) res = 'товаров';
    else if (5 <= n % 10 && n % 10 <= 9 || n % 10 == 0) res = 'товаров';
    else if (2 <= n % 10 && n % 10 <= 4) res = 'товара';
    else res = 'товар';
    document.getElementById('result-20').innerHTML = res;
}
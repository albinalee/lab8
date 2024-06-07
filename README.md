<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Ли Альбина Тевоновна</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №8. «JS»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p><b>Веб-разработка</b> — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются: </p>

<ul>
<li>Проектирование сайта или веб-приложения (сбор и анализ требований, разработка технического задания, проектирование интерфейсов);</li>
<li>Создание дизайн-концепции сайта;</li>
<li>Создание страниц;</li>
<li>Программирование;</li>
<li>Оптимизация и размещение материалов сайта;</li>
<li>Тестирование и внесение корректировок;</li>
<li>Публикация проекта на хостинге;</li>
<li>Обслуживание работающего сайта.</li>
</ul>

<br>

<h1 align = "center">Цели и задачи</h1>


<p>Цель: ознакомиться с принципами работы в JavaScript.</p>

<p>Задачи:</p>

<ul>
<li>Изучить синтаксис JavaScript</li>
<li>Научиться форматированию элементов c подключением скриптов</li>
</ul>

<p></p>

<h1 align = "center">Решение</h1>

<p>Для выполнения этой лабораторной работы, я пользовалась лекционным материалом и интернет-ресурсами для поиска решений задач оформления и для поиска медиаресурсов:</p>

<ul>
<li><a href="https://youtube.com/">YouTube</a></li>
<li><a href="https://stackoverflow.com/">Stack Overflow</a></li>
</ul>

<p>Примеры кода:</p>
<code>function f9() {
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
}</code>
</br></br>
<h1 align = "center">Вывод</h1>
<p>В результате проделанной лабораторной работы, я познакомилась с новыми элементами языка JavaScript и попрактиковалась в решении задач.</p>

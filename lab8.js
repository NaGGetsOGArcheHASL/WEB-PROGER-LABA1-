function ShowDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let a=document.createElement('div');
    let b=document.createElement('div');
    let c=document.createElement('div');
    let d=document.createElement('div');
    let e=document.createElement('div');
    a.innerHTML = 'Русская локаль ' + today.toLocaleString('ru-RU');
    b.innerHTML = 'Английская локаль ' + today.toLocaleString('en-UK');
    c.innerHTML = 'Американская локаль ' + today.toLocaleString('en-US');
    d.innerHTML = 'Японская локаль ' + today.toLocaleString('ja-JP');
    e.innerHTML = 'Греческая локаль ' + today.toLocaleString('hr-HR');
    out.appendChild(a);
    out.appendChild(b);
    out.appendChild(c);
    out.appendChild(d);
    out.appendChild(e);
}
function ShowDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date (inputDate.value);
    let daysCount = (today - birthday)/1000 /60 /60 /24;
    daysCount = Math.floor(daysCount);
    div.innerHTML='Дней прошло: ' + daysCount;
    div.className='birthdayout';
    div.id = 'childdiv';
    out.appendChild(div);
}

function clearbirthday() {
    let out = document.getElementById('birthdayout');
    let input = document.querySelector('input[type-date]');
    input.value='';
    out.removeChild(document.getElementById('childdiv'));
}
function showTime() {
    let today = new Date();
    let currentTime=today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML=currentTime;
}
setInterval(showTime, 1000);
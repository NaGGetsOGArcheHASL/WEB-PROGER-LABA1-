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
let cislo_minule = 50;
let body = 5;

function hra() {
    let v1 = vyber1();
    let v2 = vyber2();
    let v3 = vyber3();
    let v4 = vyber4();
    let v5 = parseInt(document.getElementById("cislicko").value);
    let cislo = Math.floor(Math.random() * 100) + 1;
    document.getElementById("cislo").value = cislo;
    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);
    console.log(v5);

    if(v1 === "vetsi"){
        if(cislo_minule < cislo) body++;
    else body--;
    }
    if(v1 === "mensi"){
        if(cislo_minule > cislo) body++;
        else body--;
    }
    if(v2 === "sude"){
        if(cislo % 2 === 0) body++;
        else body--;
    }
    if(v2 === "liche"){
        if(cislo % 2 !==  0) body++;
        else body--;
    }
    if(v3 === "1-25") {
        if(cislo >= 1 && cislo <= 25) body = body + 3;
        else body--;
    }
    if(v3 === "26-50") {
        if(cislo >= 26 && cislo <= 50) body = body + 3;
        else body--;
    }
    if(v3 === "51-75") {
        if(cislo >= 51 && cislo <= 75) body = body + 3;
        else body--;
    }
    if(v3 === "76-100") {
        if(cislo >= 76 && cislo <= 100) body = body + 3;
        else body--;
    }
    if(v4 === "ano") {
        let p = 0;
            for (let i = 1; i <= cislo; i++)
            {
                if(cislo % i === 0) p++;
            }
            if(p > 2) body--;
            else body = body + 3;
    }
    if(v4 === "ne") {
        let p = 0;
        for (let i = 1; i <= cislo; i++)
        {
            if(cislo % i === 0) p++;
        }
        if(p > 2) body++;
        else body = body - 3;
    }
    if(v5 === cislo) body = body + 20;
    document.getElementById("body").textContent ="Body: " +  body;
    document.getElementById("minule").textContent = "Minule číslo: " + cislo_minule;
    cislo_minule = cislo;
    if(body >= 20){
        document.getElementById("konec1").textContent = "Vyhrál jsi";
        setTimeout(function() {
            window.location.href = "jimbovo_kasino.html";
        }, 3000);
    }
    if(body <= 0) {
        document.getElementById("konec1").textContent = "Prohrál jsi";
        setTimeout(function() {
            window.location.href = "jimbovo_kasino.html";
        }, 3000);
    }
    return body;
}
function vyber1()
{
    let volba1 =document.getElementById("vetsi/mensi").value;
    return volba1;
}
function vyber2()
{
    let volba2 =document.getElementById("sude/liche").value;
    return volba2;
}
function vyber3()
{
    let volba3 =document.getElementById("sektor").value;
    return volba3;
}
function vyber4()
{
    let volba4 =document.getElementById("prvocislo").value;
    return volba4;
}


let hod = 0;
let skore = 1000;
let kredit = 200;
function kostky() {
    let v = vyber();
    let volba = document.getElementById("volba").value
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let c = Math.floor(Math.random() * 6) + 1;
    let d = Math.floor(Math.random() * 6) + 1;
    let e = Math.floor(Math.random() * 6) + 1;
            switch (v) {
                case 1:
                    console.log(a);
                    document.getElementById("hod").textContent = "Váš hod: " + a;
                    hod = a;
                    skore = skore - hod;
                    kredit = kredit - 1;
                    break;
                case 2:
                    console.log(a, b);
                    document.getElementById("hod").textContent = "Váš hod: " + a + " " + b;
                    hod = a + b;
                    if(a === b) hod = hod * 2;
                    skore = skore - hod;
                    kredit = kredit - 3;
                    break;
                case 3:
                    console.log(a, b, c);
                    document.getElementById("hod").textContent = "Váš hod: " + a + " " + b + " " + c;
                    hod = a + b + c;
                    if(a === b && a === c) {
                        hod = hod * 5;
                        skore = skore - hod;
                        kredit = kredit - 5;
                        break;
                    }
                    if(a === b || a === c || b === c) hod = hod * 2;
                    skore = skore - hod;
                    kredit = kredit - 5;
                    break;
                case 4:
                    console.log(a, b, c, d);
                    document.getElementById("hod").textContent = "Váš hod: " + a + " " + b + " " + c + " " + d;
                    hod = a + b + c + d;
                    if(a === b && a === c && a === d) {
                        hod = hod * 20;
                        skore = skore - hod;
                        kredit = kredit - 9;
                        break;
                    }
                    if((a === b && a === c) || (a === b && a === d) || (a === c && a === d) ||  (b === c && b === d)) {
                        hod = hod * 5;
                        skore = skore - hod;
                        kredit = kredit - 9;
                        break;
                    }
                    if((a === b && c === d) || (a === c && b === d) || (a === d && b === c)) {
                        hod = hod * 3;
                        skore = skore - hod;
                        kredit = kredit - 9;
                        break;
                    }
                    if(a === b || a === c || a === d || b === c || b === d || c === d) hod = hod * 2;
                    skore = skore - hod;
                    kredit = kredit - 9;
                    break;
                case 5:
                    console.log(a, b, c, d, e);
                    document.getElementById("hod").textContent = "Váš hod: " + a + " " + b + " " + c + " " + d + " " + e;
                    hod = a + b + c + d + e;
                    if(a === b && a === c && a === d && a === e) {
                        hod = hod * 50;
                        skore = skore - hod;
                        kredit = kredit - 15;
                        break;
                    }
                    if((a === b && a === c && a === d ) || (a === c && a === d && a === e ) || (a === b && a === d && a === e ) || (a === b && a === c && a === e )) {
                        hod = hod * 20;
                        skore = skore - hod;
                        kredit = kredit - 15;
                        break;
                    }
                    if((a === b && c === d && c === e)||(a === c  && b === d &&  b=== e )||(a === d && b === c && b === e) || (a === e && b === c && c === d) ||(b === c && a === d && a === e) || (b === d && a === c && a === e) || (b === e && a === c && a === d) ||(c === d && a === b && a === e) || (c === e && a === b && a === d) || (d === e && a === b && a === c)){
                        hod = hod * 12;
                        skore = skore - hod;
                        kredit = kredit - 15;
                        break;
                    }
                    if((a !== b && a !== c && a !== d && a !== e && a !== 1 && b !== c && b !== d && b !== e && b !== 1 && c !== d && c !== e && c !== 1 && d !== e && d !== 1 && e !== 1) || (a !== b && a !== c && a !== d && a !== e && a !== 6 && b !== c && b !== d && b !== e && b !== 6 && c !== d && c !== e && c !== 6 && d !== e && d !== 6 && e !== 6)){
                        hod = hod * 8;
                        skore = skore - hod;
                        kredit = kredit - 15;
                        break;
                    }
                    if((a === b && a === c) || (a === b && a === d) || (a === b && a === e) || (a === c && a === d) || (a === c && a === e) ||(a === d && a === e) || (b === c && b === d) || (b === c && b === e) || (b === d && b === e) ||(c === d && c === e)){
                        hod = hod * 5;
                        skore = skore - hod;
                        kredit = kredit - 15;
                        break;
                    }
                    if((a === b && c === d) || (a === b && c === e) || (a === b && d === e) || (a === c && b === d) || (a === c && b === e) || (a === c && d === e) || (a === d && b === c) || (a === d && b === e) || (a === d && c === e) || (a === e && b === c) || (a === e && b === d) || (a === e && c === d) || (b === c && d === e) || (b === d && c === e) || (b === e && c === d)){
                        hod = hod * 3;
                        skore = skore - hod;
                        kredit = kredit - 15;
                        break;
                    }
                    if(a === b || a === c || a === d || a === e || b === c || b === d || b === e || c === d || c === e || d === e) hod = hod * 2;
                    skore = skore - hod;
                    kredit = kredit - 15;
                    break;
        }
        if(skore <= 0){
            document.getElementById("konec").textContent = "Vyhrál jsi";
            setTimeout(function() {
                window.location.href = "index.html";
            }, 3000);
        }
        if(kredit <= 0 && skore > 0){
            document.getElementById("konec").textContent = "Prohrál jsi";
            setTimeout(function() {
                window.location.href = "index.html";
            }, 3000);
        }
    document.getElementById("celkem").textContent = "Celkem: " + hod;
    document.getElementById("skore").textContent = "Zbývá: " + skore;
    document.getElementById("kredity").textContent = "Počet zbývájících kreditů: " + kredit;
return hod;
}
function vyber()
{
    let volba =parseInt(document.getElementById("volba").value);
    return volba;
}


function compare() {
    let text1 = document.getElementById("text1").value
    let text2 = document.getElementById("text2").value
    let newText1 = ""
    let newText2 = ""
    console.log(text1);
    console.log(text1.length);
    let n;
    let flag;
    if (text1.length < text2.length) {
        n = text1.length
        flag = 0
    }
    else {
        n = text2.length
        flag = 1
    }
    for (let i = 0; i < n; i++) {
        if (text1[i] === text2[i]) {
            newText1 = newText1 + text1[i];
            newText2 = newText2 + text2[i];
        }
        else {
            newText1 = newText1 + text1[i].fontcolor("green")
            newText2 = newText2 + text2[i].fontcolor("green")
        }
    }

    if (flag) {

        for (let i = n; i < text1.length; i++) {
            newText1 = newText1 + text1[i].fontcolor("green")
        }
    }
    else {

        for (let i = n; i < text2.length; i++) {
            newText2 = newText2 + text2[i].fontcolor("green")
        }
    }

    console.log(newText1);
    console.log(newText2);

    document.getElementById("p1").innerHTML = newText1;
    document.getElementById("p2").innerHTML = newText2;

    document.getElementById("cont1").style.display = "none"
    document.getElementById("cont2").style.display = "block"
}

function normal() {

    let text1 = document.getElementById("p1").innerText
    let text2 = document.getElementById("p2").innerText

    console.log(text1);
    console.log(text2);

    document.getElementById('text1').value = text1
    document.getElementById('text2').value = text2

    document.getElementById("cont1").style.display = "block"
    document.getElementById("cont2").style.display = "none"
}
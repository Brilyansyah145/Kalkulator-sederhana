let layar = document.getElementById("layar");
function clearInput() {
    layar.value= ""; 
    console.log("dihapus");
}
function backspace() {
    let masukkan = layar.value;
    let digit = masukkan.length;
    layar.value = masukkan.slice(0, digit -1);
    // untuk menampilkan ke inspect (console.log(masukkan.slice(0, digit -1));
}
function addToInput(angka) {
    layar.value = layar.value + angka;
    console.log(" input angka " + angka);
}
function calculate() {
    layar.value = eval(layar.value);
    console.log(" menghitung");
}



// if(operator === '+'){
//     result = parseInt(num1) + parseInt(num2);
// } else if(operator === '-'){
//     result = parseInt(num1) - parseInt(num2);
// } else if(operator === '*'){
//     result = parseInt(num1) * parseInt(num2);
// } else if(operator === '/'){
//     result = parseInt(num1) / parseInt(num2);
// } else {
//     alert("Operator tidak valid!");
// }

const [class1_rus, class1_azbuka, class1_matematika, class1_literatura] = 
[document.getElementById("class1_rus"), document.getElementById("class1_azbuka"), document.getElementById("class1_matematika"), document.getElementById("class1_literatura")];

const [class2_rus, class2_matematika, class2_okrmir, class2_literatura] = 
[document.getElementById("class2_rus"), document.getElementById("class2_matematika"), document.getElementById("class2_okrmir"), document.getElementById("class2_literatura")];

const [class3_rus, class3_matematika, class3_okrmir, class3_literatura] = 
[document.getElementById("class3_rus"), document.getElementById("class3_matematika"), document.getElementById("class3_okrmir"), document.getElementById("class3_literatura")];

const [class4_rus, class4_matematika, class4_okrmir, class4_literatura] = 
[document.getElementById("class4_rus"), document.getElementById("class4_matematika"), document.getElementById("class4_okrmir"), document.getElementById("class4_literatura")];

const mainpicture = document.getElementById("main-picture");
const searchInput = document.getElementById("searches");

document.getElementById("search-button").addEventListener('click', function() {
    let searches = searchInput.value;
    console.log(searches);
})

// load obfuscated email using javascript 

// split into bits
const michael = "michael";
const zt = "zt";
const yao = "yao";
const gmail = "gmail";
const com = "com";

// combine
const link = document.getElementById('email');
link.href = `mailto:${michael}.${zt}.${yao}@${gmail}.${com}`;
link.textContent = `${michael}.${zt}.${yao}@${gmail}.${com}`;
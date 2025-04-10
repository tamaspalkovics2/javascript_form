
// Az űrlap elérése, eseménykezelő hozzáadása, esemény objektum hozzáadása
document.getElementById('userForm'),addEventListener('submit', (e) => {
    //Űrlap viselkedés letiltása (csak adatforrás)
    e.preventDefault();
    // Formdata objektum létrehozása, az űrlap esemény hozzáadása
    const myFormData = new FormData(e.target);
    // Az űrlap elemeit tároló objektum létrehozása
    const userData = Object.fromEntries(myFormData);
    console.log(userData);

    const userJSON = JSON.stringify(userData, null,2);
    localStorage.setItem('userDataKey', userJSON);
})
// obtener los datos de la API
fetch("https://my-json-server.typicode.com/racordovaindracompany/accounts/accounts")
    .then(response => response.json())
    .then(accounts => {
        /* ============================== Cuentas ================================ */
        // filtra la cuenta según el ID
        const cuenta2 = accounts.filter(account => account.id == 1002);

        // inserta el balance de cada cuenta activa en un elemento HTML
        const cuenta2Element = document.getElementById("cuenta2");
        cuenta2.forEach(account => {
            cuenta2Element.innerHTML += "S/ " + account.balance + "<br>" + "<p>Saldo disponible</p>";
        });

    });
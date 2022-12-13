// obtener los datos de la API
fetch("https://my-json-server.typicode.com/racordovaindracompany/accounts/accounts")
    .then(response => response.json())
    .then(accounts => {
        /* ============================== Cuentas ================================ */
        // filtra la cuenta según el ID
        const cuenta3 = accounts.filter(account => account.id == 1004);

        // inserta el balance de cada cuenta activa en un elemento HTML
        const cuenta3Element = document.getElementById("cuenta3");
        cuenta3.forEach(account => {
            cuenta3Element.innerHTML += "S/ " + account.balance + "<br>" + "<p>Saldo disponible</p>";
        });

    });
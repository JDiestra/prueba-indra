// obtener los datos de la API
fetch("https://my-json-server.typicode.com/racordovaindracompany/accounts/accounts")
    .then(response => response.json())
    .then(accounts => {
        /* ============================== Cuentas ================================ */
        // filtra las cuentas que tengan un estado "ACTIVE"
        const activeAccounts = accounts.filter(account => account.status === "ACTIVE" && account.type == "ACCOUNT");

        // inserta el balance de cada cuenta activa en un elemento HTML
        const balancesElement = document.getElementById("balances");
        activeAccounts.forEach(account => {
            balancesElement.innerHTML += "S/ " + account.balance + "<br>" + "<p>Saldo disponible</p>";
        });

        /* ============================== Tarjetas ================================ */
        // filtra las cuentas que tengan un estado "TARJETAS"
        let nuevo = accounts.filter(tarjeta => tarjeta.type == "CREDIT_CARD" && tarjeta.status == "ACTIVE");
        console.log(nuevo);

        // inserta el creditline de cada cuenta activa en un elemento HTML
        const tarjElement = document.getElementById("balances2");
        nuevo.forEach(account => {
            tarjElement.innerHTML += "S/ " + account.creditline + "<br>" + "<p>Línea de crédito</p>";
            console.log(account);
        });

    });
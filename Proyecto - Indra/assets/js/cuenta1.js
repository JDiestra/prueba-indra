// obtener los datos de la API


let arreglo =
    [
        {
            "id": 1001,
            "type": "ACCOUNT",
            "name": "CUENTA SUELDO",
            "balance": 4000,
            "creditline": "",
            "status": "ACTIVE",
            "name_format": "Cuenta sueldo",
            "movimientos": [
                {
                    "id": 1,
                    "fecha": "23 agosto 2021",
                    "detalle": [
                        {
                            "id": 1,
                            "concepto": "Compra comercial",
                            "monto": 30,
                            "tipo_gasto": "egreso"
                        }
                    ]
                },
                {
                    "id": 2,
                    "fecha": "18 agosto 2021",
                    "detalle": [
                        {
                            "id": 2,
                            "concepto": "Depósito 0002",
                            "monto": 50,
                            "tipo_gasto": "ingreso"
                        }
                    ]
                },
                {
                    "id": 3,
                    "fecha": "29 junio 2021",
                    "detalle": [
                        {
                            "id": 1,
                            "concepto": "Pago de servicio",
                            "monto": 70,
                            "tipo_gasto": "egreso"
                        }
                    ]
                }
            ],
        }
    ]
const monto_cuenta = document.getElementById("monto_cuenta");
const cuenta2Element = document.getElementById("arreglos");
const fecha_movimientos = document.getElementById("movimientos");
arreglo.forEach(account => {
    cuenta2Element.innerHTML += "S/ " + account.balance + "<br>" + "<p>Saldo disponible</p>";

    account.movimientos.forEach(movimientos => {
        fecha_movimientos.innerHTML += movimientos.fecha+ "<br>" + "<p>Compra comercial</p>";


        movimientos.detalle.forEach(detalle => {
            monto_cuenta.innerHTML += "S/ " + detalle.monto+ "<br><br><br>";
            /* monto_cuenta.innerHTML += "S/ " + detalle.concepto+ "<br>"; */
        });
    });



});


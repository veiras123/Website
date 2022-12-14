
paypal.Buttons({

    style : {
        color: 'blue',
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '800'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
            window.location.replace("http://localhost/MobileShop/checkout.php")
        })
    },
    onCancel: function (data) {
        window.location.replace("http://localhost/MobileShop/Oncancel.php")
    }
}).render('#paypal-payment-button');



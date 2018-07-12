console.log('hello index')
require('./index.css')
var _mm = require('util/mm.js');
_mm.request({
    url: _mm.getServerUrl('/cart/get_cart_product_count.do'),
    success: function () {
        console.log(res);
    },
    error: function (res) {
        console.log(res);
    }
})
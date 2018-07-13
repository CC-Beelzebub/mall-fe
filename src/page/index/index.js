require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
navSide.init({
    name: 'order-list'
});
// _mm.request({
//     url: _mm.getServerUrl('/user/login.do'),
//     success: function (res) {
//         console.log(res);
//     },
//     error: function (res) {
//         console.log(res);
//     }
// })

// var html = '<div>{{data}}</div>';
// var data = {
//     data:'test'
// }
// console.log(_mm.renderHtml(html,data));
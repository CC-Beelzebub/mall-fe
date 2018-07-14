'use strict';
require('./index.css');
require('page/common/header/index.js');
var nav = require('page/common/nav/index.js');
var _mm = require('util/mm.js');
var _order = require('service/order-service.js');
var _address = require('service/address-service.js');
var _product = require('service/product-service.js');
var templateAddress = require('./address-list.string');
var templateProduct = require('./product-list.string');

var page = {
    data: {
        selectedAddressId: null
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },

    onLoad: function () {
        this.loadAddressList();
        this.loadProductList();
    },
    bindEvent: function () {
        var _this = this;

    },
    //加载地址信息
    loadAddressList: function () {
        var _this = this;
        //获取地址列表
        _address.getAddressList(function (res) {
            var AddressListHtml = _mm.renderHtml(templateAddress, res);
            $('.address-con').html(AddressListHtml);
        }, function (errMsg) {
            $('.address-con').html('<p class="err-tip">地址加载失败，请刷新后重试</>');
        })
    },
    //加载商品信息
    loadProductList: function () {
        debugger;
        var _this = this;
        //加载商品信息
        _order.getProductList(function (res) {
            var PruductListHtml = _mm.renderHtml(templateProduct, res);
            $('.product-con').html(PruductListHtml);
        }, function (errMsg) {
            $('.product-con').html('<p class="err-tip">商品加载失败，请刷新后重试</>');
        })
    }

};
$(function () {
    page.init();
})
var _cities = {
    cityInfo: {
        '北京': ['北京'],
        '上海': ['上海'],
        '天津': ['天津'],
        '重庆': ['重庆'],
        '河北省': ['石家庄', '张家口']
    },
    //获取所有的省份
    getProvinces: function () {
        var provinces = [];
        for (var item in this.cityInfo) { //循环效率不高，循环对象可以，数组不建议使用
            provinces.push(item);
        }
        return provinces;
    },
    //获取某省份的所有城市
    getCities: function (provinceName) {
        return this.cityInfo[provinceName] || [];
    }
}
module.exports = _cities;
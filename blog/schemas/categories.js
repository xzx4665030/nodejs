/**
 * Created by sam on 2017/5/15.
 */

var mongoose = require('mongoose')

//分类的表结构
var category = new mongoose.Schema({
    //分类名称
    name: String
})

module.exports = category
var time = require("../../utils/util")
Page({
  data:{
    lists:[
      {
        content:"hello",
        time:Date.now(),
        id:1
      }
    ]
  },
  onLoad(){
    initData(this);
  },
  onShow(){
    initData(this);
  },
  edit(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../add/add?id='+id
    })
  },
  add(){
    wx.navigateTo({
      url: '../add/add'
    })
  }
})

function initData(page){
  var arr = wx.getStorageSync('txt');
  if(arr.length){
    arr.forEach((item)=>{
      var t = new Date(Number(item.time));
      console.log(t)
      item.time = time.formatTime(t);
    })
    page.setData({
      lists:arr
    })
  }
}
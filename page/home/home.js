// page/home/home.js

//获取全局app的数据
const app = getApp();
const name = app.globalDate.name;
const age = app.globalDate.age;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'yangclenglong',
    age:13,
    students: [
      { name: 'q', age: 12, num: 99, class: '中二' },
      { name: 'a', age: 11, num: 97, class: '中二' },
      { name: 'w', age: 13, num: 93, class: '中三' },
      { name: 'm', age: 14, num: 96, class: '中一' }
    ],
    counter:0,
  },
  handleBtnClick(){
     this.setData({
       counter:this.data.counter +=1
     })
  },
  jian(){
    this.setData({
      counter:this.data.counter -=1
    })
  },
  //用户授权
  handleGetUserInfo(event){
    console.log(event)
  }
})
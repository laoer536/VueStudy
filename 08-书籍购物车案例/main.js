const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《刘杰的幸福生活》',
        data: '2020-9',
        price: 85.00,
        count: 0
      },
      {
        id: 2,
        name: '《刘杰的代码之旅》',
        data: '2020-2',
        price: 59.00,
        count: 0
      },
      {
        id: 3,
        name: '《老二想学习前端》',
        data: '2020-10',
        price: 10.05,
        count: 0
      },
      {
        id: 4,
        name: '《老二脱单大全》',
        data: '2020-7',
        price: 20.08,
        count: 0
      }
    ]
  },
  methods: {
    /*getFinalPrice(price){
      return '¥'+ price.toFixed(2)
    }*/
    increment(index) {      /*函数方法实现点击数量的增减操作*/
      this.books[index].count++
    }
    ,
    decrement(index) {
        this.books[index].count--
    },
    removeHandle(index){      /*移除一项的操作函数*/
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      //1.普通的for循环
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++){
        totalPrice += this.books[i].price*this.books[i].count
      }
      //方法2
      /*let totalPrice = 0;*/
      for(let i in this.books){
        totalPrice += this.books[i].price*this.books[i].count
      }
      //方法3  最简便
      /*let totalPrice = 0;*/
      for (let item of this.books){
        totalPrice += item.price*item.count
      }
      //利用高阶函数reduce(最后不需要有return totalPrice 这里返回的值直接付给了totalPrice)
      return this.books.reduce(function(preValue,book){
        return preValue + book.price*book.count
      },0)
      return totalPrice
    }
  },
  filters: {      /*filters——过滤器  会将item.price作为参数传到price里面来*/
    showPrice(price){
      return '¥'+ price.toFixed(2)
    }
  }
})
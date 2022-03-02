
new Vue({
  el: '#books',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2006-9',
        price: 85,
        num: 1,
      },
      {
        id: 2,
        name: 'UNIX编程艺术',
        date: '2006-9',
        price: 59,
        num: 1,
      },
      {
        id: 3,
        name: '编程珠玑',
        date: '2006-9',
        price: 39,
        num: 1,
      },
      {
        id: 4,
        name: '代码大全',
        date: '2006-9',
        price: 128,
        num: 1,
      }
    ]
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for( let i = 0; i < this.books.length ; i++) {
        totalPrice += this.books[i].price * this.books[i].num
      }
      return totalPrice
    } 
  },
  methods: {
    sub(index) {
      if ( this.books[index].num <=1) {
       return alert('需选购1件以上欧')
      }else {
        return this.books[index].num--
      }
    },
    add(index) {
      return this.books[index].num++
    },

    /* 强调一下： 要删除结构，不需要操作DOM，所有都是数据渲染出来的，
    直接删数据即可 */
    del(index) {
      return this.books.splice(index , 1)
    }
  },

 /* // filters 过滤器是Vue对象的属性,html中的这种写法 {{item.price | showPrice}}
  表示会把item.price作为实参传入到showPrice函数中

 */ 
  filters: {
    showPrice(price) {       
      return '￥' + price.toFixed(2)
    }
  }

})
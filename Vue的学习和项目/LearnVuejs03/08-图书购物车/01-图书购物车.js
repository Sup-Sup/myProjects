
  
    const app = new Vue({
      el: '#app',
      data: {
        message:'你好哇',
        counter: 1,
        currentIndex:0,
        sum: 0,
        // 什么时候该适用对象呢？ 
        // 如下：当很多的东东，都有相同的格式（对象属性）
        books: [
          {
            id:1,
            name:'算法导论',
            date: '2006-9',
            price: 85.00,
            count:1
          },
          {
            id:2,
            name:'UNIX编程艺术',
            date: '2006-2',
            price: 59.00,
            count:1
          },
          {
            id:3,
            name:'编程珠玑',
            date: '2008-10',
            price: 39.00,
            count:1
          },
          {
            id:4,
            name:'代码大全',
            date: '2006-3',
            price: 128.00,
            count:1
          }
        ]
      },
      computed: {
        totalPrice(){
          let sum = 0;
          // for( let i=0; i<this.books.length;i++){
          //   sum = sum + this.books[i].count*this.books[i].price;
          // }
          // for( let i in this.books){  // 可以更方便的拿到数组下标
          // sum = sum + this.book[i].count*this.books[i].price  
          // }

          // 还有一种方法 -- 直接拿到数组的item(也就是一个个的json对象)
          // 注意数组中的元素是of，数组中的下标是in
          for(let item of this.books){
             sum = sum + item.count * item.price ;
          }
          return this.finalPrice(sum);
        }
      },
      methods: {
        finalPrice(price){
          return '￥'+price.toFixed(2)
        },

        // 过滤器
        // filters: {
        //   showPrice:function(price){
        //     return '￥'+price.toFixed(2)
        //   }
        // },
        subtraction(index){
          if(this.books[index].count>=1)
           this.books[index].count--;
          else
            alert("购买数量要大于0喔！")
        },
        add(index){
          this.books[index].count++;
        },
        // 删除这一个数组的对象，相当于在视图层不会渲染出这个对象来
        clickDel(index){
          this.books.splice(index,1);  
        }
      }
    })     
   
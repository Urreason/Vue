const app = new Vue({
  el: '#app',
  data:{
    books: [
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price: 85.00,
        count: 1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-2',
        price: 56.00,
        count: 1
      },
      {
        id:3,
        name:'《大话数据结构》',
        date:'2008-10',
        price: 39.00,
        count: 1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price: 100.00,
        count: 1
      } 
    ]   
  },
  methods: {
    add(index) {
      // console.log(index);
      this.books[index].count++
    },
    sub(index) {
      // console.log(index);
      this.books[index].count--
    },
    remo(index) {
      this.books.splice(index,1);
    }
  },
  computed: {
    fullPrice() {
      let fullPrice = 0;
      for( let i=0;i<this.books.length;i++) {
        fullPrice += this.books[i].price*this.books[i].count;
      }
      return fullPrice;
    }
  },
  filters: {
    showPrice(price) {
      return '￥'+ price.toFixed(2);
    }
  }
})
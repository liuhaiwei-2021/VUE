var app = new Vue({
    el: '#app',
    data:{    
        books:[
            {
                Name:'UI',
                Published: 2021,
                Price:110.00,
                count:1
            },
            {
                Name:'linux',
                Published: 2021,
                Price:110.00,
                count:1
            },
            {
                Name:'VUE',
                Published: 2021,
                Price:110.00,
                count:1
            },
            {
                Name:'bootstrap',
                Published: 2021,
                Price:110.45,
                count:1
            },
            {
                Name:'CSS',
                Published: 2021,
                Price:110.00,
                count:1
            }
        ]
        
    },
    methods:{
        add(index){
           this.books[index].count++
        },
        sub(index){
            this.books[index].count--
        },
        remove(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            totalPrice=0
            // for method
            // for(let book of this.books){
            //     totalPrice += book.Price * book.count
            // }
            // return totalPrice

         return this.books.reduce(function(previous,book){
            return  previous + book.Price*book.count
         },0)
        }

    },
    filters:{
        showPrice(price){
            return '$' + price.toFixed(2)
        }
    }                    
})


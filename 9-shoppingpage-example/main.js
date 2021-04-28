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
            for(let i=0; i< this.books.length; i++){
                totalPrice += this.books[i].Price * this.books[i].count
            }
            return totalPrice
        }

    },
    filters:{
        showPrice(price){
            return '$' + price.toFixed(2)
        }
    }                    
})
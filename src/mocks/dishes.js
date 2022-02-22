export const initialDishes = [
   {
     'id': 0,
     'name':'Uthappizza',
      'image': 'assets/images/uthappizza.png',
     'category': 'mains',
     'label':'Hot',
     'price':'4.99',
     'description':'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
     comments: {
      "author" : "John Lemon",
       "comment": "Image all eatable, living in conFusion!",
       "date":new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit' }).format(new Date()),
    },          
   },
  {
     'id': 1,
     'name':'Zucchipakoda',
     'image': '/assets/images/zucchipakoda.png',
     'category': 'appetizer',
     'label':'',
     'price':'1.99',
     'description':'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
     comments: {
      "author" : "Paul McVites",
       "comment": "sends anyone to heaven, I wish I could get my mother in law to eat it!",
       "date":new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit' }).format(new Date()),
    },                        
   },
  {
     'id': 2,
     'name':'Vadonut',
     'image': '/assets/images/vadonut.png',
     'category': 'appetizer',
     'label':'New',
     'price':'1.99',
     'description':'A quintessential ConFusion experience, is it a vada or is it a donut?',
     comments: {
      "author" : "Michael Jaikishan",
       "comment": "Eat it, just eat it!",
       "date":new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit' }).format(new Date()),
    },             
   },
  {
     'id': 3,
     'name':'ElaiCheese Cake',
     'image': '/assets/images/elaicheesecake.png',
     'category': 'dessert',
     'label':'',
     'price':'2.99',
     'description':'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
     comments: {
      "author" : "Ringo Starry",
       "comment": "Its your birthday, were gonna party",
       "date":new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit' }).format(new Date()),
    },                  
   }
]

export const DISHES =
    [
        {
        id: 0,
        name:'Uthappizza',
        image: '/assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        featured: true,
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                    
        },
        {
        id: 1,
        name:'Zucchipakoda',
        image: '/assets/images/zucchipakoda.png',
        category: 'appetizer',
        label:'',
        price:'1.99',
        featured: false,
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
        },
        {
        id: 2,
        name:'Vadonut',
        image: '/assets/images/vadonut.png',
        category: 'appetizer',
        label:'New',
        price:'1.99',
        featured: false,
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
        },
        {
        id: 3,
        name:'ElaiCheese Cake',
        image: '/assets/images/elaicheesecake.png',
        category: 'dessert',
        label:'',
        price:'2.99',
        featured: false,
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
        }
    ];
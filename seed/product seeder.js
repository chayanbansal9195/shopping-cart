var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser:true});

var products=[
    new Product({
  imagepath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  title:'Gothic Video Game',
  price: 1000
}),
new Product({
    imagepath:'https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg',
    title:'Far Cry 5',
    price: 2000
  }),
  new Product({
    imagepath:'https://blogs-images.forbes.com/erikkain/files/2017/09/open-beta.jpg',
    title:'Call of Duty WW2',
    price: 3000
  })

];
var done=0;
for(var i=0;i< products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}
function exit(){
mongoose.disconnect();
}
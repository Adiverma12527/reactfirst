import './App.css';
import Card from "./Card"

function App() {
const  useone={
   Hero:'https://5.imimg.com/data5/ANDROID/Default/2022/10/CO/RD/NQ/19051907/product-jpeg-500x500.jpg ',
  productname: "adidasshoes",
  description: "good quality produce made by adidas company",
  prize : "50&"
  
}
const usetwo={
  Hero: 'https://5.imimg.com/data5/SELLER/Default/2021/7/NM/FP/AC/102866127/1-1000x1000.jpg',
  productname: " fastrackwataches",
  description: "good quality produce made by fastrack company",
  prize : "90&"
  
}
const usethree={
Hero :'https://m.media-amazon.com/images/I/51ShjlX1bkL._SL1044_.jpg ',
  productname: "onemore earbuds",
  description: "good quality produce made by onemore company",
  prize : "200&"  
}
const usefour={ Hero:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU03sCSWc2qCdGTczbbuNpO7epGcM_SUIgfg&usqp=CAU' ,
  productname: "iphone 13",
  description: "good quality product made by apple company",
  prize : "1999&"
  }
  const usefive={
    Hero :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxK0dmKdSfdxBFrkYH-dI5iRlRgqB_foZZ1Q&usqp=CAU' ,
    productname: "lgfreeze",
    description: "good quality produce made by  lg company",
    prize : "499&"
    }

    function alertuserone(){
      alert ("shoes of brand adidas has of rupees 50& added  in your cart, please proceed to pay")
    }
    
    function alertusertwo(){
      alert ("shoes of brand  fastrack watch has of rupees 90& added  in your cart, please proceed to pay")
    }
    
    function alertuserthree(){
      alert ("shoes of brand onemore earbud has of rupees 200& added  in your cart, please proceed to pay")
    }
    
    function alertuserfour(){
      alert ("shoes of brand iphone has of rupees 1999& added  in your cart, please proceed to pay")
    }
    
    function alertuserfive(){
      alert ("shoes of brand lg has of rupees 499& added  in your cart, please proceed to pay")
    }
    return(<div className="App">
     <div> <Card usedetail={useone}  alertfunction={alertuserone}  /> </div>
      <Card usedetail={usetwo} alertfunction={alertusertwo}/>
      <Card usedetail={usethree} alertfunction={alertuserthree}/>
      <Card usedetail={usefour} alertfunction={alertuserfour}/>
      <Card  usedetail={usefive} alertfunction={alertuserfive}/>
      </div>
    )
    }

export default App;

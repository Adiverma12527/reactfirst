import './App.css';
import "./card.css"
import img1 from './adi.jpeg';
import img2 from './asii.jpg';
import img3 from './astrology.jpg';
import Card from './card';
function App() {
  const adi2={border: '1px solid black',
    height: '100px',
    width:'auto', 
    borderRadius: '100%'}
    const buttoncss={
      backgroundColor : 'green',
      border : "2px solid green",
      borderRadius: "10px",
      width:"80px",
      padding:"auto"
    }


    function Button4(){
    alert ('my self aditya verma')

    }
    function Button5(){
      alert('my name is franchio')
    }
    function Button6(){
         alert(" my self trando")
    }
    

  
  return (<div className="App"><div style={{ height:"550px", backgroundColor: "dimgray", border: "5px solid dimgray",borderRadius: "50px", margin:"50px", padding:"50px" }}>
    <Card image={img1} neww={adi2} heading=<h5> UI UX Designer</h5> heading2=<h1> aditya verma</h1> description=<p>aditya verma is a student of functionup and he is passed out his graduation(bca)in 2022 as well as completed his o-level diploma in 2023 which is based on computer
     diploma.</p>   onclickfunction={Button4} buttoncss1={buttoncss}/></div>
     <div  style={{backgroundColor: "dimgray", border: "5px solid dimgray",borderRadius: "50px", padding:"50px", margin:"50px"}}><Card image={img2} neww={adi2} heading=<h5> UI UX Designer</h5> heading2=<h1> franchio </h1> description=<p> he is create the interface of an app , website, or other interactive media. Their work <br/>
     includes colllaborating with product managers and engineers to gather requirement from users before designing ideas that can be communicated using storyboards. the also process flow or sitemaps</p>
     onclickfunction={Button5} buttoncss1={buttoncss }/></div>
 <div style={{backgroundColor: "dimgray", border: "5px solid dimgray",borderRadius: "50px" ,padding: "auto" ,margin: "50px" }}><Card image={img3} neww={adi2} heading=<h5> UI UX Designer</h5> heading2=<h1> trando </h1> description=<p> he is create the interface of an app , website, or other interactive media. Their work <br/>
 includes colllaborating with product managers and engineers to gather requirement from users before designing ideas that can be communicated using storyboards. the also process flow or sitemaps</p>
 onclickfunction={Button6} buttoncss1={buttoncss }/></div></div>)
}

export default App;

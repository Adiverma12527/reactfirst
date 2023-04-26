
export default function Card({usedetail,alertfunction,stylish ,roni}){

    const{ Hero,productname,description,prize}=usedetail

    return(
        <div className='text' >
        <img
        src={Hero}
        style={roni}
        height = '200px'
        width = 'auto'
        border= '1px solid black' 
        borderRadius= '10px'
    />
        <h2>{productname}</h2>
        <h4>{description}</h4>
        
        
        <h1>{prize}</h1>
        <button onClick={alertfunction} style={stylish}>ADD TO CART</button>
        </div>
    )
}
import axios from "axios";
import { Component } from "react";
import style from "./style.module.css"
import { Circles } from  'react-loader-spinner'
class ProductList extends Component{
    constructor(){
        super()
        this.state={
            Arr1:[],
            Arr2:[],
            cost:0
        }
    }
    handleClick1=(val)=>{
        console.log(val)
        alert(`Id: ${val.id}\nTitle: ${val.title}\nPrice: ${val.price}\nDescription: ${val.description}\nRating: ${val.rating.rate}`)
    }
    handleClick2=(val)=>{
        let Arr3=this.state.Arr2.filter((ele)=>{
            return ele.id!==val.id
        })
        const sumTotal = Arr3.reduce((sum, { price}) => sum + price, 0)
        this.setState({
            Arr2:Arr3,
            cost:sumTotal
        })
    }
    handleClick3=()=>{
        let Arr3=this.state.Arr1.filter((ele)=>{
            return ele.category==="men's clothing"
        })
        const sumTotal = Arr3.reduce((sum, { price}) => sum + price, 0)
        this.setState({
            Arr2:Arr3,
            cost:sumTotal
        })
    }
    handleClick4=()=>{
        let Arr3=this.state.Arr1.filter((ele)=>{
            return ele.category==="women's clothing"
        })
        const sumTotal = Arr3.reduce((sum, { price}) => sum + price, 0)
        this.setState({
            Arr2:Arr3,
            cost:sumTotal
        })
    }
    handleClick5=()=>{
        let Arr3=this.state.Arr1.filter((ele)=>{
            return ele.category==="electronics"
        })
        const sumTotal = Arr3.reduce((sum, { price}) => sum + price, 0)
        this.setState({
            Arr2:Arr3,
            cost:sumTotal
        })
    }
    handleClick6=()=>{
        let Arr3=this.state.Arr1.filter((ele)=>{
            return ele.category==="jewelery"
        })
        const sumTotal = Arr3.reduce((sum, { price}) => sum + price, 0)
        this.setState({
            Arr2:Arr3,
            cost:sumTotal
        })
    }
    handleClick7=()=>{
        const sumTotal = this.state.Arr1.reduce((sum, { price}) => sum + price, 0)
        this.setState({
            Arr2:this.state.Arr1,
            cost:sumTotal
        })
        
    }
    handleClick8=()=>{
        this.setState({
            Arr2:[],
            cost:0
        })
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products').then(response=>{
            this.setState({
                Arr1:response.data,
                Arr2:response.data,
            })
        const sumTotal = this.state.Arr1.reduce((sum, { price}) => sum + price, 0)
        this.setState({
            cost:sumTotal
        })
        })
    }
    render(){
        return(
            <>
        <div style={{marginBottom:'90px'}}>
        <nav className="navbar navbar-expand-lg navbar-success bg-success p-3 fixed-top">
          <a className="navbar-brand text-white" href="yt">
            Branded Kart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="btn btn-success" onClick={this.handleClick7}>All Categories</button>
              </li>
              <li className="nav-item">
              <button className="btn btn-success" onClick={this.handleClick3}>Men's Clothing</button>
              </li>
              <li className="nav-item">
              <button className="btn btn-success" onClick={this.handleClick4}>Women's Clothing</button>
                
              </li>
              <li className="nav-item">
              <button className="btn btn-success" onClick={this.handleClick5}>Elecronics</button>
              </li>
              <li className="nav-item">
              <button className="btn btn-success" onClick={this.handleClick6}>Jewelery</button>
              </li>
              <li className="nav-item">
              <button className="btn btn-success" onClick={this.handleClick8}>Remove All Products</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning">Total Cost Of products is: {this.state.cost}</button>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        <div className={style.product}>
         {
          this.state.Arr2.length>0
          ?
          this.state.Arr2.map((val)=>{
            return(
                <div className="card" style={{ width: 250,height:'fit-content' }}>
              <img className="card-img-top" src={val.image} alt="Card cap" width={'100%'} height={150}/>
              <div className="card-body">
                <h5 className="card-title">Id : {val.id}</h5>
                <p className="card-text">{val.title}
                  </p>
                <button className="btn btn-primary" onClick={()=>this.handleClick1(val)}>
                  SeeMore
                </button><br/><br/>
                <button className="btn btn-info" onClick={()=>this.handleClick2(val)}>
                  Remove From Products
                </button>
              </div>
            </div>
            )
                })
                :
                <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
         }
        </div>
        <div style={{textAlign:'center',backgroundColor:'rgb(3, 143, 57)',lineHeight:5,position:'sticky',bottom:0,marginTop:'30px',color:'white'}}>
          SR Web Application @2023
        </div>
      </>
        )
    }
}
export default ProductList;
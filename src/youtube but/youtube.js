import { Component } from "react";

class YoutubeButton extends Component{
    state={
        isSubscribe:false,
        buttontext:"please subscribe"
    }
    handleClick=()=>{
        this.setState({
                isSubscribe:true,
                buttontext:"thanks subscribing" 
            },
            ()=>{
                alert(this.state.isSubscribe?"thanks":"subscribe")
            })
    }
    
    render(){
        return(
            <>
            <button onClick={this.handleClick} style={{backgroundColor:this.state.isSubscribe?"blue":"green"}}>{this.state.buttontext}</button>
            {
                this.state.isSubscribe?<h2>thanks for suscribing</h2>:<h2>hello user</h2>
            }
            </>
        )
    }
}
export default YoutubeButton
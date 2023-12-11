export let Cards=()=>{
    return(
      <div className="card m-5" style={{"width": "18rem"}}>
        <img className="card-img-top" src="https://th.bing.com/th/id/OIP.sHzQelqY1BVpwCufIevxbwHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="./sdw.js" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    )
}

import React, { Component } from 'react'

export class NewsItems extends Component {
   
    render() {
      let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
                <div className="my-3">
                    <div className="card" >
                  
                    
                        <div  style ={{
                            display:'flex',
                            justifyContent:'flex=end',
                            position: 'absolute',
                            right: '0'
                        }}>
                    <span className=" badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={!imageUrl?"https://media.wired.com/photos/61086c497b8c62be3062fe82/191:100/w_1280,c_limit/WI090121_MG_Ford_01.jpg":imageUrl} 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>  
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More..</a>
                    </div>
                    </div>
                 </div>
        )
    }
}

export default NewsItems

import React from 'react'

const NewsItem =(props) =>{
    
  
    let {title,description,imgUrl,newsUrl,publishedAt,author,source} = props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "22rem",height:'30rem'}}>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" >{source}</span>
  <img src={imgUrl?imgUrl:"https://www.hindustantimes.com/ht-img/img/2023/08/28/1600x900/babar_rizwan_kohli_getty_1693238726482_1693238736498.JPG"} className="card-img-top" alt="..." style={{height:'15rem'}}/>
  <div className="card-body">
    <h5 className="card-title ">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn  btn-sm btn-primary">Read More</a>
    <p className="card-text mt-2"><small className="text-body-secondary">{new Date(publishedAt).toGMTString()} by <br/><strong>{author}</strong></small></p>
  </div>
</div>
      </div>
    )
 
}
export default NewsItem

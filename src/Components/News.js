import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Gif from "./Gif";
// import NewsItem from './NewsItem'
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);
   
    
 
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



 
 const first=async()=> {
    // console.log('cdm')
    props.setProgress(0)

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    // let url = 'https://newsapi.org/v2/everything?q=bitcoin&category=${props.category}&apiKey=${props.apiKey}'
    setLoading(true);
    props.setProgress(30)

    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70)

    // console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100)

  }
  // note : constructor hmesha run hota hai (each time) and sabsbey first run hota hai
  // here useEffect working kind of constructor here
  useEffect(() => {
      document.title = ` ${capitalizeFirstLetter(
    props.category
  )} - NewsMonkey`;
  
    first()
    // eslint-disable-next-line
   
},[])
//  const handlePrevbtn = async () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${props.category}&apiKey=${props.apiKey}&page=${
//       page - 1
//     }&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     // console.log(parsedData)
//     this.setState({ articles: parsedData.articles });
//     this.setState({ page: page - 1 });
//     this.setState({ loading: false });
//   };
//   const handleNextbtn = async () => {
//     if (
//       page + 1 >
//       Math.ceil(totalResults / props.pageSize)
//     ) {
//     } else {

//       let url = `https://newsapi.org/v2/top-headlines?country=${
//         props.country
//       }&category=${props.category}&apiKey=${props.apiKey}&page=${
//         page + 1
//       }&pageSize=${props.pageSize}`;
      
//       setLoading(true)
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       // console.log(parsedData)
     
//       setArticles(parsedData.articles);
//       setPage(page + 1);
//       setLoading(false);
//     }

//   };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
   
    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
   
    setArticles(articles.concat(parsedData.articles));
    setPage(page + 1);
    setLoading(false);

  
  };
    // console.log('render')
    return (
      <>
        <h1 className="text-center" style={{marginTop:'75px',marginBottom:'15px'}}>
          NewsMonkey - Top Headlines on{" "}
          {capitalizeFirstLetter(props.category)}{" "}
        </h1>
        {loading && <Gif />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Gif />}

          //   style={{overflow:hidden}}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author ? element.author : "unknown"}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between ">

                <button disabled={page===1} onClick={this.handlePrevbtn}type="button" className="btn btn-warning"> &larr; Previous </button>
                <button  disabled={page+1>(Math.ceil(totalResults/props.pageSize))} onClick={this.handleNextbtn} type="button" className="btn btn-info">Next &rarr;</button>
                </div>  */}
      </>
    );
 
}
News.defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
    apiKey: process.env.REACT_APP_APIKEY,
  };
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

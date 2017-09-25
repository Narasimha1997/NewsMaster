import React, {Component} from 'react'


class Result extends Component{
  render(){
    const news_data = this.props.bundle.news;
    console.log(news_data)
    if(news_data==null)
      return (
        <div>Failed to fetch news, make sure the source you are looking exists.</div>
      )
    return (<div>
       <h4 className="header_news">Latest news from:  {this.props.bundle.article}</h4>
       <div className="mdl-grid my_gr">
       {news_data.articles.map((article, index) =>
          (
          <div className="mdl-card mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-shadow--2dp">
               <figure className="mdl-card__media">
                   <img src={article.urlToImage} alt="" />
               </figure>
               <div className="mdl-card__title">
                   <h1 className="mdl-card__title-text">{article.title}</h1>
               </div>
               <div className="mdl-card__supporting-text">
                   <p>{article.description}</p>
               </div>
                               <div className="mdl-card__actions mdl-card--border">
   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={article.url}>Read More</a>
   <div className="mdl-layout-spacer"></div>
   <form  action={article.url} method="get">
     <button className="mdl-button mdl-button--icon mdl-button--colored" type="submit" onClick=""><i className="material-icons">share</i></button>
   </form>
     </div>
   </div>
         )
       )}
     </div>
    </div>)
  }
}
export default Result;

import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Result from './Results'
class Search extends Component{
  constructor(props){
    super(props);
    this.state = {article:'', news: null};
    this.API_KEY = '1bae2e39f2b540f3a15dbbcb269eba9b'
    this.handle_state = this.handle_state.bind(this);
    this.search_api = this.search_api.bind(this);
  }
  handle_state(event){
    this.setState({article:event.target.value})
  }
  search_api(){
    let url = `https://newsapi.org/v1/articles?source=${this.state.article}&sortBy=top&`+
    `apiKey=${this.API_KEY}`
    fetch(url,{
      method:'GET'
    }).then((response)=>{
      if(response.ok)
       return response.json();
      else return null;
    }).then((response_data)=>{
        if(response_data!=null){
          this.setState({article:this.state.article, news: response_data});
          ReactDOM.render(<Result
            bundle={this.state}
            />, document.getElementById('root'))
        }else{
          this.setState({article:'article does not exit'})
        }
    }).catch((err)=>{
        console.log(err)
    })
  }
    render(){
      return (
        <div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" id="sample1"
              value={this.state.article} onChange={this.handle_state}/>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"
            onClick={this.search_api} href="#root"><i className="material-icons">search</i></button>
          <p>Search for: {this.state.article}</p>
        </div>
      )
    }
}

export default Search;

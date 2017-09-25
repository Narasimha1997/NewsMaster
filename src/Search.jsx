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
    let url = `http://newsapi.org/v1/articles?source=${this.state.article}&sortBy=top&`+
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
      return <div className="mdl-card mdl-shadow--2dp searchNode">
        <form action="#" onSubmit={this.search_api}>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="sample1" value={this.state.article} onChange={this.handle_state}></input>
            <label className="mdl-textfield__label" for="sample1"></label>
          </div>
          <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" type="submit"
          ><i className="material-icons">search</i></button>
        <p>`searching for: `{this.state.article}</p>
        </form>
      </div>
    }
}

export default Search;

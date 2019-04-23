// var Search = (props) => {
//   return (<div className="search-bar form-inline">
//     <input className="form-control" type="text"/>
//     <button className="btn hidden-sm-down" type="submit" onClick={props.searchRequest}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>)
// };


class Search extends React.Component {
  state = {
    query: 'afs',
    max: '' || 5,
    key: ''
  }




  render() {
    return(
      <div className="search-bar form-inline" >
        <input className="form-control" type="text" onClick={props.SearchRequest}/>
        <button className="btn hidden-sm-down" >
        <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
  )}
};




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

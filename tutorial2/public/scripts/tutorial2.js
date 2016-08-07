var products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

/**
 * SearchBar class
 */
var SearchBar = React.createClass({
    //Initial state for the input test
    getInitialState: function() {
      return {product: ''};
    },
    //Handle on change event on input
    handleOnChange: function(event){
        this.setState({product: event.target.value});
        this.props.onSearchBar(event.target.value);
    },
    //Render html
    render: function(){
        return (
            <form className="searchBar">
                <input type="text" onChange={this.handleOnChange} placeholder="Search..." value={this.state.product}/>
            </form>
        )
    }
});

/**
 * Products List class to list products
 */
var ProductsList = React.createClass({
    //Set initial state for the products to not lose track
    getInitialState: function(){
        return {products: this.props.data}
    },
    handleSearchBar: function(filter){
        //If filter is empty doesn't apply it'
        if(filter.trim() != ""){
            //Filter by letter
            var filtereds = this.state.products.filter((product) => {
                return product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            });

            this.setState({products: filtereds});
        }else{
            //Empty filter return state to original
            this.setState(this.getInitialState());
        }
    },
    render: function() {
        var products = this.state.products.map((product) => {
            return (
                <h1 key={product.name}>{product.name}</h1>
            );
        });

        return (
            <div className="productsList">
                <SearchBar onSearchBar={this.handleSearchBar}/>
                {products}
            </div>
        );
    }
})

ReactDOM.render(
  <ProductsList data={products}/>,
  document.getElementById('content')
);
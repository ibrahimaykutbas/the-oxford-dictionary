import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = { categories: [] };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.id}
              active={
                category.character === this.props.currentCategory ? true : false
              }
              onClick={() => this.props.changeCategory(category)}
            >
              {category.character}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

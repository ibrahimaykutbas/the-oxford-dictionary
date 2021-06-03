import React, { Component } from "react";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import WordList from "./WordList";
import { Switch, Route } from "react-router";
import NotFound from "./NotFound";
import Eng from "./Eng";
import Tr from "./Tr";

export default class App extends Component {
  state = { currentCategory: "All", words: [], currentData: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.character });
    this.getWords(category.id);
  };

  getDataEng = (word) => {
    this.setState({ currentData: word.TR });
  };

  getDataTr = (word) => {
    this.setState({ currentData: word.ENG });
  };

  componentDidMount() {
    this.getWords();
  }

  getWords = (categoryId) => {
    let url = "http://localhost:3000/words";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ words: data }));
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let wordInfo = { title: "Word List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
            <br />
            <Col xs="12">
              <br />

              <Switch>
                {/* Kelime Listesi */}
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Row>
                      <Col xs="3">
                        <CategoryList
                          info={categoryInfo}
                          changeCategory={this.changeCategory}
                          currentCategory={this.state.currentCategory}
                        />
                      </Col>
                      <Col xs="9">
                        <WordList
                          info={wordInfo}
                          currentCategory={this.state.currentCategory}
                          words={this.state.words}
                        />
                      </Col>
                    </Row>
                  )}
                ></Route>

                {/*  İngilizce Alıştırma */}
                <Route
                  exact
                  path="/ENG-TR"
                  render={(props) => (
                    <Row>
                      <Col xs="12">
                        <Row>
                          <Col xs="3">
                            <CategoryList
                              info={categoryInfo}
                              changeCategory={this.changeCategory}
                              currentCategory={this.state.currentCategory}
                            />
                          </Col>
                          <Col xs="9">
                            <Eng
                              currentCategory={this.state.currentCategory}
                              words={this.state.words}
                              currentData={this.state.currentData}
                              getDataEng={this.getDataEng}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  )}
                ></Route>

                {/* Türkçe Alıştırma*/}
                <Route
                  exact
                  path="/TR-ENG"
                  render={(props) => (
                    <Row>
                      <Col xs="12">
                        <Row>
                          <Col xs="3">
                            <CategoryList
                              info={categoryInfo}
                              changeCategory={this.changeCategory}
                              currentCategory={this.state.currentCategory}
                            />
                          </Col>
                          <Col xs="9">
                            <Tr
                              currentCategory={this.state.currentCategory}
                              words={this.state.words}
                              currentData={this.state.currentData}
                              getDataTr={this.getDataTr}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  )}
                ></Route>

                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

import { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d9c16edb72e74bce8e0bd1b1ee380c00&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
    // console.log(this.state);
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d9c16edb72e74bce8e0bd1b1ee380c00&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      /* empty */
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d9c16edb72e74bce8e0bd1b1ee380c00&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row ms-3">
          {this.state.articles.map((ietm) => {
            return (
              <div className="col-4 my-3" key={ietm.url}>
                <NewsItem
                  title={
                    ietm.title ? ietm.title.slice(0, 45) : "No title available"
                  }
                  description={
                    ietm.description
                      ? ietm.description.slice(0, 88)
                      : "No description available"
                  }
                  urlToImage={
                    !ietm.urlToImage
                      ? "https://cdn.arstechnica.net/wp-content/uploads/2023/11/encryption-key-recovery-attack-760x380.jpg"
                      : ietm.urlToImage
                  }
                  url={ietm.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Netx &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

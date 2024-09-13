import { Component  } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

articles = []

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d9c16edb72e74bce8e0bd1b1ee380c00";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
    // console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row ms-3">
            {this.state.articles.map((ietm) => {
              return (
                <div className="col-4 my-3" key={ietm.url}>
                  <NewsItem title={ietm.title} description={ietm.description} urlToImage={!ietm.urlToImage ?"https://cdn.arstechnica.net/wp-content/uploads/2023/11/encryption-key-recovery-attack-760x380.jpg":ietm.urlToImage }/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;

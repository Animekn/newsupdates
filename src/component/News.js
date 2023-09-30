import React, { Component } from 'react';
import Newsitem from './Newsitem.js';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'
import withRouter from '../hooks/withRouter.js';
import InfiniteScroll from "react-infinite-scroll-component";
const API_KEY = "2b9968bdf0e14d979f1d3fea48adc989";
const API_KEY_2 = "00d09a7371c645a4a468187d278a9f98";

class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 10
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
  }
  // fetch api is not performing well in this stackblitze

  async fetchNews() {

    let type = 'general';
    if (this.props && this.props.params && this.props.params.type) {
      type = this.props.params.type;
    }

    console.log(this.props)
    let Url =
      `https://newsapi.org/v2/top-headlines?category=${type}&country=${this.props.country}&apiKey=${API_KEY}&page=${this.state.page}&PageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    // console.log(this.props)
    const data = await fetch(Url);
    console.log(this.props)
    const parsData = await data.json();


    this.setState({
      articles: parsData.articles,
      totalResults: parsData.totalResults,
      loading: false
    });
  }

  componentDidMount() {
    this.fetchNews();
  }

  handlePrevClick = async () => {
    console.log('prev')
    this.setState({page:this.state.page-1})
    this.fetchNews();
  };

  handleNextClick = async () => {
    this.setState({page:this.state.page+1})
this.fetchNews();
  };

  //Function for infinite scroll bar 
  fetchMoreData = async() => {
   this.setState({page:this.state.page+1})
   let type = 'general';
    if (this.props && this.props.params && this.props.params.type) {
      type = this.props.params.type;
    }

    console.log(this.props)
    let Url =
      `https://newsapi.org/v2/top-headlines?category=${type}&country=${this.props.country}&apiKey=${API_KEY}&page=${this.state.page}&PageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    // console.log(this.props)
    const data = await fetch(Url);
    console.log(this.props)
    const parsData = await data.json();


    this.setState({
      articles:this.state.articles.concat(parsData.articles),
      totalResults: parsData.totalResults,
      loading: false
    });

  };

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props);
    if (prevProps.params && this.props.params && this.props.params.type != prevProps.params.type) {
      this.fetchNews()
    }
  }

  render() {
    return (
      <>
            <div className='my4'>

          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container my-4">
          <h1 className='text-center' style={{marginTop:'100px',fontFamily: "Times New Roman, Times, serif",fontSize: "36px",letterSpacing: '2px',wordSpacing: '3.2px',color: '#000000',fontWeight: '700',textDecoration: 'none',fontStyle: 'normal',fontVariant: 'small-caps',textTransform: 'uppercase',}}>{this.props.params.type.toUpperCase()}- Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((ele) => {
              return (
                <div className="col-md-4 my-3" key={ele.url}>
                  <Newsitem
                    imgUrl={
                      ele.urlToImage
                        ? ele.urlToImage
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyBdayoG4JDHSMsTQma1TmHHXu0L5Dtt37NDtHVHK1r-wk_40PzMtynJd9g5SL_n6ekE&usqp=CAU'
                    }
                    title={ele.title}
                    description={ele.description}
                    newsUrl={ele.url}
                    PublishAt={ele.publishedAt}
                  />
                </div>
              );
            })}
        </div>
          </div>
          </InfiniteScroll>
          </div>




        {/* Buttons for pagination */}
          {/* <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={this.state.page > 7}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
      </>
    );
  }
}

export default withRouter(News);

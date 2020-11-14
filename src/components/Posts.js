import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "./Posts.css";
import Post from "./Posts/Post";
import ReactPaginate from "react-paginate";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoaded: false,
      offset: 0,
      perPage: 8,
      currentPage: 0,
    };
  }

  receivedData() {
    axios.get("http://localhost:3001/posts").then((res) => {
      let items = JSON.parse(res.data);

      const slice = items.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice;
      //console.log(items);
      this.setState({
        posts: postData,
        isLoaded: true,
      });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }

  render() {
    const { posts, isLoaded, pageCount } = this.state;

    if (isLoaded) {
      return (
        <div className="container">
          <div className="row col-sm-12">
            <h1 id="all-posts">Posts/</h1>
          </div>

          <div className="row">
            {posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
          <div className="row col-sm-12">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination_link"}
              nextLinkClassName={"pagination_link"}
              disabledClassName={"pagination_link--disabled"}
              activeClassName={"pagination_link--active"}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="spinner">
          Loading
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
        </div>
      );
    }
  }
}

export default Posts;

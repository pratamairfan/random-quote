import React from "react";

import quotes from "./quoteDB";

import { FaQuoteLeft } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

export default class Quote extends React.Component {
  constructor(props) {
    super(props);

    const colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

    const randomInt = Math.floor(Math.random() * quotes.length);
    const randomColor = Math.floor(Math.random() * colors.length);
    this.state = {
      quote: quotes[randomInt].quote,
      author: quotes[randomInt].author,
      color: colors[randomColor].color,
    };
    this.randomQuote = this.randomQuote.bind(this);
  }

  randomQuote() {
    const randomInt = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[randomInt].quote,
      author: quotes[randomInt].author,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div id="qoute-box" className="flex relative w-[450px] table bg-white rounded py-[40px] px-[50px]">
          <div className="quote-text text-center font-[500] text-[1.75em] w-[450px] clear-both">
            <FaQuoteLeft className="inline-block mr-1" />
            <span id="text" className="relative top-5">
              {this.state.quote}
            </span>
          </div>
          <div className="quote-author text-right h-auto clear-both text-[1.2em] mt-9 w-[450px]">
            <span id="author">- {this.state.author}</span>
          </div>
          <div className="buttons block m-auto w-[450px]">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="btn btn-warning mt-[30px] mr-2 text-[1.2em] float-left" href="https://twitter.com/intent/tweet" target="_top">
              <FaTwitter />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn btn-warning mt-[30px] mr-2 text-[1.2em] float-left">
              <FaTumblr />
            </a>
            <button className="btn btn-warning float-right mt-[30px] ml-2" onClick={this.randomQuote}>
              New quote
            </button>
          </div>
        </div>
        <div className="text-slate-400 mt-[15px] mb-[30px] mx-auto text-center text-[0.9em] clear-both w-[450px]">
          by
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="https://github.com/pratamairfan/random-quote-machine" className="no-underline ">
            <DiGithubBadge className="inline-block !text-[1.8em]" />
            pratamairfan
          </a>
        </div>
      </div>
    );
  }
}

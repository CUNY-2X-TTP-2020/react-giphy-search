import React, { Component } from 'react';

import GifFetcher from './GifFetcher';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            prevSearch: "Enter a topic to search for",
            isRandom: false,
            isTrending: true,
            isRegular: false
        }
    }

    handleButtonClick = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        if(event.target.id === "random") this.setState({ isRandom: true, isTrending: false, isRegular: false });
        else if(event.target.id === "trending") this.setState({ isRandom: false, isTrending: true, isRegular: false });
    }

    handleSubmit = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        this.setState(
        { 
            prevSearch: event.target.searchbar.value,
            isRandom: false,
            isTrending: false,
            isRegular: true
        });
        event.target.reset();
    }

    render()
    {
        return (
            <section>
                {this.getSearchBar()}
                {this.getButtons()}
                {this.getGifFetcher()}
            </section>
        );
    }

    getSearchBar()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Gif Search</div>
                <input type="text" name="searchbar" id="searchbar" placeholder={this.state.prevSearch} />
            </form>
        );
    }

    getButtons()
    {
        return (
            <section>
                <button onClick={this.handleButtonClick} id="random">Random</button>
                <button onClick={this.handleButtonClick} id="trending">Trending</button>
            </section>
        );
    }

    getGifFetcher()
    {
        const isRandom = this.state.isRandom;
        const isTrending = this.state.isTrending;
        const isRegular = this.state.isRegular;

        if(isRandom && !isTrending && !isRegular) return <GifFetcher searchType="random" />
        else if(!isRandom && isTrending && !isRegular) return <GifFetcher searchType="trending" />
        else if(!isRandom && !isTrending && isRegular) return <GifFetcher searchTerm={this.state.prevSearch} searchType="regular" />
    }
}
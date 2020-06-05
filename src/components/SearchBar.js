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
            hasSearched: false,
            isRandom: false,
            isTrending: true
        }
    }

    handleButtonClick = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        if(event.target.id === "random") this.setState({ isRandom: true, isTrending: false });
        else if(event.target.id === "trending") this.setState({ isRandom: false, isTrending: true });
    }

    handleSubmit = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        this.setState(
        { 
            prevSearch: event.target.searchbar.value, 
            hasSearched: true,
            isRandom: false,
            isTrending: false
        });
        event.target.reset();
    }

    render()
    {

        return (
            this.state.hasSearched ?
            <section>
                {this.getSearchBar()}
                {this.getButtons()}
                {this.getGifFetcher()}
            </section>
            :
            <section>
                {this.getSearchBar()}
                {this.getButtons()}
                <GifFetcher />
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

        if(isRandom && !isTrending) return <GifFetcher searchType="random" />
        else if(!isRandom && isTrending) return <GifFetcher searchType="trending" />
        else if(!isRandom && !isTrending) return <GifFetcher searchTerm={this.state.prevSearch} searchType="regular" />
    }
}
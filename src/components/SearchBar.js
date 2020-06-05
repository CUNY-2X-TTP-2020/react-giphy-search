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
            hasSearched: false
        }
    }

    handleSubmit = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        this.setState({ prevSearch: event.target.searchbar.value, hasSearched: true })
        event.target.reset();
    }

    render()
    {
        return (
            this.state.hasSearched ?
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div>Gif Search</div>
                    <input type="text" name="searchbar" id="searchbar" placeholder={this.state.prevSearch} />
                </form>
                <GifFetcher searchTerm={this.state.prevSearch} searchType="regular" />
            </section>
            :
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div>Gif Search</div>
                    <input type="text" name="searchbar" id="searchbar" placeholder={this.state.prevSearch} />
                </form>
                <GifFetcher />
            </section>
        );
    }
}
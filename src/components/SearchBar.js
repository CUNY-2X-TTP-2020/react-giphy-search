import React, { Component } from 'react';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
    }

    handleSubmit = (event) =>
    {

    }

    render()
    {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div>Gif Search</div>
                    <input type="text" name="searchbar" id="searchbar" />
                </form>
            </section>
        );
    }
}
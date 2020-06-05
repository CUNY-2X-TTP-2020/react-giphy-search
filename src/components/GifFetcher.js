import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GifFetcher extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            searchTerm: props.searchTerm,
            searchType: props.searchType,
            data: []
        }
    }

    render()
    {
        return (
            <section>
                <div>Gif Fetcher</div>
            </section>
        );
    }
}

GifFetcher.propTypes =
{
    searchTerm: PropTypes.string
}
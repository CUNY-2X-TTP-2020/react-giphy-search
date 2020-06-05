import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

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

    componentDidMount()
    {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;

        axios.get(url, { params: { limit: 20 }})
        .then((response) =>
        {
            const data = response.data;
            console.log(data);
            this.setState({ searchTerm: "", searchType: "trending", data });
        })
        .catch((error) => console.log(error));
    }

    render()
    {
        return (
            <section>
                <div></div>
            </section>
        );
    }
}

GifFetcher.propTypes =
{
    searchTerm: PropTypes.string,
    searchType: PropTypes.string
}
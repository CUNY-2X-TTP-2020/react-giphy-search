import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import GifCard from './GifCard';

export default class GifFetcher extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            searchTerm: props.searchTerm,
            searchType: props.searchType,
            data: [],
            isFound: false
        }
    }

    componentDidMount()
    {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;

        axios.get(url, { params: { limit: 10 }})
        .then((response) =>
        {
            const data = response.data.data;

            this.setState({ searchTerm: "", searchType: "trending", data, isFound: true });
        })
        .catch((error) => 
        {
            console.log(error);
            this.setState({ data: [], isFound: false });
        });
    }

    componentDidUpdate(prevProps)
    {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const searchTerm = this.props.searchTerm;
        const searchType = this.props.searchType;

        if(searchTerm !== prevProps.searchTerm)
        {
            let url = `http://api.giphy.com/v1/gifs/`;

            if(searchType.localeCompare("regular") === 0) url = url.concat(`search?q=${searchTerm}&api_key=${API_KEY}`);
            else if(searchType.localeCompare("trending") === 0) url = url.concat(`trending?api_key=${API_KEY}`);
            else url = url.concat(`random?api_key${API_KEY}`);
            
            axios.get(url, { params: { limit: 15 }})
            .then((response) =>
            {
                const data = response.data.data;

                this.setState({ searchTerm, searchType, data, isFound: true });
            })
            .catch((error) => 
            {
                console.log(error);
                this.setState({ data: [], isFound: false });
            });
        }
    }

    render()
    {
        return (
            this.state.isFound ?
            <section>
                <h3>{this.state.searchType.toUpperCase()}</h3>
                {this.generateGifCards(this.state.data)}
            </section>
            : <p>No results found</p>
        );
    }

    generateGifCards(data)
    {
        let cards = [];

        data.forEach((element, index) =>
        {
            const gif = element.images.original.url;
            const title = element.title;

            cards.push(<GifCard 
                key={index.toString()}
                gif={gif}
                title={title}    
            />);
        });

        return cards;
    }
}

GifFetcher.propTypes =
{
    searchTerm: PropTypes.string,
    searchType: PropTypes.string
}
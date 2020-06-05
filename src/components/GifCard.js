import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GifCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            key: props.key,
            gif: props.gif,
            title: props.title
        }
    }

    render()
    {
        let props = this.props;
        const gif = props.gif;
        const title = props.title;

        return (
            <section className="gif-card" key={this.state.key}>
                <p className="gif-card-title"><strong>{title}</strong></p>
                <img className="gif-card-img" src={gif} alt={title} width="400" />
            </section>
        );
    }
}

GifCard.propTypes =
{
    key: PropTypes.string,
    gif: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
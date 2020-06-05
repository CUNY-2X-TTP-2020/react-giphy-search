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
        const key = props.key;
        const gif = props.gif;
        const title = props.title;

        return (
            <section key={key}>
                <img src={gif} width="400" />
                <p><strong>{title}</strong></p>
            </section>
        );
    }
}

GifCard.propTypes =
{
    key: PropTypes.string.isRequired,
    gif: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
import React, { Component } from 'react'

import './Loading.scss'
import loadImgSrc from '../../img/loading.png'

class Loading extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <img className="loading-wheel" src={loadImgSrc} alt="loading-wheel" style={{display: this.props.isLoading ? 'block' : 'none'}}/>
        )
    }

}

export default Loading
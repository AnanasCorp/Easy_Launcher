import React, { Component } from 'react'

import './LoadingSpinner.scss'
import loadImgSrc from '../../img/loading.png'

class LoadingSpinner extends Component {
    render() {
        return (
            <img className="loading-wheel" src={loadImgSrc} alt="loading-wheel" />
        )
    }
}

export default LoadingSpinner
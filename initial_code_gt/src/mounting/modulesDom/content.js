import React from 'react';
import controller from '../controller'
import PropTypes from 'prop-types'

//для рендера блока контента
export default function Content(props) {
    console.log('1 content: render main container')
    let lastChannels = document.querySelector('#channelsTV')
    if (lastChannels==null) {
        controller('mount',props.state.id) //на вход - Id элемента
    } 
    
    return <div className="content-block" id={props.state.id}>
            <div className="content-item-text channel" id="text-content">
                <span id="information-image">Обложка</span>
                <span id="information-channelsName">Название</span>
                <span id="information-genres">Жанр</span>
                <span id="information-country">Страна</span>
                <span id="information-duration">Длительность</span>
                <span id="information-rating">Рейтинг</span>
            </div>
            <div className="content-item-main" id="content">
            </div>
           </div>
}

Content.propTypes = {
    lastChannels: PropTypes.string
}
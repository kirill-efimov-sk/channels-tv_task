import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Рендеринг
// функционал: рендеринг с использование нового ReactDOM.render
export default function renderChannels(renderData, ammountChannels) {

  function List(props) {
    let listItems = []
    if (ammountChannels===0) {
       listItems = <div>Отсутствуют данные</div>
    } else {
      let channelsName = ''
      let srcImage = ''
      let genres = ''
      let country = ''
      let duration = ''
      let rating = ''
      let url = ''
      let summary = ''
      for (let i = 0;i<=renderData.renderingChannels.length-1;i++) {
        try {
          channelsName = renderData.renderingChannels[i].name
        } catch {
          channelsName = 'не удалось получить данные'
        }
        try {
          srcImage = renderData.renderingChannels[i].image.medium
        } catch {
          srcImage = 'не удалось получить данные'
        }
        try {
          genres = renderData.renderingChannels[i].genres[0]
        } catch {
          genres = 'не удалось получить данные'
        }
        try {
          country = renderData.renderingChannels[i].network.country.code
        } catch {
          country = 'не удалось получить данные'
        }
        try {
          duration = renderData.renderingChannels[i].runtime + ' min'
        } catch {
          duration = 'не удалось получить данные'
        }
        try {
          rating = renderData.renderingChannels[i].rating.average
        } catch {
          rating = 'не удалось получить данные'
        }
        try {
          url = renderData.renderingChannels[i].url
        } catch {
          url = 'не удалось получить данные'
        }
        try {
          summary = renderData.renderingChannels[i].summary.replace(/<\/?[a-zA-Z]+>/gi,'');
        } catch {
          summary = 'не удалось получить данные'
        }


        listItems[i] = 
        <div id ={renderData.renderingChannels[i].id}  key={channelsName+i}>
          <a href={url} className='channel'>
            <img src={srcImage} alt={channelsName}/>
            <span id='information-channelsName'>{channelsName}</span>
            <span id='information-genres'>{genres}</span>
            <span id='information-country'>{country}</span>
            <span id='information-duration'>{duration}</span>
            <span id='information-rating'>{rating}</span>
            <div id='info'>{summary}</div>
          </a>
        </div>
      }
    }
    return (
      <div className="content-item-channels" id='channelsTV'>{listItems}</div>
    );
  }

  function ListPage(props) {
    let listPage = []
    for (let i = 0;i<=renderData.poginationChannels.length-1;i++) {
      if (renderData.activePage-1 === i) {
        listPage[i] = 
        <div id ={'page' + renderData.poginationChannels[i]} className='activePage' key={'activePage'+renderData.poginationChannels[i]}>
          {renderData.poginationChannels[i]}
        </div>
      } else {
        listPage[i] = 
        <div id ={'page' + renderData.poginationChannels[i]}  key={renderData.poginationChannels[i]}>
          {renderData.poginationChannels[i]}
        </div>
      }
    }
    return (
      <div className="content-page-channels" id='pageTV'>{listPage}</div>
    );
  }

    ReactDOM.render(
      <React.StrictMode>
        <List list={renderData.renderingChannels} />
        <ListPage listPage={renderData} />
      </React.StrictMode>,
      document.getElementById('content'),
    )
}

renderChannels.propTypes = {
  ammountChannels: PropTypes.number,
  renderData: PropTypes.object
}
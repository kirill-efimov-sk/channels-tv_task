import React from 'react'
import ErrorBoundary from './errorBoundary'
import Content from './modulesDom/content'
import AdditionalBlock from './modulesDom/additionalBlock'
import PropTypes from 'prop-types'
import reportWebVitals from '../reportWebVitals'
import controller from './controller'

export default function Mount() {
  //константы для работы со state и данные для рендеринга
  const [statement, setStatement] = React.useState ([
    { id: 'contentUser', addition: false },
    { id: 'previousChannels', addition: false },
    { id: 'moreChannels', addition: false }
  ])

  function onClick (id) {
    console.log('0 MountDom: check ID for repalce addition')
    setStatement(statement.map(status => {
      if (status.id === id ) {
        status.addition = true
        controller(id,statement[1].id) //на вход - Id элемента
      
      }
      return status
    })
    )
    // включи для дебага, чтобы узнать время обработки данных
    reportWebVitals(console.log)
  }
  
  return (
    <div className="app-mount">
    <div className="react-main-component">
      <ErrorBoundary>
        <Content state={statement[0]} key={statement[0].id}/>
      </ErrorBoundary>
      <div className="prevNext">
        <ErrorBoundary>
          <AdditionalBlock state={statement[1]} onClick={onClick} key={statement[1].id}/>
        </ErrorBoundary>
        <ErrorBoundary>
          <AdditionalBlock state={statement[2]} onClick={onClick} key={statement[2].id}/>
        </ErrorBoundary>
      </div>
    </div>
  </div>
  );
}

AdditionalBlock.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  addition: PropTypes.bool
}
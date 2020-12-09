import getUrl from './url-param/urlParam'
import processingData from './render-channels/processing-data'
import renderChannels from './render-channels/render-channels'
import PropTypes from 'prop-types'

// Контроллер
// функционал: получение и обработка данных, отправка их на рендеринг
export default function controller(id, statementID) {
  async function getData(url, statement) {
    function working() {
      let ammountChannels = Number(data.length)
      if (ammountChannels > 0 && statement === 'not successful') {
        // модуль обработки данных для рендеринга
        renderData = processingData(id, data, ammountChannels); 
      } else {
        renderData = {paramRender : true}
      }
        // модуль рендеринга данных
        if (renderData.paramRender === true && statement === 'not successful' && renderData.renderingChannels.length > 0) {
          renderChannels(renderData, ammountChannels)
          window.scroll(-0, -0);
        }
    }

    const responce = await fetch(url)
    let data = await responce.json()
    working()
    statement = 'successfully'
  }

  // получение ссылки по id вызываемого элемента
  let url = getUrl()
  let statement = 'not successful'
  let renderData = {}

  getData(url, statement)
}

controller.propTypes = {
  id: PropTypes.string
}
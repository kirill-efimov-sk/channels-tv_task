import PropTypes from 'prop-types'

// Процессинг
// функционал: подготовка данных для рендеринга
export default function processingData(id, data, ammountChannels) {
    //чтобы каждый раз не ходить по api можно зашить в сторю, но это тех решение на усмотрение заказчика
    //localStorage.setItem('channels', JSON.stringify(data))

    let lastpogination = document.querySelector('.activePage')
    let countPage = 0
    if (lastpogination!==null) {
      countPage = Number(lastpogination.innerHTML)
    }
    

    let poginationChannels = [];
    let renderingChannels = [];
    let activePage = 0
    let pogination = Math.ceil(Number(ammountChannels)/50)
      for (let i = 1; i<=pogination; i++) {
        poginationChannels.push(i)
        }  

    if (id === 'previousChannels') {
      countPage -= 2
    }
    let valPage = Math.sign(countPage)
    if (valPage === -1) {
      countPage = 0
    }
    const staticParam = 49
    if (lastpogination===null) {
      let count = 0
      
      for (let i = 0; i<=count+staticParam; i++) {
          renderingChannels.push(data[i])
      }
      activePage = 1
    } else {
      if (countPage === poginationChannels[poginationChannels.length - 1]) {
        countPage = poginationChannels[poginationChannels.length - 1]
      }
      for (let i = (countPage)*50; i<=(countPage)*50+staticParam; i++) {
        if (ammountChannels>i) {
          renderingChannels.push(data[i])
          activePage = countPage+1
        } else {
          break
        }
      }
    }
    
    let renderData = {renderingChannels, poginationChannels, activePage, paramRender : true}
return renderData
}

processingData.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
  ammountChannels: PropTypes.string
}
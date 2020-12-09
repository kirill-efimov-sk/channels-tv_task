import React from 'react'
import PropTypes from 'prop-types'

//добавляем блок отвечающий за подгрузку данных в блок контента
export default function AdditionalBlock({ state, onClick }) {
  let id = state.id
  let link = ''
  console.log('2 additionBlock: render additional and active element '+id+' (state '+state.addition+')')
  if (id==='moreChannels') { 
    link = 'gonext_103393.svg'
  } else {
    link = 'goprevious_103394.svg'
  }


    return <div className="additional-block" id="additional">
      <img className="rotate" src={link} alt="click here" onClick={() => onClick(id)} id={id}> 
      </img>
    </div>
};

AdditionalBlock.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string
}
import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
function Sorteio(props) {
  const { min, max } = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title="Sorteiro de um Número" purple>
      <div>
        <span>
            <span>Resultado:</span>
            <strong>{aleatorio}</strong>
          </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
   return {
      min: state.numeros.min,
      max: state.numeros.max,
   }
}

export default connect(mapStateToProps)(Sorteio)

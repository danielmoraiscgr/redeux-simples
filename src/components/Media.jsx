import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
function Media(props) {
  const { min, max } = props
  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
            <span>Resultado:</span>
            <strong>{ (min + max) / 2 }</strong>
          </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) { // state -> Estado global da aplicação
     return {
       //numeros: state.numeros
       min: state.numeros.min,
       max: state.numeros.max,
     }
}

export default connect(mapStateToProps)(Media);

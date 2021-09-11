import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../components/store/actions/numeros'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
function Intervalo(props) {
  const { min, max } = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
            <strong>Mínimo:</strong>
            <input 
               type="number" 
               value={min} 
               onChange={e => props.alterarMinimo(+e.target.value)}
              
            />
        </span>
        <span>
            <strong>Máximo:</strong>
            <input 
              type="number" 
              value={max} 
              onChange={e => props.alterarMaximo(+e.target.value)}
            />
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
  
  function mapDispatchToProps(dispatch) { 
    return {
        alterarMinimo(novoNumero) {
          // Action Creator -> Action
          const action = alterarNumeroMinimo(novoNumero)
          dispatch(action) // passa o action para todos os Reducers 
        },
        alterarMaximo(novoNumero) {
          // Action Creator -> Action
          const action = alterarNumeroMaximo(novoNumero)
          dispatch(action) // passa o action para todos os Reducers 
        }
    }
  }
export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Intervalo)


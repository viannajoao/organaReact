import { Card } from '../Card/Card'
import style from './Time.module.scss'

export function Time({ name, primaryColor, secondaryColor, colaboradores }) {

  const backgroud = { backgroundColor: secondaryColor }
  const borderBottom = { borderBottom: `4px solid ${primaryColor}` }

  return (
    (colaboradores.length > 0) ?
      <section className={style.time} style={backgroud}>
        <h3 style={borderBottom} >{name}</h3>
        <div className={style.flex}>
          {colaboradores.map(colaborador => {
            return (
              <Card name={colaborador.name} background={primaryColor} role={colaborador.role} avatar={colaborador.image} />
            )
          })}
        </div>
      </section>
      : ''
  )
}
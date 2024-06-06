import style from './Card.module.scss';

export function Card({ name, role, avatar, background }) {
  return (

    <section className={style.flex}>
      <div className={style.colaborador}>
        <div className={style.cabecalho} style={{backgroundColor: background}}>
          <img src={avatar} alt="Foto de perfil" />
        </div>
        <div className={style.rodape}>
          <h4>{name}</h4>
          <h5>{role}</h5>
        </div>
      </div>
    </section>
  )
}
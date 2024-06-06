import { useState } from 'react'
import { Inputs } from '../inputs/Inputs'
import { Select } from '../select/Select'
import style from './Formulario.module.scss'

export function Formulario({getColaborador, times }) {



  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [select, setSelect] = useState('');

  function enviarForm() {
    event.preventDefault()
    getColaborador({
      name,
      role,
      image,
      select
    })
    setName('');
    setRole('');
    setImage('');
    setSelect('');
  }


  return (
    <section className={style.formulario}>
      <form onSubmit={enviarForm}>

        <h2>Preencha todos os campos para adicionar um novo colaborador</h2>
        <Inputs
          required 
          label="Nome"
          placeholder="Digite o seu nome"
          handleChangeValue={valor => setName(valor)}
        />
        <Inputs
          required 
          label="Cargo"
          placeholder="Digite o seu cargo"
          handleChangeValue={valor => setRole(valor)}
        />
        <Inputs
          required
          label="Imagem"
          placeholder="Digite o link da imagem"
          handleChangeValue={valor => setImage(valor)}
        />
        <Select
          required 
          label="Time"
          items={times}
          handleChangeValue={valor => setSelect(valor)}
        />
        <button>Criar Card</button>

      </form>
    </section>
  )
}
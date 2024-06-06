import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner/Banner'
import { Formulario } from './components/formulario/Formulario'
import { Time } from './components/Time/Time'
import { Footer } from './components/Footer/Footer'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  function addColaborador(colaborador) {
    // console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  const times = [
    { 
      id: 0,
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },  
    {
      id: 1,
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      id: 2,
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      id: 3,
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      id: 4,
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      id: 5,
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      id: 6,
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]

  return (
    <>
      <Banner />
      <Formulario times={times.map(time => time.nome)} getColaborador={colaborador => addColaborador(colaborador)} />

      {times.map(time => {
        return (
          <Time 
            key={time.id}
            name={time.nome} 
            primaryColor={time.corPrimaria} 
            secondaryColor={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.select  === time.nome)}
            />
        )
      })}
      <Footer />
    </>
  )
}

export default App

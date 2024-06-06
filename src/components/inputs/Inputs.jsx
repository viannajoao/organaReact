import style from './Inputs.module.scss';

export function Inputs({label, placeholder, handleChangeValue}){


  function handleGetInputValue(event){
    handleChangeValue(event.target.value)
  }

  return(
    <section className={style.campos}>
      <div className={style.defaultDiv}>
        <label htmlFor='name'>{label}</label>
        <input onChange={handleGetInputValue} type='text' name='name' placeholder={placeholder}></input>
      </div>
    </section>
  )

}
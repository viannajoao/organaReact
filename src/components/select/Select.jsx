import style from './Select.module.scss';

export function Select({ label, items, handleChangeValue, required }) {

  function handleGetSelectValue(event){
    handleChangeValue(event.target.value);
  }

  return (
    <section>
      <label>{label}</label>
      <select onChange={handleGetSelectValue} required={required} className={style.select}>
        <option value=""></option>
        {items.map(item => {
          return (
            <option key={item}>{item}</option>
          )
        })}
      </select>
    </section>
  )

}
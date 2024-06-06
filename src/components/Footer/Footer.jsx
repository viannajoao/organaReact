import style from './Footer.module.scss';
import facebook from '../../assets/fb.png'
import twitter from '../../assets/tw.png';
import instagram from '../../assets/ig.png';
import logo from '../../assets/logo.png';


export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.icones}>
        <img src={facebook} alt='icone do facebook'></img>
        <img src={twitter} alt='icone do twitter'></img>
        <img src={instagram} alt='icone do instagram'></img>
      </div>
      <div className={style.logo}>
        <img src={logo} alt="Logo do site" />
      </div>
      <div className={style.author}>
        <h5>Desenvolvimento por João Vianna</h5>
      </div>
    </footer>
  )
}
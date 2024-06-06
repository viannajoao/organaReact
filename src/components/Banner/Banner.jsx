import banner from '../../assets/banner.png';
import style from './Banner.module.scss';

export function Banner(){
  return(
    <header className={style.banner}>
        <img src={banner} alt="banner da pagina principal do header"/>
    </header>
  )
}
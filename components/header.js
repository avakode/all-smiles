import classes from '../styles/header.module.scss';
import { Nav } from './nav';

export function Header({ isOpened, setOpened }) {
  return (
    <div className={classes.header}>
      <div className={`${classes.headerContent} container`}>
        <div className="row">
          <div className={`${classes.content} col-12 d-flex justify-content-between align-items-center`}>
            <a className={classes.logo} href="">
              <img src="/images/logo.svg" alt="Logo"/>
            </a>
            <button className={`${classes.burger} ${isOpened ? 'burgerActive' : ''}`} onClick={() => setOpened(!isOpened)}>
              <img src="/images/burger.svg" alt="Burger"/>
              <img src="/images/close.svg" alt="Close" />
            </button>
            <div className={`${classes.rightsideContainer} ${isOpened ? 'headerOpened' : ''}`}>
              <div className={`${classes.rightside} d-lg-flex align-items-center`}>
                <Nav className={classes.nav} classIsActive={classes.isActive} />
                <a href="https://meva.app/practices/all-smiles-dental-spa/appointment" target="_blank" className={classes.button}>MAKE AN APPOINTMENT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

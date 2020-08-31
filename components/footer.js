import classes from '../styles/footer.module.scss';
import { Nav } from './nav';
import { useState, useEffect } from 'react';
import fetchEntries from '../components/api/fetchEntries';

export function Footer() {
  const [mainInfo, setMainInfo] = useState([]);
  const [workingHours, setWorkingHours] = useState([]);

  useEffect(() => {
    async function getMainInfo() {
      const data = await fetchEntries({ content_type: "mainInfo", include: 10 })
      setMainInfo([...data])
    }
    getMainInfo()
  }, [])

  useEffect(() => {
    async function getHours() {
      const data = await fetchEntries({ content_type: "workingHours", include: 10 })
      setWorkingHours([...data])
    }
    getHours()
  }, [])

  return (
    <div className={classes.footer}>
      <div className="container container-small">
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-4 d-flex">
            <div className={classes.item}>
              <h5 className={classes.itemTitle}>Menu</h5>
              <Nav className={classes.footerNav} classIsActive={classes.isActive} />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-md-center">
            <div className={classes.item}>
              <h5 className={classes.itemTitle}>Working hours</h5>
              <div className={classes.center}>
                {workingHours[0] && workingHours[0].fields && workingHours[0].fields.items.length > 0
                  ? workingHours[0].fields.items.map(item => (
                    item.fields.schemaFormat ?
                    (<div itemprop="openingHours" content={item.fields.schemaFormat} key={item.fields.day}>
                      <span>{item.fields.day}:</span> <b>{item.fields.time}</b>
                    </div>) :
                    (<div key={item.fields.day}>
                      <span>{item.fields.day}:</span> <b>{item.fields.time}</b>
                    </div>)
                  )) : null}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-4 d-flex justify-content-md-end">
            <div className={classes.item}>
              <h5 className={classes.itemTitle}>Contact us</h5>
              <div className={classes.content}>
                {mainInfo && mainInfo[0] && mainInfo[0].fields ? (
                  <>
                    <div className={classes.location}>
                      <div className={classes.icon}>
                        <img src="/images/location.svg" alt="" />
                      </div>
                      <p>{mainInfo[0].fields.address}</p>
                    </div>
                    <a href={`mailto:${mainInfo[0].fields.email}`} className={classes.mail}>
                      <div className={classes.icon}>
                        <img src="/images/mail.svg" alt="" />
                      </div>
                      <p>{mainInfo[0].fields.email}</p>
                    </a>
                    <a href={`tel:${mainInfo[0].fields.phone}`} className={classes.phone}>
                      <div className={classes.icon}>
                        <img src="/images/phone.svg" alt="" />
                      </div>
                      <p itemprop="telephone">{mainInfo[0].fields.phone}</p>
                    </a>
                  </>
                )
                : null }
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <a href="/" className={classes.logo}>
            <img src="/images/logo-light.svg" alt=""/>
          </a>
        </div>
        <div className={`${classes.copy} row`}>
          {mainInfo && mainInfo[0] && mainInfo[0].fields ? (
            <>
              <span>{mainInfo[0].fields.footerTimestamp}</span>
              <a href={mainInfo[0].fields.termsOfServiceLink}>Terms of Service</a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
import classes from '../styles/call.module.scss';
import { useState, useEffect } from 'react';
import fetchEntries from '../components/api/fetchEntries';

export function Call() {
  const [mainInfo, setMainInfo] = useState([]);

  useEffect(() => {
    async function getMainInfo() {
      const data = await fetchEntries({ content_type: "mainInfo", include: 10 })
      setMainInfo([...data])
    }
    getMainInfo()
  }, [])

  return (
    mainInfo && mainInfo[0] && mainInfo[0].fields ? (
      <a href={`tel:${mainInfo[0].fields.phone}`} className={classes.call}>
        <div className={classes.icon}>
          <img src="/images/call.svg" alt="Call" />
        </div>
        <span>{mainInfo[0].fields.phone}</span>
      </a>
    ) : null
  )
}
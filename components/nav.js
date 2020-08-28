import { useState, useEffect } from 'react';
import fetchEntries from './api/fetchEntries';

export function Nav({ className, classIsActive }) {
  const [active, setActive] = useState('/');
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const menu = await fetchEntries({ content_type: "navigation" })
      setNavItems([...menu[0].fields.navigation])
    }
    getItems()
  }, [])

  return (
    <ul className={className}>
      {navItems && navItems.length > 0
        ? navItems.map(item => (
          <li
            key={`${item.fields.itemUrl ? item.fields.itemUrl : '/'}`}
            className={active === `${item.fields.itemUrl ? item.fields.itemUrl : '/'}` ? classIsActive : ''}
          >
            <a href={`${item.fields.itemUrl ? item.fields.itemUrl : '/'}`}>
              {item.fields.itemTitle}
            </a>
          </li>
        ))
        : null}
    </ul>
  )
}
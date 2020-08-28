import classes from '../../styles/main/choose.module.scss';

export function Choose({ data }) {
  return (
      data ? (
        <div className={classes.choose}>
          <div className="container">
            <div className={classes.textblock}>
              <h2 className={classes.title}>{data.title}</h2>
              <p className={classes.subtitle}>{data.text}</p>
            </div>
            <div className={classes.items}>
              { data.items && data.items.length > 0
              ? data.items.map(item => (
                <div key={item.fields.title} className={`${classes.item} col-lg-4`}>
                  <div className={classes.image}>
                    <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} />
                  </div>
                  <h5 className={classes.itemTitle}>{item.fields.title}</h5>
                  <p className={classes.itemText}>{item.fields.text}</p>
                </div>
              )) : null }
            </div>
          </div>
        </div>
      ) : null
  )
}
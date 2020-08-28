import classes from '../../styles/main/services.module.scss';

export function Services({ data }) {
  return (
    data ? (
      <div className={classes.services}>
        <div className="container container-small">
          <div className={classes.textblock}>
            <h2 className={classes.title}>{data.title}</h2>
            <p className={classes.text}>{data.text}</p>
          </div>
          <div className="row">
            {data.items && data.items.length > 0
            ? data.items.map(item => (
              <div key={item.fields.title} className="col-md-6">
                <a href={item.fields.url} className={classes.item}>
                  <div className={classes.icon}>
                    <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} />
                  </div>
                  <h4 className={classes.itemTitle}>{item.fields.title}</h4>
                </a>
              </div>
            )) : null }
          </div>
        </div>
      </div>
    ) : null
  )
}
import classes from '../../styles/main/cards.module.scss';

export function Cards({ data }) {
  return (
    <div className={classes.cards}>
      <div className="container">
        <div className="row">
          {data && data.card && data.card.length > 0
            ? data.card.map(item => (
              <div className="col-lg-4" key={item.fields.title}>
                <div className={classes.card}>
                  <div className={classes.image}>
                    <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} />
                  </div>
                  <h4 className={classes.title}>{item.fields.title}</h4>
                  <p className={classes.text}>{item.fields.text}</p>
                  {item.fields.button.fields ? (
                    <a className={classes.button} href={item.fields.button.fields.url} target="_blank">
                      {item.fields.button.fields.text}
                    </a>
                  ) : null}
                </div>
              </div>
            ))
            : null}
        </div>
      </div>
    </div>
  )
}
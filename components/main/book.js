import classes from '../../styles/main/book.module.scss';

export function Book({ data }) {
  return (
    <div className={classes.book}>
      <div className="container">
        {data ? (
          <div className={`${classes.content} row align-items-center`}>
            <div className={`${classes.image} col-lg-5`}>
              <img
                src={data.image.fields.file.url}
                srcSet={data.image2x.fields.file.url ? `${data.image2x.fields.file.url} 2x` : `${data.image.fields.file.url} 1x`}
                alt={data.image.fields.title}/>
            </div>
            <div className={`${classes.textblock} col-lg-7`}>
              <h2 className={classes.title}>{data.title}</h2>
              <a href={data.button.fields.url} className={classes.button} target="_blank">
                {data.button.fields.text}
              </a>
            </div>
          </div>
          ) : null}
        </div>
      </div>
  )
}
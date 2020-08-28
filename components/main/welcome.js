import classes from '../../styles/main/welcome.module.scss';

export function Welcome({ data }) {
  return (
    data ? (
      <div className={classes.welcome}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-5">
              <div className={classes.image}>
                <img src={data.image ? data.image.fields.file.url : ''} alt={data.image ? data.image.fields.title : ''} />
              </div>
            </div>
            <div className="col-md-8 col-lg-7">
              <h2 className={classes.title}>{data.title ? data.title : ''}</h2>
              <p className={classes.text}>{data.text ? data.text : ''}</p>
            </div>
          </div>
        </div>
      </div>
    ) : null
  )
}
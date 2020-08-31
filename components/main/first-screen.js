import classes from '../../styles/main/first-screen.module.scss';

export function FirstScreen({ data }) {
  return (
    <div className={classes.firstScreen}>
      <div className="container">
        <div className="row">
          {
            data ? <>
              <div className={`${classes.textblock} col-lg-7`}>
                <span className={classes.pretitle}>{data.preTitle}</span>
                <h1 className={classes.title}>{data.title}</h1>
                <h2 className={classes.subtitle}>{data.text}</h2>
                <div className={classes.buttons}>
                  {data.buttonCovid ? (
                    <a href={data.buttonCovid.fields.url} className={classes.buttonCovid}>{data.buttonCovid.fields.text}</a>
                  ) : null }
                  {data.buttonOnlineCheckin ? (
                    <a href={data.buttonOnlineCheckin.fields.url} className={classes.buttonCheckin}>{data.buttonOnlineCheckin.fields.text}</a>
                  ) : null}
                </div>
              </div>
              <div className={`${classes.image} col-lg-5`}>
                <img src="/images/woman.png" srcSet="/images/woman@2x.png 2x" alt="Woman" />
              </div>
            </> : null
          }
        </div>
      </div>
    </div>
  )
}
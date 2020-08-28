import classes from '../../styles/main/map.module.scss';

export function Map({ data }) {
  return (
    <div className={classes.map}>
      <div className="container container-small">
        {data ? (
          <div dangerouslySetInnerHTML={{ __html: data.mapCode }} />
        ) : null}
      </div>
    </div>
  )
}
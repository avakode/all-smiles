import Slider from "react-slick";
import classes from '../../styles/main/reviews.module.scss';

export function Reviews({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  let range = require('lodash.range');

  return (
    data ? (
      <div className={classes.reviews}>
        <div className={classes.textblock}>
          <h2 className={classes.title}>{data ? data.title : ''}</h2>
          <p className={classes.text}>{data ? data.text : ''}</p>
        </div>
        <div className={`${classes.slider} reviews-slider`}>
          <Slider {...settings}>
            {data.reviews && data.reviews.length > 0
              ? data.reviews.map(item => (
                <div key={item.fields.name} className={classes.slide} itemScope itemType="http://schema.org/Product">
                  <div className={classes.slideContent}>
                    <div className={classes.image}>
                      {item.fields.image ? (
                        <img itemProp="image"
                          src={item.fields.image.fields.file.url}
                          srcSet={item.fields.image2x ? `${item.fields.image2x.fields.file.url} 2x` : `${item.fields.image.fields.file.url} 1x`}
                          alt={item.fields.image.fields.title} />
                      ) : (
                        <img itemProp="image"
                          src="/images/no_photo.svg"
                          alt={item.fields.name} />
                      )}
                    </div>
                    <div className={classes.slideTextblock}>
                      <h5 itemProp="author" className={classes.itemTitle}>{item.fields.name}</h5>
                      <div itemProp="ratingValue" className={`${classes.stars} d-flex`}>
                        {item.stars && item.stars.length > 0
                          ? range(0, item.stars).map(star => (
                            <img key={star} src="/images/star.svg" alt="star" />
                          ))
                          : null }
                      </div>
                      <p itemProp="description" className={classes.itemText}>{item.fields.text}</p>
                      {item.fields.logo ? (
                        <div className={classes.author}>
                          <img
                            src={item.fields.logo.fields.file.url}
                            srcSet={item.fields.logo2x ? `${item.fields.logo2x.fields.file.url} 2x` : `${item.fields.logo.fields.file.url} 1x`}
                            alt={item.fields.logo.fields.title} />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))
              : null}
          </Slider>
        </div>
      </div>
    ) : null
  )
}
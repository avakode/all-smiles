import { MainLayout } from '../components/MainLayout';
import { FirstScreen } from '../components/main/first-screen';
import { Cards } from '../components/main/cards';
import { Welcome } from '../components/main/welcome';
import { Choose } from '../components/main/choose';
import { Reviews } from '../components/main/reviews';
import { Book } from '../components/main/book';
import { Services } from '../components/main/services';
import { Map } from '../components/main/map';
import fetchEntries from '../components/api/fetchEntries';
import SiteHead from '../components/siteHead';

function HomePage(props) {
  function checkFields(blockPosition) {
    if (
      props.homePage[0] &&
      props.homePage[0].fields &&
      props.homePage[0].fields.blocks &&
      props.homePage[0].fields.blocks[blockPosition] &&
      props.homePage[0].fields.blocks[blockPosition].fields
    ) {
      return props.homePage[0].fields.blocks[blockPosition].fields
    }

    return null
  }

  return (
    <MainLayout>
      <SiteHead data={props} />
      <FirstScreen data={checkFields(0)} />
      <Cards data={checkFields(1)} />
      <Welcome data={checkFields(2)} />
      <Reviews data={checkFields(3)} />
      <Choose data={checkFields(4)} />
      <Book data={checkFields(5)} />
      <Services data={checkFields(6)} />
      <Map data={checkFields(7)} />
    </MainLayout>
  )
}

HomePage.getInitialProps = async () => {
  const homepage = await fetchEntries({ content_type: "homepage", include: 10 })
  const maininfo = await fetchEntries({ content_type: "mainInfo", include: 10 })

  return { homePage: homepage, mainInfo: maininfo };
};

export default HomePage;
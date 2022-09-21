import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Header from './Header';

function Main() {
    return (
      <>
        <Header
          loggedIn={false}
        />
        <main>
          <Promo loggedIn={false} />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        <Footer />
      </>
    );
}

export default Main;

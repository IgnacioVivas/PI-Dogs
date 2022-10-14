import DogsListContainer from './components/dogsListContainer/DogsListContainer';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DogsDetailContainer from './components/dogsDetailContainer/DogsDetailContainer';
import Footer from './components/footer/Footer';
import CreateNewBreed from './components/createNewBreed/CreateNewBreed';
import WelcomePage from './components/welcomePage/WelcomePage';
import ArrowUp from './components/arrowUp/ArrowUp';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path={'/'}>
            <WelcomePage />
          </Route>
          <Route exact path={'/home'}>
            <Header />
            <ArrowUp />
            <DogsListContainer />
            <Footer />
          </Route>
          <Route exact path={'/detail-breed/:id'}>
            <DogsDetailContainer />
            <Footer />
          </Route>
          <Route exact path={'/new-breed'}>
            <CreateNewBreed />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

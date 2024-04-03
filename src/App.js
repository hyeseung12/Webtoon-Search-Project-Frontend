import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import WebToon from './components/WebToon';
import Favorite from './components/Favorite';
import Signup from './pages/auth/Signup';

import { ThemeProvider } from './context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyles';

// WebToon
import MrBlue from './pages/webtoon/MrBlue';
import AnyToon from './pages/webtoon/AnyToon';
import RidiBooks from './pages/webtoon/RidiBooks';
import Naver from './pages/webtoon/Naver';
import KakaoPage from './pages/webtoon/KakaoPage';
import KakaoWebToon from './pages/webtoon/KakaoWebToon';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/WebToon" component={WebToon}/>
            <Route exact path="/Favorite" component={Favorite}/>
            <Route exact path="/Signup" component={Signup}/>

            <Route exact path="/webToon/MrBlue" component={MrBlue}/>
            <Route exact path="/webToon/anytoon" component={AnyToon}/>
            <Route exact path="/webToon/ridibooks" component={RidiBooks}/>
            <Route exact path="/webToon/naver" component={Naver}/>
            <Route exact path="/webToon/kakaopage" component={KakaoPage}/>
            <Route exact path="/webToon/kakaowebtoon" component={KakaoWebToon}/>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

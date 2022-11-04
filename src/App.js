import Header from './component/Header.js';
import Hero from './component/Hero.js';
import CommentsForm from './component/CommentsForm.js';
import CommentsSection from './component/CommentsSection'
import Playlist from './component/Playlist'
import './App.scss';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <CommentsForm />
      <CommentsSection />
      <Playlist />
    </>
  );
}

export default App;

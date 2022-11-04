import Header from './component/Header.js';
import Hero from './component/Hero.js';
import CommentsForm from './component/CommentsForm.js';
import CommentsSection from './component/CommentsSection'
import './App.scss';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <CommentsForm />
      <CommentsSection />
    </>
  );
}

export default App;

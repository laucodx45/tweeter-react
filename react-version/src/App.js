import Navagation from './components/navagation';
import Profile from './components/profile';
import TweetForm from './components/tweetForm';
import TweetList from './components/tweetList';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navagation />
        <Profile />
        <main className="container">
          <TweetForm />
          <TweetList />
        </main>
    </div>
  );
}

export default App;

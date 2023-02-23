import './css/App.css';
import Dashboard from './Dashboard'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBZmbUjuK65bVJXrzOyFghJDH7d_WQr6VQ",
    authDomain: "sei-project-4.firebaseapp.com",
    projectId: "sei-project-4",
    storageBucket: "sei-project-4.appspot.com",
    messagingSenderId: "692605074559",
    appId: "1:692605074559:web:9b3a9b94d9a2709930134a",
    measurementId: "G-41D7V7BNBY"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;

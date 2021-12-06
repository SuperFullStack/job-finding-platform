import logo from './logo.svg';
import './App.css';
import FetchJobs from './FetchJobs';
import {Container} from 'react-bootstrap'

function App() {
  const {jobs, loading, error}= FetchJobs();
  return (
   <Container>
     {loading && <h1>Loading...</h1>}
     {error && <h2>Error. Try refreshing ...</h2>}
     {<h1>{jobs.length}</h1>}
   </Container>
  );
}

export default App;

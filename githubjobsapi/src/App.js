import logo from './logo.svg';
import './App.css';
import fetchJobs from './fetchJobs';
import {Container} from 'react-bootstrap'

function App() {
  const {jobs, loading, error}= fetchJobs();
  return (
   <Container>
     {loading && <h1>Loading...</h1>}
     {error && <h2>Error. Try refreshing ...</h2>}
     {<h1>{jobs.length}</h1>}
   </Container>
  );
}

export default App;

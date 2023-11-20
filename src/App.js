/* eslint-disable no-unused-vars */
import './App.css';
import {
  Button,
  Container,
  Row
} from 'reactstrap';
import "./assets/sass/theme.scss"
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Content from './page/Content';
import Topbar from './components/common/Topbar';

function App() {

  const [status, setStatus] = useState(true)

  return (
    <div className="App">
      <Sidebar status={status} absolute={true} />
      <div className={`${status ? 'content-expanded' : 'content-collapsed'}`}>
        <Container fluid>
          <Topbar
            status={status}
            setStatus={setStatus}
          />
          <Content />
        </Container>
      </div>
    </div>
  );
}

export default App;

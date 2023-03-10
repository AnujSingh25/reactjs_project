import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import Home from './Components/Home';
import Allcourses from './Components/Allcourses';
import AddCourses from './Components/Addcourses';
import Menus from './Components/Menus';
import Header from './Components/Header';

const App = () => {

  const btnHandle = () => {
    toast("Button", {
      position: "top-center"
    });
  }

  return (
    <div className='App'>

      <Router>
        <Header name="Props Passing" title="Passing Value" />
        <Container >
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>

              <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/add-courses" element={<AddCourses />} exact />
                <Route path="/view-courses" element={<Allcourses />} exact />
              </Routes>

              {/* <Home /> */}

            </Col>
          </Row>
        </Container>
      </Router>

    </div>
  )
}

export default App;

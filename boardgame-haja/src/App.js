import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Login from './components/Login';
import Join from './components/Join';
import Modal from './components/Modal';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/game');
        if (!response.ok) {
          throw new Error('failed to retrieve boardgame.json');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  const [modalShow, setModalShow] = useState(false);
  const modalClose = () => {
    setModalShow(false);
  };
  const modalOpen = () => {
    setModalShow(true);
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={<Main data={data} modalOpen={modalOpen} />}
          />
          <Route path='/detail' element={<Detail data={data} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
        </Routes>
      </div>
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </BrowserRouter>
  );
}
export default App;

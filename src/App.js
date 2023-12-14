/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auction } from './components/Auction';
import { Flee } from './components/Flee';
// eslint-disable-next-line import/named
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { NoPage } from './components/NoPage';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/flee" element={<Flee />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/*" element={<NoPage />} /> 
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>

    </div>

  )
}

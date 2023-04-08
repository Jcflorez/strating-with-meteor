import React from 'react';
import { Navbar } from './Navbar.jsx';
import { Image } from './Image.jsx';
import { AsambleaForm } from './AsambleaForm.jsx';
import { AsambleaList } from './AsambleaList.jsx';

export const App = () => (
  <div>
    <Navbar/>
    <main>
{/*       <Image/>  */}
      <AsambleaForm/>
      <AsambleaList/>
    </main>
  </div>
);

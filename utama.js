import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import List from './List';
import daftarbelanja from './daftarbelanja';

const Utama =() =>(
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} /> 
        <Route path="/list" component={List} />
        <Route path="/daftarbelanja" component={daftarbelanja} />

    </Switch>
)
export default Utama;
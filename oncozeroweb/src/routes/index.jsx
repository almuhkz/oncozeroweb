import { Route, Routes } from "react-router-dom";

import { Landing } from '../components/landing';
import { Scans } from '../components/scans';

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='scans' element={<Scans/>}></Route>
    </Routes>
  );
};

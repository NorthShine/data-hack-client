import Home from 'pages/Home/Home';
import { Main } from '../layouts/Main';

export default [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/', element: <Home />
      }
    ]
  }
];

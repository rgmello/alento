import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Authors } from './pages/Authors';
import { AuthorPoems } from './pages/AuthorPoems';
import { AuthorPoemReader } from './pages/AuthorPoemReader';
import { PoemPage } from './pages/PoemPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'search', Component: Search },
      { path: 'authors', Component: Authors },
      { path: 'author/:author', Component: AuthorPoems },
      { path: 'author/:author/poem/:id', Component: AuthorPoemReader },
      { path: 'poem/:id', Component: PoemPage },
    ],
  },
]);

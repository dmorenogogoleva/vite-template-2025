import { StrictMode } from 'react'
import ReactDOM from 'react-dom';

import { store } from './redux/store.ts'
import { AppRoutes } from "./AppRoutes.tsx";
import { Provider } from 'react-redux'

import './index.css'


(ReactDOM as any).render(<StrictMode>
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
</StrictMode>, document.getElementById('root'));




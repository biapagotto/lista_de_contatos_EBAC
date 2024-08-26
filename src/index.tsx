import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'
import reportWebVitals from './reportWebVitals'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyle /> {/* Adicione o componente GlobalStyle aqui */}
      <App />
    </>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals(console.log)

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './redux/store'
import HomePage from './pages/Home/HomePage'
import AddContactPage from './pages/AddContact/AddContactPage'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-contact" element={<AddContactPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

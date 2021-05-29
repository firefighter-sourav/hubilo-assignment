import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from 'app/domains/Error/ErrorBoundary'
import MainLayout from 'app/layouts/MainLayout'
import Routes from 'app/routes'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App

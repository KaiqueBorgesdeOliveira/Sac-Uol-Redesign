import React, { useEffect, useState } from 'react'
import './App.css'
import UolBar from './components/UolBar/UolBar'
import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import QuickActions from './components/QuickActions/QuickActions'
import HelpSearch from './components/HelpSearch/HelpSearch'
import Products from './components/Products/Products'
import AppDownload from './components/AppDownload/AppDownload'
import Contact from './components/Contact/Contact'
import FooterLinks from './components/FooterLinks/FooterLinks'
import Footer from './components/Footer/Footer'
import { AppProvider } from './context/AppContext'
import ChatBotPopup from './components/ChatBotPopup/ChatBotPopup'

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('no-js')

    const handleResize = () => {
      const width = window.innerWidth
      const produtosItems = document.querySelectorAll('.produtos-item')
      
      produtosItems.forEach(item => {
        if (width <= 768) {
          (item as HTMLElement).style.flex = '0 0 50%'
        } else if (width <= 480) {
          (item as HTMLElement).style.flex = '0 0 100%'
        } else {
          (item as HTMLElement).style.flex = '0 0 25%'
        }
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Estado para controlar o footer
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  return (
    <AppProvider>
      <div className="container">
        <UolBar />
        <Header />
        <main>
          <HeroBanner />
          <QuickActions />
          <HelpSearch />
          <Products />
          <AppDownload />
          <Contact />
          {/* Botão Mais informações */}
          <div className="more-info">
            <button
              type="button"
              className={`more-info-btn${isFooterOpen ? ' open' : ''}`}
              onClick={() => setIsFooterOpen((open) => !open)}
            >
              <span className="more-info-text">Mais informações</span>
              <span className="material-icons more-info-icon">
                {isFooterOpen ? 'expand_less' : 'expand_more'}
              </span>
              <span className="more-info-underline"></span>
            </button>
          </div>
          {/* FooterLinks controlado pelo estado */}
          {isFooterOpen && <FooterLinks />}
          {/* Outros componentes serão adicionados aqui */}
        </main>
        <Footer />
      </div>
      <ChatBotPopup />
    </AppProvider>
  )
}

export default App

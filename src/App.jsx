import Header from './components/Header'
import Main from './components/Main'

const App = () => {

  return (
    <div className='w-full min-h-screen bg-light-background dark:bg-dark-background text-light-primary dark:text-dark-primary font-main'>
      <div className='container mx-auto'>
        <Header />
        <Main />
      </div>
    </div >
  )
}

export default App

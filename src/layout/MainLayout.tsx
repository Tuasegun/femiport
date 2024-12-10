import {Footer, Header} from '../components'

interface MainLayoutInterface {
    children: React.ReactNode;
} 

export const MainLayout: React.FC<MainLayoutInterface> = ({children}) => {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
  )
}

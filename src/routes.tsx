import {Routes, Route, } from 'react-router-dom'
import {Home, ViewWorks, WorksList, Info} from './pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/workslist" element={<WorksList/>} />
            <Route path="/work/:id" element={<ViewWorks/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
    )
}
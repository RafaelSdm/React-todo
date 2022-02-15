import {BrowserRouter, Route, Routes } from 'react-router-dom'
import {App} from '../App'
import {Home, NotFound } from '../Pages'


export const Routers = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                

                <Route path='*' element={<NotFound/>}>

                </Route>
            </Routes>
        
        </BrowserRouter>
    )


}
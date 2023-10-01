import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Header from '../Components/Layout/Header/Header'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
                    {routes.map(({ id, path, Element }) => (
                        <Route key={id} path={path} element={<Element />} />
                    ))}
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter
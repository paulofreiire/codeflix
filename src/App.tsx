import React from 'react';
import './App.css';
import {Box, ThemeProvider, Typography} from '@mui/material';
import {Header} from "./components/header";
import {Layout} from "./components/Layout";
import {appTheme} from "./config/theme";
import {Routes, Route} from "react-router-dom";
import {CategoryList} from "./features/categories/ListCategory";
import {CreateCategory} from "./features/categories/CreateCategory";
import {EditCategory} from "./features/categories/EditCategory";


function App() {
    return <ThemeProvider theme={appTheme}>
        <Box component="main"
             sx={{height: "100vh", backgroundColor: (theme) => theme.palette.grey[900]}}
        >
            <Header/>
            <Layout>
                <Routes>
                    <Route path="/" element={<CategoryList/>}/>
                    <Route path="/categories" element={<CategoryList/>}/>
                    <Route path="/categories/create" element={<CreateCategory/>}/>
                    <Route path="/categories/edit/:id" element={<EditCategory/>}/>

                    {/*<Route path="*" element={{}} />*/}
                </Routes>
            </Layout>
        </Box>
    </ThemeProvider>

}

export default App;

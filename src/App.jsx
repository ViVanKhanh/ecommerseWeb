import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvide } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/StoreProvider';

function App() {
    return (
        <>
            <StoreProvider>
                <ToastProvider>
                    <SideBarProvide>
                        <SideBar />
                        <BrowserRouter>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Routes>
                                    {routers.map((item, index) => {
                                        return (
                                            <Route
                                                key={index}
                                                path={item.path}
                                                element={<item.component />}
                                            />
                                        );
                                    })}
                                </Routes>
                            </Suspense>
                        </BrowserRouter>
                    </SideBarProvide>
                </ToastProvider>
            </StoreProvider>
        </>
    );
}

export default App;

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
    const isAuth = false;
    return (
        <>
            {isAuth ? (
                <Navigate to="/" />
            ) : (
                <>
                    <section className="flex flex-col items-center justify-center flex-1 py-10">
                        <Outlet />
                    </section>

                    <img src="/assets/images/side-img.svg" alt="side image"
                        className='hidden object-cover w-1/2 h-screen bg-no-repeat xl:block'
                    />
                </>
            )}
        </>
    )
}

export default AuthLayout;
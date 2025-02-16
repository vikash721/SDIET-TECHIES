import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import PromotionPage from '../components/PromotionPage';

const LoginPage = () => {
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/"); // Redirect to home page if already logged in
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <PromotionPage />
            {/* Your Login Form Component Here */}
        </>
    );
};

export default LoginPage;

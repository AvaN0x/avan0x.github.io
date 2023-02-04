import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from 'components/layout/Footer';

const ViewContainer = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default function DefaultLayout() {
    return (
        <ViewContainer>
            <div style={{ minHeight: '100vh' }}>
                <Outlet />
            </div>
            <Footer />
        </ViewContainer>
    );
}

import React, { FC } from 'react';
import MainLayout from '@components/layout/MainLayout';
import TopSection from '@components/pricing/topSection';

const Pricing: FC<{}> = () => {
    return (
        <MainLayout
            layoutProps={{
                title: 'Pricing | Reconstruction',
            }}
            courseType="immersive"
        >
            <div className="container">
                <TopSection />
            </div>
        </MainLayout>
    );
};

export default Pricing;

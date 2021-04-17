import MainLayout from '@components/layout/MainLayout';
import React, { FC } from 'react';

const Pricing: FC<{}> = () => {
    return (
        <MainLayout
            layoutProps={{
                title: 'Pricing | Reconstruction',
            }}
            courseType="immersive"
        >
            <div className="container">
                
            </div>
        </MainLayout>
    );
};

export default Pricing;

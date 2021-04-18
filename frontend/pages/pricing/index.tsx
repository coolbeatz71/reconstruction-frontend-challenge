import React, { FC } from 'react';
import MainLayout from '@components/layout/MainLayout';
import TopSection from '@components/pricing/top_section';
import Container from '@components/pricing/container';
import Notify from '@components/pricing/notify';

const courses = [
    {
        title: 'Reading',
        desc: `Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at
        lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Siam eget risus varius
        blandit.`,
    },
    {
        title: 'Mathematics',
        desc: `Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at
        lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Siam eget risus varius
        blandit.`,
    },
    {
        title: 'Spoken word',
        desc: `Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at
        lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Siam eget risus varius
        blandit.`,
    },
];

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
            <div className="container">
                {courses.map((el, i) => (
                    <Container title={el.title} desc={el.desc} />
                ))}
            </div>
            <div className="container">
                <Notify />
            </div>
        </MainLayout>
    );
};

export default Pricing;

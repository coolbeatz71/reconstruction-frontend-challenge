import { Col, Row } from 'antd';
import React, { FC } from 'react';
import PricingCard from './card';

interface IProps {
    title: string;
}

const category = [
    {
        subTitle: 'This is a One Line Title',
        grades: '2nd - 3rd Grade',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...',
    },
    {
        subTitle: 'This is a One Line Title (But, now it’s a two line title)',
        grades: '2nd - 3rd Grade',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...',
    },
    {
        subTitle: 'This is a Another title',
        grades: '2nd - 3rd Grade',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...',
    },
];

const PricingGroup: FC<IProps> = ({ title }) => {
    return (
        <div className="group__wrapper">
            <Row gutter={18}>
                {category.map((el, i) => (
                    <Col span={8} key={i}>
                        <PricingCard title={title} subTitle={el.subTitle} grade={el.grades} desc={el.desc} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PricingGroup;

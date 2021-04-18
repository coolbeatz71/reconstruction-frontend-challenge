import { Carousel, Divider, Typography } from 'antd';
import React, { FC } from 'react';
import PricingGroup from './group';

const { Title, Paragraph } = Typography;

interface IProps {
    title: string;
    desc: string;
}

const Container: FC<IProps> = ({ title, desc }) => {
    return (
        <div className="container__wrapper">
            <div className="container__wrapper__title">
                <Title level={3}>{title}</Title>
                <Paragraph>{desc}</Paragraph>
            </div>
            <Divider />
            <div>
                <Carousel dots arrows draggable>
                    {Array(7)
                        .fill(1)
                        .map((_el, i) => (
                            <PricingGroup key={i} title={title} />
                        ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Container;

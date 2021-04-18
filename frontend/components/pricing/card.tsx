import React, { FC } from 'react';
import { Card, Typography } from 'antd';

const { Text, Title, Paragraph } = Typography;

interface IProps {
    title: string;
    subTitle: string;
    grade: string;
    desc: string;
}

const PricingCard: FC<IProps> = ({ title, subTitle, grade, desc }) => {
    const header = (
        <div className="card__wrapper__header">
            <div>
                <Text className="card__wrapper__header__title">{title}</Text>
                <Paragraph className="card__wrapper__header__subTitle">{subTitle}</Paragraph>
            </div>
            <div>
                <Text className="card__wrapper__header__grade">{grade}</Text>
            </div>
        </div>
    );

    return (
        <div className="card__wrapper">
            <Card title={header} hoverable>
                <Paragraph>{desc}</Paragraph>
                <button className="card___cta button-primary-l">
                    Learn More
                    <span className="card__cta__arrow"></span>
                </button>
            </Card>
        </div>
    );
};

export default PricingCard;

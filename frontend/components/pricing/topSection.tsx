import { Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

const TopSection: FC<{}> = () => {
    return (
        <div className="topSection__wrapper">
            <Row>
                <Col span={12} className="topSection__wrapper__left">
                    <Title level={2}>For Shorties</Title>
                    <p>5-10 years old</p>
                    <Link href="/courses">
                        <button className="topSection___cta button-primary-l" style={{ width: '284px' }}>
                            Find a Class
                            <span className="topSection__cta__arrow"></span>
                        </button>
                    </Link>
                </Col>
                <Col span={12}>
                    <img src="pricing-bulb.svg" alt="pricing bulb" />
                </Col>
            </Row>
            <Row align="middle" justify="center" className="topSection__wrapper__bottom">
                <Title level={2}>The Come up</Title>
                <Paragraph>
                    Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Donec
                    ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Maecenas sed diam eget risus varius blandit sit amet non magna.
                </Paragraph>
            </Row>
        </div>
    );
};

export default TopSection;

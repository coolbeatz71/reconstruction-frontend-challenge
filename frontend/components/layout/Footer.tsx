import { Row, Col, Layout, Typography, Menu } from 'antd'
import Link from 'next/link'
import ActiveLink from "@components/common/activeLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const { Title, Text } = Typography

const Footer = () => (
    <Layout.Footer>
        <div className="container">
            <Row>
                <Col className="footer__logo" lg={6} md={24} sm={24} xs={24}>
                    <figure>
                        <Link href="/">
                            <a>
                                <img src="/footer-logo.svg" alt="Reconstruction" />
                            </a>
                        </Link>
                    </figure>
                </Col>
                <Col className="footer__menu__items" lg={12} md={24} sm={24} xs={24}>
                    <Row>
                        <Col sm={8} xs={24}>
                            <Title level={4}>Learn</Title>
                            <Menu mode="inline">
                                <Menu.Item>
                                    <ActiveLink children={`Shorties`} href="/curriculum/shorties" className={null} />
                                </Menu.Item>
                                <Menu.Item>
                                    <ActiveLink children={`Youngins`} href="/curriculum/youngins" className={null} />
                                </Menu.Item>
                                <Menu.Item>
                                    <ActiveLink children={`Gen Z`} href="/curriculum/genz" className={null} />
                                </Menu.Item>
                                <Menu.Item>
                                    <ActiveLink children={`Grown Folks`} href="/curriculum/grownfolks" className={null} />
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col sm={8} xs={24}>
                            <Title level={4}>Explore</Title>
                            <Menu mode="inline">
                                <Menu.Item>
                                    <ActiveLink children={`About Us`} href="/about" className={null} />
                                </Menu.Item>
                                <Menu.Item>
                                    <ActiveLink children={`Our Team`} href="/about#ourpeople" className={null} />
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col sm={8} xs={24}>
                            <Title level={4}>Collaborate</Title>
                            <Menu mode="inline">
                                <Menu.Item>
                                    <ActiveLink children={`Work With Us`} href="/work-with-us" className={null} />
                                </Menu.Item>
                                <Menu.Item>
                                    <ActiveLink
                                        children={`Partner with Us`}
                                        href="/partner-with-us"
                                        className={null}
                                    />
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Col>
                <Col className="footer__social" lg={6} md={24} sm={24} xs={24}>
                    <a href="https://twitter.com/reconstruct_us" target="_blank" aria-label="Twitter Link">
                        <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                    </a>
                    <a href="https://www.instagram.com/reconstructionus/" target="_blank" aria-label="Instagram Link">
                        <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                    </a>
                    <a href="https://www.facebook.com/ReconstructionUS" target="_blank" aria-label="Facebook Link">
                        <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/company/reconstruction-us" target="_blank" aria-label="LinkedIn Link" >
                        <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
                    </a>
                </Col>
                <Col className="footer__copyright center" span={24}>
                    <Text>
                        &copy; 2020 Reconstruction US. All Rights Reserved. |{' '}
                        <a href="/privacy-policy.pdf" target="_blank">
                            Privacy Policy
                        </a>{' '}
                        |{' '}
                        <a href="/terms-of-use.pdf" target="_blank">
                            Terms of Use
                        </a>{' '}
                        |{' '}
                        <a href="/Course_Refund_Policy.pdf" target="_blank">
                            Refund Policy
                        </a>


                    </Text>
                </Col>
            </Row>
        </div>
        <script type="text/javascript" src="/js/accessbie.js"/>
    </Layout.Footer>
);

export default Footer

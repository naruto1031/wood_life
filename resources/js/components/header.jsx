import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";

const Header = (props) => {

    return (
        <>
            <HeaderContents style={{ backgroundColor: props.backgroundColor }}>
                <WoodlifeLogo>
                    <img src="./image/Wood_Life_logo.png" alt="Wood_Life_logo" />
                </WoodlifeLogo>
                <NavContents>
                    <ul>
                        <HeaderLink href="/">
                            <li>ホーム</li>
                        </HeaderLink>
                        <HeaderLink href="/About">
                            <li>価格目安</li>
                        </HeaderLink>
                        <HeaderLink href="/">
                            <li>施工例</li>
                        </HeaderLink>
                        <HeaderLink href="/">
                            <li>会社概要</li>
                        </HeaderLink>
                        <HeaderLink href="/">
                            <li>お問い合せ</li>
                        </HeaderLink>
                        <HeaderLink href="/">
                            <li>会員ページ</li>
                        </HeaderLink>
                    </ul>
                </NavContents>
            </HeaderContents>

            {/* <HeaderContents>
                <HeaderLeft style={{backgroundColor : props.backgroundColor}}>
                    <img src="./image/Wood_Life_logo.png" alt="Wood_Life_logo" />
                    <nav>
                        <NavUl>
                            <HeaderLink href="/">
                                <NavList>ホーム</NavList>
                            </HeaderLink>
                            <HeaderLink href="/About">
                                <NavList>価格目安</NavList>
                            </HeaderLink>
                            <HeaderLink href="/">
                                <NavList>施工例</NavList>
                            </HeaderLink>
                            <HeaderLink href="/">
                                <NavList>会社概要</NavList>
                            </HeaderLink>
                            <HeaderLink href="/">
                                <NavList>お問い合せ</NavList>
                            </HeaderLink>
                            <HeaderLink href="/">
                                <NavList>会員ページ</NavList>
                            </HeaderLink>
                            <Icon>
                                <a
                                    href=""
                                    target="_blank"
                                >
                                    <SNSIcon icon={faInstagram} />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCJ1fsxdIX6WbDScv0F-_khw"
                                    target="_blank"
                                >
                                    <SNSIcon icon={faYoutube}></SNSIcon>
                                </a>
                                <a
                                    href="http://blog.niwablo.jp/dekkiyasan/"
                                    target="_blank"
                                >
                                    <SNSIcon icon={faBlog}></SNSIcon>
                                </a>
                            </Icon>
                        </NavUl>
                    </nav>
                    <h2>Wood Life</h2>
                </HeaderLeft>

                <HeaderImg>
                    <img
                        src="./image/endai033.png"
                        id="slide_img"
                        className="slider img"
                    />
                </HeaderImg>

                <HeaderSubtitle>
                    <h4 className="sub-text">暮らしををより豊かにする</h4>
                </HeaderSubtitle>
            </HeaderContents> */}
        </>
    );
};

const HeaderContents = styled.header`
    height: 11vh;
    width: 100%;
    display: flex;
`;

const WoodlifeLogo = styled.div`
    margin-left: 20px;
    height: 100%;
        & img {
        height: 100%;
    }
`
const NavContents = styled.nav`
    display: flex;
    width: 600px;
    margin-left: auto;
    & ul {
        width: 100%;
        padding: 5px 0px;
        display: flex;
        align-items: center;
        margin: 0px;
    }
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 17px;
    padding: 5px 0px;
    & li {
        list-style: none;
        padding: 5px 10px;
    }
    & :hover {
        text-decoration: underline;
    }
`;

export default Header;

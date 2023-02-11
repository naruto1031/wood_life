import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import logo from "../../../public/image/Wood_Life_logo.png";


const HeaderContents = styled.header`
    height: 84vh;
    position: relative;
`;

const HeaderLeft = styled.div`
    margin-top: 0;
    width: 360px;
    padding: 0px 0 0 55px;
    height: 89vh;
    position: absolute;

    & img {
        width: 175px;
        margin-bottom: 30px;
    }
    & h2 {
        padding: 35% 0px 0px 40px;
        color: #fff;
    }
`;
const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 17px;
`;
const NavUl = styled.ul`
    margin-top: 0;
`;

const NavList = styled.li`
    list-style: none;
    margin-bottom: 30px;
`;
const Icon = styled.div`
    display: flex;
`;

const HeaderImg = styled.div`
    width: 1060px;
    position: absolute;
    top: 183px;
    left: 20%;
    z-index: 1;
    padding-right: 4%;
    & img {
        width: 100%;
    }
`;

const SNSIcon = styled(FontAwesomeIcon)`
    font-size: 1.3em;
    margin-right: 20px;
    color: white;
`;

const HeaderSubtitle = styled.div`
    position: absolute;
`;

const Header = (props) => {

    return (
        <>
            <HeaderContents>
                {/* headerの背景は、以下の部分で定義される。(propsからの受け渡し) */}
                <HeaderLeft style={{backgroundColor : props.backgroundColor}}>
                    <img src={logo} alt="Wood_Life_logo" />
                    <nav>
                        <NavUl>
                            <HeaderLink href="/">
                                <NavList>ホーム</NavList>
                            </HeaderLink>
                            <HeaderLink href="/">
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
                                <Link 
                                    href="" 
                                    target="_blank"
                                >
                                    <SNSIcon icon={faInstagram} />
                                </Link>
                                <Link 
                                    href="https://www.youtube.com/channel/UCJ1fsxdIX6WbDScv0F-_khw" 
                                    target="_blank"
                                >
                                    <SNSIcon icon={faYoutube}></SNSIcon>
                                </Link>
                                <Link
                                    href="http://blog.niwablo.jp/dekkiyasan/"
                                    target="_blank"
                                >
                                    <SNSIcon icon={faBlog}></SNSIcon>
                                </Link>
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
                    <h4>生活をより豊かにする</h4>
                    <a href="./PHP/Login.php">ご相談はこちらから</a>
                </HeaderSubtitle>
            </HeaderContents>
        </>
    );
};

export default Header;

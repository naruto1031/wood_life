import { Link } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import logo from "../../../public/image/Wood_Life_logo.png"

const HeaderLeft = styled.div`
    margin-top: 0px;
    margin-left: 100px;
    width: 450px;
    height: 100vh;
    & img {
        margin-left: 20px;
        width: 175px;
        margin-bottom: 30px;
    }
`;
const HeaderContents = styled.header`
    margin-bottom: 80px;
`;
const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 17px;
`;
const NavUl = styled.ul`
    margin-top: 0;
    margin-left: 20px;
`;

const NavList = styled.li`
    list-style: none;
    margin-bottom: 35px;
`;
const Icon = styled.div`
    display: flex;
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
                            <Icon>
                                <Link href="">
                                    <i
                                        className="fab fa-instagram"
                                        target="_blank"
                                    ></i>
                                </Link>
                                <Link
                                    href="https://www.youtube.com/channel/UCJ1fsxdIX6WbDScv0F-_khw"
                                    target="_blank"
                                >
                                    <i
                                        className="fab fa-youtube"
                                        target="_blank"
                                    ></i>
                                </Link>
                                <Link
                                    href="http://blog.niwablo.jp/dekkiyasan/"
                                    target="_blank"
                                >
                                    <i
                                        className="fa-solid fa-blog"
                                        target="_blank"
                                    ></i>
                                </Link>
                            </Icon>
                        </NavUl>
                    </nav>
                    <h2>Wood Life</h2>
                </HeaderLeft>

                <div className="slider_img">
                    <img
                        src="./image/endai03.png"
                        id="slide_img"
                        className="slider img"
                    />
                </div>

                <div className="header_content02">
                    <h4>生活をより豊かにする</h4>
                    <a href="./PHP/Login.php">ご相談はこちらから</a>
                </div>
            </HeaderContents>
        </>
    );
};

export default Header;

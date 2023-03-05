import Header from "../components/header";
import "../../css/index.css";
import styled from "styled-components";

const MainImg = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    background-image: url("image/main_img_2.png");
    background-size: cover;
    background-repeat: no-repeat;
    & .main-title {
        position: absolute;
        top: 50%;
        width: 800px;
        color: white;
        font-size: 1.3em;
        & .main-title-1 {
            width: 45%;
            padding-left: 30px;
            background-color: rgba(64, 124, 81, 0.8);
        }

        & .main-title-2 {
            padding-left: 30px;
            width: 90%;
            background-color: rgba(64, 124, 81, 0.8);
        };

    }
`;

const Toppage = () => {
    return (
        <>
            <Header backgroundColor={"#407c51"}></Header>
            <MainImg>
                <div className="main-title">
                    <div className="main-title-1"><h1>ウリン材を使用</h1></div>
                    <div className="main-title-2"><h1>ウッドデッキで、暮らしを豊かに</h1></div>
                </div>
            </MainImg>
            <article class="article_cotents">
                <div className="contents_num_01"><p>01</p></div>
                {/* <img src="./image/chibadkins.jpg" className="contents_img" alt="chabaikns"> */}
                    <div className="content_01">
                        <h2>ウッドデッキ・木製家具が欲しいあなたに</h2>
                        <p className="sub_title">本当に欲しいものを欲しい人へ</p>
                        <h3 className="sub_content">建築のプロが完全オーダーメイドでお作りします</h3>
                        <p className="sub_txt">
                            一級建築士の資格を持つ現職大工が施工を担当。ご希望のイメージやサイズなどを細かく伺い、お客様の「できたらいいな・・・」
                            「あったらいいな・・・」を形にします。この柔軟さとクオリティのバランスの良さは、どの業者にも負けません!!!!
                        </p>
                    </div>
            </article>

            <article className="article_cotents">
                <div className="contents_num_02"><p>02</p></div>
                {/* <img src="./image/udkzk20110922-3.jpg" className="contents_img_02" alt="udkzk20110922-3"> */}
                    <div className="content_02">
                        <h2>低価格で高品質を実現</h2>
                        <h3 className="sub_content_02">直接施工&長く使えて味が出るウリン材</h3>
                        <p className="sub_txt_02">
                            直接施工で中間マージンを抑え、防虫・防腐材不使用で長期間使えるウリン材を用いることで、低価格を実現しています。
                            ウリン材は、市販の材木よりも比較的高額ですが、長期的視野で見ることが大切です。
                        </p>
                    </div>
                    <div className="button01">
                        <a href="./price.html">価格目安はこちらから</a>
                    </div>
            </article>
            <div className="last_article">
                <div className="last_contents">

                    <article className="article_cotents_01">
                        <div className="contents_num_03"><p>03</p></div>
                        <div className="content_03">
                            <h2>いつでもご相談承っております</h2>
                            <h3>DM機能開設!!!!!是非ご利用ください
                            </h3>
                            <p className="sub_txt_03">
                                お客様がお気軽に相談が行えるよう、当サイトにダイレクトメッセージサイトを開設いたしました!
                                是非ご利用ください。※簡単な会員登録が必要です。
                            </p>
                        </div>
                        <div className="button02">
                            <a href="./PHP/Login.php">ご相談はこちらから</a>
                        </div>
                    </article>

                    <article className="article_cotents_02">
                        <div className="contents_num_04"><p>04</p></div>
                        {/* <img src="./image/uds3-12.jpg" className="contents_img_03" alt="uds3-12"> */}
                            <div className="content_03">
                                <h2>修理や手直しもお任せください</h2>
                                <h3>アフターサポートもしっかり行います</h3>
                                <p className="sub_txt_03">
                                    長く使っていただくため、施工後の修理・手直しも低価格で行っております。
                                    チャット機能・電話・メールからお問い合わせください。
                                </p>
                            </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Toppage;

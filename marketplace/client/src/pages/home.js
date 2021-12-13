import React from 'react';
import {Link} from "react-router-dom";
function Home(props) {
    return (
        <div>
            {/* slider */}
            <section className="slider-area">
                <div className="slider-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="slider-information">
                                    <h1>Crypto-Collectibles Marketplace.</h1>
                                    <div className="em_bar">
                                        <div className="em_bar_bg" />
                                    </div>
                                    <p className="theme-description">We are all new crypto-collectibles marketplace from arts, music, games to domains, and templates, and many more in the list. Now you can buy &amp; sell rare items.</p>
                                    <div className="slider-btn">
                                        <Link to={"/store-front"} className="theme-btn">View Store</Link>
                                        <Link to={"/create"} className="theme-btn sl-sale-btn">Create NFT</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="slider-images">
                                    <img src="assets/images/slide-image.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* slider */}
            {/* earn */}
            <section className="earn-area page-paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="earn-main-box">
                                <div className="earn-images">
                                    <img src="assets/images/about.png" alt="" />
                                </div>
                                <div className="earn-info">
                                    <h6>About</h6>
                                    <h2>NFT – Marketplace Buy &amp; sell over the blockchain.</h2>
                                    <p className="theme-description">We provide you with the best NFT marketplace to sell items on the blockchain, buy &amp; sell digital items.</p>
                                    <div className="em_bar">
                                        <div className="em_bar_bg" />
                                    </div>
                                    <div className="singel-about-box">
                                        <div className="singel-about-box-item clearfix">
                                            <div className="singel-about-box-icon">
                                                <img src="assets/images/nft/nft_governance.png" alt="NFT-Governance" />
                                            </div>
                                            <div className="singel-about-box-info">
                                                <h3 className="theme-title">Create your store</h3>
                                                <p className="theme-description">You can create your store and increase your brand and sell your items over there digitally.</p>
                                            </div>
                                        </div>
                                        <div className="singel-about-box-item clearfix">
                                            <div className="singel-about-box-icon">
                                                <img src="assets/images/nft/super_nft.png" alt="Super-NFT" />
                                            </div>
                                            <div className="singel-about-box-info">
                                                <h3 className="theme-title">Create or list your items.</h3>
                                                <p className="theme-description">Now you can list items in your store and if you don't have one you can also list it on our store for free.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* earn */}
            {/* earn area */}
            <section className="earn-area page-paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="earn-main-box">
                                <div className="earn-info">
                                    <h6>Token</h6>
                                    <h2>Now Earn NFT (token) Whenever You Trade</h2>
                                    <div className="em_bar">
                                        <div className="em_bar_bg" />
                                    </div>
                                    <p className="theme-description">With our earning NFT (token) feature, you can earn every time you do trading through our marketplace.</p>
                                    <ul>
                                        <li>Make your marketplace</li>
                                        <li>Then select a project you want to work on</li>
                                        <li>Give token if you like the project</li>
                                        <li>Even you can sell your token</li>
                                    </ul>
                                </div>
                                <div className="earn-images">
                                    <img src="assets/images/token.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* earn area */}
            {/* mintable guides */}
            <section className="mintable-guides-area page-paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="section-title text-center">
                                <h6>Guides</h6>
                                <h2 data-watermark="Guides">Guides For NFT Marketplace</h2>
                                <div className="em_bar">
                                    <div className="em_bar_bg" />
                                </div>
                                <p className="subtitle">Get to know how to use NFT – Marketplace, how to sell or buy, and how to create your store on our platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="mintable-guides-box text-center">
                                <div className="mintable-guides-media">
                                    <img src="assets/images/mintale1.png" alt="Why-NFT" />
                                </div>
                                <div className="mintable-guides-info">
                                    <h3 className="theme-title">What is NFTs ( digital items)</h3>
                                    <p className="theme-description">NFTs are non-fungible tokens that exist on blockchain like any other cryptocurrencies; every digital item has its own tokenize value.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="mintable-guides-box text-center">
                                <div className="mintable-guides-media">
                                    <img src="assets/images/mintale2.png" alt="Digital-Store-NFT" />
                                </div>
                                <div className="mintable-guides-info">
                                    <h3 className="theme-title">Create your store easily</h3>
                                    <p className="theme-description">You need is crypto wallet if you already have then just connected it or else if you don't then create on, then go to create the store page and fill in the basic data.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="mintable-guides-box text-center">
                                <div className="mintable-guides-media">
                                    <img src="assets/images/mintale3.png" alt="Sell-Items-NFT" />
                                </div>
                                <div className="mintable-guides-info">
                                    <h3 className="theme-title">Start selling more items</h3>
                                    <p className="theme-description">The only way to sell any NFT (items) is by having good content, high-quality items, and most important give buyers' good descriptive reason to buy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* mintable guides */}
        </div>
    );
}

export default Home;

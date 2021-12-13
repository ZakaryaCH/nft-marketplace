import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import NftCard from "./nftCard";
import UserContext from "../contexts/UserContext";
import {paginate} from "../services/utilService";
import {getUserNFTs} from "../utils/commonInteractor";
import {ListingType} from "../utils/blockchainInteractor";
import useLoader from "../hooks/useLoader";

let allNfts = [];
let totalCount = 0;
function MyNfts(props) {

    const {state} = useContext(UserContext);
    const [loader, showLoader, hideLoader] = useLoader();
    const [data,setData] = useState([]);
    const [currPage,setCurrPage] = useState(1);
    const [totalPage,setTotalPage] = useState(1);

    useEffect(()=>{
        init();
    },[]);

    useEffect(()=>{
        getPageData();
    },[currPage])

    const init = async () =>{
        showLoader();
        let userNFTs =  await getUserNFTs(state?.user?.address);
        allNfts = userNFTs;
        totalCount = userNFTs.length;
        setTotalPage(Math.ceil(totalCount/9));
        allNfts.length && getPageData();
        hideLoader();
    }

   function getPageData(){
      const pagedData = paginate(allNfts,currPage,9);
       setData(pagedData);
    }

    return  (
        <>
            {loader}
            <section className="browse-product-area page-paddings" style={{paddingTop: '70px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="browse-product-filter">
                                <div className="browse-product-filter">
                                    <div className="filter-box">
                                        <h3 className="theme-title">Listing type</h3>
                                        <div className="filter-menu">
                                            <ul>
                                                <li>
                                                    <input className="styled-checkbox" id="styled-checkbox-8"
                                                           type="checkbox" defaultValue="value1"/>
                                                    <label htmlFor="styled-checkbox-8"><span>Auction</span></label>
                                                </li>
                                                <li>
                                                    <input className="styled-checkbox" id="styled-checkbox-9"
                                                           type="checkbox" defaultValue="value1"/>
                                                    <label htmlFor="styled-checkbox-9"><span>Fixed Price</span></label>
                                                </li>
                                                <li>
                                                    <input className="styled-checkbox" id="styled-checkbox-9"
                                                           type="checkbox" defaultValue="value1"/>
                                                    <label htmlFor="styled-checkbox-9"><span>Others</span></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filter-box">
                                        <h3 className="theme-title">Categories</h3>
                                        <div className="filter-menu">
                                            <ul>
                                                <li>
                                                    <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" />
                                                    <label htmlFor="styled-checkbox-1"><span>Art</span></label>
                                                </li>
                                                <li>
                                                    <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox"  />
                                                    <label htmlFor="styled-checkbox-2"><span>Photo</span></label>
                                                </li>
                                                <li>
                                                    <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox"  />
                                                    <label htmlFor="styled-checkbox-3"><span>Gif</span></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="browse-product-top">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="browse-product-left">
                                            <p>Showing {data.length}/{totalCount} Items</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="browse-product-right clearfix">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item"><Link to="/store-front" className="browse-list"
                                                                               data-toggle="tooltip" data-placement="top"
                                                                               title="Store"><i
                                                    className="fas fa-store"/></Link></li>
                                                <li className="nav-item"><a className="browse-list nav-link active"
                                                                            data-toggle="tab" href="#item-grid"
                                                                            role="tab"><i className="fas fa-th-large"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="browse-product-box">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="item-grid" role="tabpanel">
                                        <div className="row">
                                            {

                                                data.map(card=>(
                                                    <NftCard isMyNft={true} nft={card}  isAuction={card.listingType === ListingType.AUCTION}  tokenId={card.tokenId} key={card.tokenId}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="pagination-box text-center">
                                            <ul className="clearfix">
                                                {
                                                    currPage !== 1 && <li onClick={()=>setCurrPage(currPage-1)} style={{cursor:'pointer'}}><a><i
                                                        className="fas fa-long-arrow-alt-left"/></a>Prev</li>
                                                }
                                                <li className="current"><span>{currPage}</span></li>
                                                {
                                                    currPage+1 <= totalPage &&  <li onClick={()=>setCurrPage(currPage+1)} style={{cursor:'pointer'}}><a>Next <i
                                                        className="fas fa-long-arrow-alt-right"/></a></li>
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyNfts;

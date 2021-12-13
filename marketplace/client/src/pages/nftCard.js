import { toInteger } from 'lodash';
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {getMetaByTokenId} from "../services/metaService";
import { getCurrentPriceByTokenId } from '../utils/auctionInteractor';
import { web3 } from '../utils/blockchainInteractor';

function NftCard({isAuction=false,tokenId,isMyNft=false,nft}) {
    const history = useHistory();
    const [nftDetails,setNftDetails] =  useState(null);
    const [auctionDetails, setAuctionDetails] = useState(null);

    useEffect(()=>{
        tokenId && fetchNFT(tokenId);
    },[])

    const  fetchNFT = async id =>{
        try{
            const {data} = await getMetaByTokenId(id);
            setNftDetails({...nft, ...data});
            if(isAuction){
                setAuctionDetails({
                    currentPrice: Number(web3.utils.fromWei(await getCurrentPriceByTokenId(id))).toFixed(5),
                    timeRemaining: getTimeRemaining(nft),
                })
            }
        }catch (e) {
            // toast.error('Something Went Wrong!');
        }
    }

    const getTimeObj = (totalSeconds) => {
        let secondsRemaining = totalSeconds;
        const days = Math.floor(secondsRemaining / (60 * 60 * 24));
        secondsRemaining = secondsRemaining - days*24*60*60;
        const hours = Math.floor(secondsRemaining / (60 * 60));
        secondsRemaining = secondsRemaining - hours*60*60;
        const minutes = Math.floor(secondsRemaining / (60));
        secondsRemaining = secondsRemaining - minutes*60;
        const seconds = Math.floor(secondsRemaining);
        return {days, hours, minutes, seconds, totalSeconds};
    }

    const getTimeRemaining = (res) => {
        const today = new Date();
        const endDate = new Date((toInteger(res.startedAt) + toInteger(res.duration))*1000);
        let secondsRemaining = Math.floor(Math.abs(endDate - today)/1000);
        return getTimeObj(secondsRemaining);
    }
    
    return (
        <div onClick={()=>history.push(`/nft/${tokenId}`)} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="item-group" >
                <span className="store-label">{nftDetails?.category || 'N/A'}</span>
                <div className="item-group-content">
                    <div className="item-group-avtar">
                        <img src={nftDetails?.NFTImage || '/assets/images/preloader.png'} alt="Nft-image" />
                    </div>
                    <h3 className="theme-title"><span>{nftDetails?.title || 'Demo Name'}</span></h3>
                    {
                        ( nftDetails?.price || nftDetails?.startingPrice ) &&  isAuction ? <p className="theme-description">Current Price <span className="item-price">{`${auctionDetails?.currentPrice} ETH`}</span></p>: <h2 className="item-price">{nftDetails?.price && `${web3.utils.fromWei(nftDetails?.price, 'ether')} ETH`}</h2>
                    }
                    {
                        isAuction && <div className="item-group-timer">
                            <ul className="clearfix">
                                <li><span>{auctionDetails?.timeRemaining?.days}</span> Days</li>
                                <li><span>{auctionDetails?.timeRemaining?.hours}</span> Hours</li>
                                <li><span>{auctionDetails?.timeRemaining?.minutes}</span> Minutes</li>
                            </ul>
                            Remaining
                        </div>
                    }


                    {
                      !isMyNft && ( nftDetails?.price || nftDetails?.startingPrice ) &&
                       <div className="item-group-btn">
                           <button className="theme-btn">{isAuction?'Place Bid':'Buy Now'}</button>
                       </div>
                    }
                    {
                        isMyNft &&  <div className="item-group-btn">
                            <button className="theme-btn">View Details</button>
                        </div>

                    }

                </div>
            </div>
        </div>
    );
}

export default NftCard;

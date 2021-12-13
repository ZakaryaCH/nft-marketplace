pragma solidity 0.6.12;

// SPDX-License-Identifier: BSD-3-Clause

/**
 * @dev Library for managing
 * https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive
 * types.
 *
 * Sets have the following properties:
 *
 * - Elements are added, removed, and checked for existence in constant time
 * (O(1)).
 * - Elements are enumerated in O(n). No guarantees are made on the ordering.
 *
 * ```
 * contract Example {
 *     // Add the library methods
 *     using EnumerableSet for EnumerableSet.AddressSet;
 *
 *     // Declare a set state variable
 *     EnumerableSet.AddressSet private mySet;
 * }
 * ```
 *
 * As of v3.0.0, only sets of type `address` (`AddressSet`) and `uint256`
 * (`UintSet`) are supported.
 */


contract NFT_Market is Ownable {
    using SafeMath for uint;
    using EnumerableSet for EnumerableSet.UintSet;

    // =========== Start Smart Contract Setup ==============

    // MUST BE CONSTANT - THE FEE TOKEN ADDRESS AND NFT ADDRESS
    // the below addresses are trusted and constant so no issue of re-entrancy happens
    address public constant trustedFeeTokenAddress = ;
    address public constant trustedNftAddress = ;

    // minting fee in token, 10 tokens (10e18 because token has 18 decimals)
    uint public mintFee = 10e18;
    uint public mintFeeNative = 10e13;

    // selling fee rate
    uint public sellingFeeRateX100 = 30;

    // ============ End Smart Contract Setup ================

    // ---------------- owner modifier functions ------------------------
    function setMintFee(uint _mintFee) public onlyOwner {
    }
    function setMintNativeFee(uint _mintFeeNative) public onlyOwner {
    }
    function setSellingFeeRateX100(uint _sellingFeeRateX100) public onlyOwner {
    }

    // --------------- end owner modifier functions ---------------------

    enum PriceType {
        ETHER,
        TOKEN
    }

    event List(uint tokenId, uint price, PriceType priceType);
    event Unlist(uint tokenId);
    event Buy(uint tokenId);


    EnumerableSet.UintSet private nftsForSaleIds;

    // nft id => nft price
    mapping (uint => uint) private nftsForSalePrices;
    // nft id => nft owner
    mapping (uint => address) private nftOwners;
    // nft id => ETHER | TOKEN
    mapping (uint => PriceType) private priceTypes;

    // nft owner => nft id set
    mapping (address => EnumerableSet.UintSet) private nftsForSaleByAddress;

    function balanceOf(address owner) public view returns (uint256) {
    }
    function totalListed() public view returns (uint256) {
    }

    function getToken(uint tokenId) public view returns (uint _tokenId, uint _price, address _owner, PriceType _priceType) {
    }

    function getTokens(uint startIndex, uint endIndex) public view returns
        (uint[] memory _tokens, uint[] memory _prices, address[] memory _owners, PriceType[] memory _priceTypes) {
        require(startIndex < endIndex, "Invalid indexes supplied!");
        uint len = endIndex.sub(startIndex);
        require(len <= totalListed(), "Invalid length!");

    }

    // overloaded getTokens to allow for getting seller tokens
    // _owners array not needed but returned for interface consistency
    // view function so no gas is used
    function getTokens(address seller, uint startIndex, uint endIndex) public view returns
        (uint[] memory _tokens, uint[] memory _prices, address[] memory _owners, PriceType[] memory _priceTypes) {
        require(startIndex < endIndex, "Invalid indexes supplied!");
        uint len = endIndex.sub(startIndex);
        require(len <= balanceOf(seller), "Invalid length!");

    }

    function mint() public {
        // owner can mint without fee (in customized token)
        // other users need to pay a fixed fee in token

    }

    function mintNative() payable public {
        // owner can mint without fee (in native crypto)
        // other users need to pay a fixed fee in token

    }

    function list(uint tokenId, uint price, PriceType priceType) public {
    }

    function unlist(uint tokenId) public {
        require(nftsForSaleIds.contains(tokenId), "Trying to unlist an NFT which is not listed yet!");

    }

    function buy(uint tokenId) public payable {
        require(nftsForSaleIds.contains(tokenId), "Trying to unlist an NFT which is not listed yet!");

    }

    event ERC721Received(address operator, address from, uint256 tokenId, bytes data);

    // ERC721 Interface Support Function
    function onERC721Received(address operator, address from, uint256 tokenId, bytes memory data) public returns(bytes4) {
        require(msg.sender == trustedNftAddress);
        emit ERC721Received(operator, from, tokenId, data);
        return this.onERC721Received.selector;
    }

}

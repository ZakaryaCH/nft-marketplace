I] Smart contracts deployment
1. Deploy the ERC721.sol contract
  Arguments:
  a. name
  b. symbol
  c. uri: http://server_ip_address:server_port/meta/
2. Put its address in line 463 of marketplace.sol
3. Deploy the marketplace contract
4. Deploy the DutchAuction contract, with ERC721 address as an argument
5. Grant minting role to marketplace contract from erc721 contract:
   Call the method grantRole with two arguments:
   1. role: 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6
   2. account: marketplace address

II] Run application
  1. Mongo db configuration
  Register here: https://www.mongodb.com/cloud/atlas/register
    a. Create a new database
    b. Click on "connect" then "Connect application"
    c. Copy the link and paste it in server/index.js in line 24 "const CONNECTION_URL"
    d. Go to Mongo db - Network Access, and click on "add ip address"
    e. Add the public ip address of the machine you will be deploying the app in

  2. Amazon S3 buckets configuration
    a. follow this tutoral to create a new bucket :https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html
    b. get the bucket name, id and secrete
    c. paste them in file server/controllers/upload.js lines 8,9 and 12

  3. Inject smart contracts addresses:
    a. Inject ERC721 address in server/config/ERC721-config line 3
    b. Inject marketplace address in server/config/marketplace-config.js line 3
    c. Inject ERC721 address, marketplace address and auction address in file clien/src/utils/blockchainInteractor.js lines 5 6 and 7

  4. Application configuration
    a. Server
      cd into the Server directory and tape the command 'npm i' then the command 'npm start'
    b. Client
      cd into the Client directory and tape the command 'npm i' then the command 'npm start'

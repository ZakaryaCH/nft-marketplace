import metaDataNFT from '../models/metaDataNFT.js';
import { ownerOf, getToken } from './utils.js';

export const getMeta = async (req, res) => {
  const { tokenID } = req.params;
  console.log('GET request for tokenID: ' + tokenID);

  try {
    const metaData = await metaDataNFT.findOne({ tokenID }, { _id: 0, __v: 0 });
    if (!metaData)
      return res.status(404).json({ message: "Token doesn't exist." });
    res.status(200).json(metaData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOwner = async (req, res) => {
  const { tokenID } = req.params;
  try {
    const result = await ownerOf(tokenID);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTokenInfo = async (req, res) => {
  const { tokenID } = req.params;
  try {
    const result = await getToken(tokenID);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postMeta = async (req, res) => {
  const { tokenID, title, description, NFTImage, category, externalLink } =
    req.body;

  if (!tokenID || !title || !NFTImage) {
    return res.status(400).json({
      message: 'Token ID, Title and Link to NFT assest must be provided.',
    });
  }

  try {
    const owner = await ownerOf(tokenID);
    console.log(owner, req.address);

    if (owner.toLowerCase() === req.address.toLowerCase()) {
      const meta = {
        tokenID,
        title,
        description,
        NFTImage,
        category,
        externalLink,
        createdAt: new Date().toISOString(),
      };

      console.log('Updating metadata for tokenID: ' + tokenID);
      await metaDataNFT.findOneAndUpdate(
        { tokenID },
        meta,
        { upsert: true },
        (err, doc) => {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: "Couldn't update metadata for NFT token" });
          }
          return res.status(200).json(meta);
        },
      );
    } else
      res.status(400).json({ message: "Token doesn't belong to this user" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

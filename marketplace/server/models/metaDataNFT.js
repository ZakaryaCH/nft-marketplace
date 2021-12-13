import mongoose from 'mongoose';

const metaSchema = mongoose.Schema({
    tokenID: {
        type: String,
        required: true,
        unique: true,
    },
    title: String,
    description: String,
    externalLink: String,
    category: String,
    NFTImage: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var metaDataNFT = mongoose.model('metaDataNFT', metaSchema);

export default metaDataNFT;
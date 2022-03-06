import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    message: String,
    name: String,
    loves: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
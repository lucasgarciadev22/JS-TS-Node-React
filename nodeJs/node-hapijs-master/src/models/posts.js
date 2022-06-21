import Mongoos, { Mongoose }  from "mongoose";

const schema = new Mongoose.Schema({
  title: String,
  content: String,
  author: String,
  publishDate: {
    type: Date,
    default: Date.now
  },
},{
  timestamps: {createAt: true, updateAt: true},
  toJSON: {
    virtuals: true,
    transform(doc, ret){
      ret.id = ret._id
      delete ret._id
    }
  },
  versionKey: false,
})

const PostsModel = Mongoose.model('Posts', schema)

export default PostsModel
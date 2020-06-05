import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
  author: String,
  category: String,
  tags: Array,
  coverImage: String,
  title: String,
  descriptionBlog: String,
  descriptionPost: String,
  createAt: String,
});

const Blog = model("Blog", BlogSchema);

export default Blog;

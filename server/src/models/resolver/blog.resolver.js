import { Blog } from "../../data";
import { generateDate } from "../../controllers";

export const resolvers = {
  Query: {
    getBlogs: async (root, { limit, offset }) => {
      const blogs = await Blog.find({}).limit(limit).skip(offset);

      return blogs;
    },

    getBlog: async (root, { title }) => {
      const blog = await Blog.findOne(title);

      return blog;
    },
  },

  Mutation: {
    createBlog: async (root, { input }) => {
      const existsTitle = await Blog.findOne({
        title: input.title,
      });

      if (existsTitle) {
        throw new Error("El título del blog ya existe");
      }

      const newBlog = await new Blog({
        author: input.author,
        category: input.category,
        tags: input.tags,
        coverIamge: input.coverIamge,
        title: input.title,
        descriptionBlog: input.descriptionBlog,
        descriptionPost: input.descriptionPost,
      });

      newBlog.createAt = await generateDate();

      // return console.log(newBlog);

      return new Promise((resolve, object) => {
        newBlog.save((error) => {
          if (error) rejects(error);
          else resolve(newBlog);
        });
      });
    },

    updateBlog: async (root, { input }) => {
      const updateBlog = await Blog.findByIdAndUpdate(
        { _id: input.id },
        input,
        { new: true },
        (error, blog) => {
          try {
            return blog;
          } catch {
            throw new Error(error);
          }
        }
      );

      return updateBlog;
    },

    removeBlog: async (root, { id }) => {
      return new Promise((resolve, object) => {
        Blog.findByIdAndRemove({ _id: id }, (error) => {
          if (error) rejects(error);
          else resolve("El blog fue eliminad correctamente");
        });
      });
    },
  },
};

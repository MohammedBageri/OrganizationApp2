const News = require('../models/News');
const CustomError = require('../errors');
const removeFileIfExist = require('../utils/removeFileIfExist');

const getAllNews = async () => {
  return await News.find({});
};
const getSingleNews = async (id) => {
  const result = await News.findOne({ _id: id });
  if (!result) {
    throw new CustomError.NotFoundError(`No news with id : ${id}`);
  }
  return result; 
};

const createNews = async (news) => {

  return await News.create({
    title:news.body.title,
    subtitle: news.body.subtitle,
    subject: news.body.subject,
    image: news.file.path,
  },
  );
  
};

const updateNews = async (id, updateNews) => {
  const news = await News.findOne({ _id: id });
  if (!news) {
    throw new CustomError.NotFoundError(`No news with id : ${id}`);
  }
  removeFileIfExist(news.image);
  await News.updateOne(
    { _id: id },{
    title:updateNews.body.title,
    subtitle: updateNews.body.subtitle,
    subject: updateNews.body.subject,
    image: updateNews.file.path,
  },
  {
    new: true,
    runValidators: true,
  });


  return await News.findOne({ _id: id });
};

const deleteNews = async (id) => {
  const news = await News.findOne({ _id: id });
  if (!news) {
    throw new CustomError.NotFoundError(`No news with id : ${id}`);
  }
  removeFileIfExist(news.image);
  return await news.remove();
  
};

module.exports = {
  getAllNews,
  getSingleNews,
  createNews,
  updateNews,
  deleteNews,
};

const { StatusCodes } = require('http-status-codes');
const { NewsService } = require('../services');


const getAllNews = async (req, res) => {
  const news =  await NewsService.getAllNews();
  res.status(StatusCodes.OK).json({ news });
};
const getSingleNews = async (req, res) => {
  const { id } = req.params;
  const result = await NewsService.getSingleNews(id);
  res.status(StatusCodes.OK).json({ result });
};
const createNews = async (req, res) => {

const result = await NewsService.createNews(req);
res.status(StatusCodes.CREATED).json({ result });
};
const updateNews = async (req, res) => {
  const id = req.params.id;
 
  const result = await NewsService.updateNews(id, req);
  res.status(StatusCodes.OK).json(result);
};
const deleteNews = async (req, res) => {
  const { id } = req.params;
  const news = await NewsService.deleteNews(id);

  res.status(StatusCodes.OK).json(news);
};

module.exports = {
  getAllNews,
  getSingleNews,
  createNews,
  updateNews,
  deleteNews,
};

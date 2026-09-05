import prisma from '../config/prisma.js';

export const getProductReviews = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.id);
    const reviews = await prisma.review.findMany({
      where: { productId }
    });

    const averageRating = reviews.length > 0 
      ? Number((reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1))
      : 0;

    res.status(200).json({ averageRating, reviews });
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.id);
    const productExists = await prisma.product.findUnique({ where: { id: productId } });

    if (!productExists) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const review = await prisma.review.create({
      data: {
        ...req.body,
        productId
      }
    });

    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};
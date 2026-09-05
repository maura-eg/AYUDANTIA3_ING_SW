import { z } from 'zod';

export const createReviewSchema = z.object({
  author: z.string({ required_error: 'El autor es obligatorio' }).min(2, 'Mínimo 2 caracteres').max(100, 'Máximo 100 caracteres'),
  rating: z.number({ required_error: 'El rating es obligatorio' }).int('Debe ser entero').min(1, 'Mínimo 1').max(5, 'Máximo 5'),
  comment: z.string({ required_error: 'El comentario es obligatorio' }).min(10, 'Mínimo 10 caracteres').max(500, 'Máximo 500 caracteres')
});
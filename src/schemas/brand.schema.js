import { z } from 'zod';

export const createBrandSchema = z.object({
  name: z.string({ required_error: 'El nombre es obligatorio' }).min(2, 'Mínimo 2 caracteres').max(80, 'Máximo 80 caracteres'),
  country: z.string().max(60).optional(),
  website: z.string().url('URL inválida').optional().or(z.literal(''))
});
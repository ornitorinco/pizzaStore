import { z } from 'zod';

export const PizzaSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
});

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type Pizza = z.infer<typeof PizzaSchema>;
export type ContactForm = z.infer<typeof ContactFormSchema>; 
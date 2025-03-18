import { Form, useActionData, useNavigation } from 'react-router-dom';
import { ContactFormSchema } from '../types';
import { clsx } from 'clsx';

export async function action({ request }: { request: Request }) {
  const formData = Object.fromEntries(await request.formData());
  const result = ContactFormSchema.safeParse(formData);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}

export function Contact() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
      {actionData?.success ? (
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-800">
            Thank you for your message! We'll get back to you soon.
          </p>
        </div>
      ) : (
        <Form method="post" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={clsx('input mt-1', {
                'border-red-500': actionData?.errors?.name,
              })}
            />
            {actionData?.errors?.name && (
              <p className="mt-1 text-sm text-red-600">{actionData.errors.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={clsx('input mt-1', {
                'border-red-500': actionData?.errors?.email,
              })}
            />
            {actionData?.errors?.email && (
              <p className="mt-1 text-sm text-red-600">{actionData.errors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={clsx('input mt-1', {
                'border-red-500': actionData?.errors?.message,
              })}
            />
            {actionData?.errors?.message && (
              <p className="mt-1 text-sm text-red-600">
                {actionData.errors.message[0]}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </Form>
      )}
    </div>
  );
} 
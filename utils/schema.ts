import * as Yup from "yup";

export const LoginSchema = Yup.object({
  emailAddress: Yup.string()
    .email("Email address is invalid")
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
});

export const addCategorySchema = Yup.object({
  name: Yup.string()
    .required('Category name is required.')
    .min(2, 'Category name must be at least 2 characters long.') 
    .max(50, 'Category name cannot exceed 50 characters.'),
  File: Yup.mixed()
    .required('Category image is required.')
    .test('fileSize', 'File size is too large.', (value) => {
      return !value || (value instanceof File && value.size <= 2 * 1024 * 1024);
    })
    .test('fileType', 'Unsupported file type. Only images and PDFs are allowed.', (value) => {
      return !value || (value instanceof File && (value.type.startsWith('image/') || value.type === 'application/pdf'));
    }),
});

export const updateCategorySchema = Yup.object({
  name: Yup.string()
      .required('Category name is required.')
      .min(2, 'Category name must be at least 2 characters long.') 
      .max(50, 'Category name cannot exceed 50 characters.'),
  File: Yup.mixed().nullable()
      .test('fileSize', 'File size is too large.', (value) => {
          return !value || (value instanceof File && value.size <= 2 * 1024 * 1024);
      })
      .test('fileType', 'Unsupported file type. Only images are allowed.', (value) => {
          return !value || (value instanceof File && value.type.startsWith('image/'));
      }),
});

export const addServiceSchema = Yup.object({
  name: Yup.string().required('Service name is required')
  .min(2, 'Category name must be at least 2 characters long.') 
  .max(50, 'Category name cannot exceed 50 characters.'),
  File: Yup.mixed()
  .required('Service category image is required.')
  .test('fileSize', 'File size is too large.', (value) => {
    return !value || (value instanceof File && value.size <= 5 * 1024 * 1024);
  })
  .test('fileType', 'Unsupported file type. Only images and PDFs are allowed.', (value) => {
    return !value || (value instanceof File && (value.type.startsWith('image/') || value.type === 'application/pdf'));
  }),
})

export const updateServiceSchema = Yup.object({
  name: Yup.string().required('Service name is required')
  .min(2, 'Category name must be at least 2 characters long.') 
  .max(50, 'Category name cannot exceed 50 characters.'),
  File: Yup.mixed().nullable()
      .test('fileSize', 'File size is too large.', (value) => {
          return !value || (value instanceof File && value.size <= 2 * 1024 * 1024);
      })
      .test('fileType', 'Unsupported file type. Only images are allowed.', (value) => {
          return !value || (value instanceof File && value.type.startsWith('image/'));
      }),
})
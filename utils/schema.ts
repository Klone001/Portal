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


// CREATE VENDOR SCHEMA
export const EmailSchema = Yup.object({
  email: Yup.string()
    .email("Email address is invalid")
    .required("Email address is required"),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const onboardingStepOneSchema = Yup.object().shape({
  BusinessName: Yup.string()
    .required('Business name is required')
    .min(2, 'Too short')
    .max(100, 'Too long'),

  RegistrationNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Must be numeric')
    .min(6, 'Too short')
    .nullable(),

  BusinessCertificate: Yup.mixed<File>()
    .nullable()
    .test(
      'fileFormat',
      'Only image files are allowed',
      (value) =>
        !value || (value instanceof File && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type))
    ),

  // BusinessStoreFrontImage: Yup.mixed<File>()
  //   .required('Store front image is required')
  //   .test(
  //     'fileFormat',
  //     'Only image files are allowed',
  //     (value) => value instanceof File && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
  //   ),
});
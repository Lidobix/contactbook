import { useForm } from 'react-hook-form';

export const useFormController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return { register, handleSubmit, formState: { errors } };
};

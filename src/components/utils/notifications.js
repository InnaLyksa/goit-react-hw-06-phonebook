import { toast } from 'react-toastify';

export const Notification = item =>
  toast.warn(`${item} is already in contacts`, {
    position: 'top-center',
    autoClose: 2000,
    theme: 'colored',
  });

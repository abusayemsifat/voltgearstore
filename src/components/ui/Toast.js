'use client';

import toast from 'react-hot-toast';

export const showToast = {
  success: (message) => toast.success(message, {
    icon: '✅',
    style: {
      background: '#10b981',
      color: '#fff',
    },
  }),
  error: (message) => toast.error(message, {
    icon: '❌',
    style: {
      background: '#ef4444',
      color: '#fff',
    },
  }),
  loading: (message) => toast.loading(message, {
    icon: '🔄',
  }),
  dismiss: () => toast.dismiss(),
};
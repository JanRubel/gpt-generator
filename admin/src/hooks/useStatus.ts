import { useState } from 'react';
import { IStatus } from '../../../shared';

export const useStatus = (initial: IStatus = 'idle') => {
  const [status, setStatus] = useState(initial);
  const [statusMessage, setStatusMessage] = useState('');

  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isSuccess = status === 'success';
  const isIdle = status === 'idle';

  return { isIdle, isLoading, isSuccess, isError, setStatus, statusMessage, setStatusMessage };
};

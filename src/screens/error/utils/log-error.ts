import axios from 'axios';
import { ErrorInfo } from 'react';

export const logError = async (error?: Error, errorInfo?: ErrorInfo) => {
  await axios.post('https://my-error-log.herokuapp.com/log/', {
    app_name: `Aplicativo XYZ - in ${__DEV__ ? 'DEBUG' : 'RELEASE'}`,
    message: `${error?.message} \n ${error?.name} at Line:${error?.line}  Column:${error?.column}`,
    stack: `${
      __DEV__ && `Component Stack: \n${errorInfo?.componentStack} \n\n\n`
    } Original Stack: \n${error?.stack || 'None emitted'}`,
  });
};

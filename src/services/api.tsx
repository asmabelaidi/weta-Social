import { User } from '@/models/user.model';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   headers.set('content-type', 'application/json');
    //   return headers;
    // },
  
  }),
    
    endpoints: (builder) => ({
      getAllUsers: builder.query<User[], void>({
        query: () => `/users`,
      }),
    }),
  })

  export const {useGetAllUsersQuery} = userApi
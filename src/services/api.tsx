import { LoginResponse } from '@/models/loginResponse.model';
import { User } from '@/models/user.model';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL || 'http://localhost:8000',
  }),
    
    endpoints: (builder) => ({
      getAllUsers: builder.query<User[], void>({
        query: () => `/users`,
      }),
      login: builder.mutation({
            query: ({email, password }) => ({
              url: '/login',
              method: 'POST',
              body: {email, password },
          
        }),
        transformResponse: (response : LoginResponse) => {
          const { token } = response;
          localStorage.setItem('token', token);
          return token;
        },
      }),
    }),
  })
  export const {useGetAllUsersQuery, useLoginMutation} = userApi
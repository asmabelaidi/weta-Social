import Link from 'next/link'
import React from 'react'
import { Box } from "@mui/material";
import { useGetAllUsersQuery } from '@/services/api'

function Test() {
    const {data, error, isLoading, isFetching, isSuccess} = useGetAllUsersQuery();
  return (

            <Box>   <Link href="/login">Login Or register </Link>
                    {
                       isLoading && <h1>.... Loading</h1>}
                    {
                       isFetching && <h1>.... Fetching</h1>
                    }
                    {
                       error && <h1>Something Went wrong</h1>
                    }
                   {
                    isSuccess && data?.map(user => {
                      return <h1 key={user.id}>{user.name}</h1>
                    })
                   }
            </Box>
  )
}

export default Test
import {useParams} from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default function Post() {
    const params = useParams()

    const status = 200 

    if (status === 404){
       return <Navigate to='/Notfound' />
    }

  return (
    <div>
        <h1>Post {params.id}</h1>
    </div>
  )
}

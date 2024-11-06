import React from 'react'
import { getAllBlogs } from '../services/blogService'
import { Card } from 'flowbite-react'

const Dashboard = () => {

  const [allBlogs, setAllBlogs] = useState([])

  const handlePageLoading = async () => {
    const response = await getAllBlogs()

    if (response.success) {
      console.log(response.data)
      setAllBlogs(response.data)
    }
  }
  return (
    <div>
      {
        allBlogs.map((blog, index) => (
          <Card key={index}>
            <Card.Header>
              <Card.Title>{blog.title}</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>{blog.description}</p>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export default Dashboard
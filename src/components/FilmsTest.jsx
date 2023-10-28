import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

const FilmsTest = () => {
 const [test, setTest] = useState([])
    


useEffect(() => {

  const getTest = async () => {
    const response = await axios.get(`${BASE_URL}/films`)
    console.log(response.data.results)
    setTest(response.data.results)
  }
  getTest()
}, [])

  if (!test) {
    return <div>Loading...</div>
  }else{

    <>
  <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/180"
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
  <Card className="my-2">
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
    <CardImg
      alt="Card image cap"
      bottom
      src="https://picsum.photos/900/180"
      style={{
        height: 180
      }}
      width="100%"
    />
  </Card>
</>

  return (
    <>
    <div>
    
    </div>
    </>
    
  )
}
}

export default FilmsTest


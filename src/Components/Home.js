import React, { useEffect } from "react";
import { Container, Button } from "reactstrap"

const Home = () => {

    useEffect(() => {
        document.title = " Home"
    })

    return (
        <div className="bg-light">
            <Container className="text-center bg-light" >
                <h3 className="display-6"> Home Page </h3>
                <p>
                    This is a paragraph
                </p>
            </Container >
            <Container>
                <Button color="primary" outline >
                    Nothing
                </Button>
            </Container>
        </div>
    )
}

export default Home
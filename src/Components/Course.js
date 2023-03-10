import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from "reactstrap"
import axios from "axios";
import base_url from "../api/bootapi";

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/delete/${id}`).then(
            (response) => {
                console.log(response);
                update(id)
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <div>
            <Card>

                <CardBody className="p-0 m-0 bg-light">
                    <CardSubtitle className="font-weight-bold">
                        {course.title}
                    </CardSubtitle>

                    <CardText>{course.description}</CardText>

                    <Container className="text-center">
                        <Button className="secondary m-1" onClick={() => {
                            deleteCourse(course.id)
                        }} >Delete</Button>
                        <Button className="secondary">Update</Button>
                    </Container>

                </CardBody>
            </Card>
        </div>
    )
}

export default Course
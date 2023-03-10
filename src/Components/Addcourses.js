import React, { Fragment, useEffect, useState } from "react";
import { FormGroup, Input, Form, Container, Button } from "reactstrap";
import axios from "axios"
import base_url from "../api/bootapi";

const AddCourses = () => {

    useEffect(() => {
        document.title = "Add Course"
    }, [])

    const [course, setCourse] = useState()

    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course)
        e.preventDefault()
    }

    const clearState = () => {

        

    }

    // fun to post data to server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/save`, data).then(
            (response) => {
                clearState(course)
                console.log(response, "Success ------------->");
                console.log("testing --------------->", course);
            },
            (error) => {
                console.log(error, "error");
            }
        )
    }

    return (
        <>
            <Fragment >
                <h2 className="text-center my-3">Fill Course Details</h2>
                <Form onSubmit={handleForm} >
                    <FormGroup>
                        <label for="userId">Course Id</label>
                        <Input
                            type="text"
                            placeholder="Enter here"
                            name="userId"
                            id="userId"
                            onChange={(e) => {
                                setCourse({ ...course, id: e.target.value })
                            }}
                        />
                    </FormGroup>

                    <FormGroup >
                        <label for="title" >Course Title</label>
                        <Input
                            type="text"
                            placeholder="Enter Title here"
                            id="title"
                            onChange={(e) => {
                                setCourse({ ...course, title: e.target.value })
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label for="description">Course Description</label>
                        <Input
                            type="text"
                            placeholder="Enter Description"
                            id="description"
                            onChange={(e) => {
                                setCourse({ ...course, description: e.target.value })
                            }}
                        />
                    </FormGroup>

                    <Container className="text-center">
                        <Button type="submit" color="success m-1" >Add Course</Button>
                        <Button type="reset" color="secondary" onClick={() => {
                            setCourse([{ id: " ", title: " ", description: " " }])
                        }} >Clear</Button>
                    </Container>

                </Form>
            </Fragment>
        </>
    )
}

export default AddCourses
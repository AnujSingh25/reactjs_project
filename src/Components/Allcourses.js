import React, { useEffect, useState } from "react";
import Course from "./Course"
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        document.title = "All Courses"
        getAllCoursesFromServer()
    }, [])

    // fun to call api using axios
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/data`).then(
            (response) => {
                //for success 
                toast.success("Course data fetched")
                setCourses(response.data)
                console.log(response.data)
            },
            (error) => {
                // for error
                console.log(error);
                toast.warning("Somethng went wrong")
            }
        )
    }

    const updateCourse = (id) => {
        setCourses(courses.filter((c) => c.id != id))
    }

    return (
        <div>
            <h4>All Courses</h4>
            <p>List of all courses are as follows </p>

            {
                (courses.length > 0) ? (
                    courses.map((item) => <Course key={item.id} course={item} update={updateCourse} />)
                ) : (
                    "NO data"
                )
            }

        </div>
    )
}

export default Allcourses
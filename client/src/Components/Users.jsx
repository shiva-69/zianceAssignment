import React from "react";
import {Box, Flex, Spinner, Button, Grid} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/User/Action";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [isError, setError] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchAllUser = () => {
        fetch("https://ziance-assignment.herokuapp.com/fetchAll")
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => {
            setError(true);
        })
        .finally(() => setLoading(false));
    }
    React.useEffect(()=>{
        fetchAllUser()
    }, [data])

    const handleDelete = (id) => {
        fetch(`https://ziance-assignment.herokuapp.com/delete/${id}`)
        .then((res) => res.json())
        .then((res) => fetchAllUser());
    }

    const handleUpdate = (id) => {
        fetch(`https://ziance-assignment.herokuapp.com/${id}`)
        .then((res) => res.json())
        .then((res) => {
            dispatch(setUser(res))
            navigate("/update")
        });
    }
    

    return <Grid bg="gray.100" pl="60px" templateColumns='repeat(3, 1fr)' gap={6}>
        { isLoading ? <Spinner/> : isError ? "Error in loading Page" : data.map((item) => {
           return <Flex direction="column" bg="white" p={6} rounded="md" w={80} mb="30px" key={item._id}>
                <Box> <b>Name : </b> {item.name}</Box>
                <Box> <b>Contact : </b> {item.contact}</Box>
                <Box> <b>Email : </b> {item.email}</Box>
                <Flex justify="space-between">
                    <Button onClick={() => handleUpdate(item._id)}>Update</Button>
                    <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                </Flex>
           </Flex>
        })}
     </Grid>
}
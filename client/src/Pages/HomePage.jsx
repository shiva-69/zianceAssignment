import { Heading } from "@chakra-ui/react";
import { Form } from "../Components/Form";
import {Users} from "../Components/Users"

export const HomePage = () => {
    return <>
        <Heading bg="gray.100" fontSize="35px" textAlign="center" pt="20px">User Tracking Application</Heading>
        <Form/>
        <Users/>
    </>
}
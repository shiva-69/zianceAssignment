import { useSelector } from "react-redux";
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Heading
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const UpdateUser = () => {
    const navigate = useNavigate()

    const {name, email, contact, password }= useSelector(state => state.payload);

    const handleSubmit = (body) => {
            fetch("https://ziance-assignment.herokuapp.com/update",{
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "content-type" : "application/json"
                }
            }).then((res) => res)
            .then((res) => {
                navigate("/")
            })
            .catch((err) => console.log(err));
    }

    return (<>
        <Heading bg="gray.100" fontSize="35px" textAlign="center" pt="20px">User Tracking Application</Heading>
    <Flex bg="gray.100" align="center" justify="center" h="600px">
      <Box bg="white" p={6} rounded="md" w={80}>
        <Formik
          initialValues={{
            name : name,
            contact : contact,
            email: email,
            password: password
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="contact">Contact</FormLabel>
                  <Field
                    as={Input}
                    id="contact"
                    name="contact"
                    type="contact"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    disabled={true}
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Update
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
    </>
  );
}
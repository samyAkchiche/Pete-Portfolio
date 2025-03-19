import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.

    return (
        <VStack
            bg="white"
            color="black"
            borderRadius="xl"
            align="start"
            paddingBottom="3"
        >
            <div>
                <Image
                    src={imageSrc}
                    borderRadius="md"
                    objectFit="cover"
                    alt={title}
                />
            </div>
            <div style={{ padding: "0 1.3rem" }}>
                <Heading size="md" marginY="3">
                    {title}
                </Heading>
                <Text color="grey">{description}</Text>
                <Heading size="sm" cursor="pointer" marginTop="2">
                    See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </Heading>
            </div>
        </VStack>
    );
};

export default Card;

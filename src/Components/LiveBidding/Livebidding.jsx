import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { getServices } from '../../store/actions/servicesActions';
import "./Livebidding.css";

export default function Livebidding() {
    const totalSeconds = 24 * 60 * 60; // 24 hours in seconds
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // Clear the interval when the timer reaches 0
        if (remainingSeconds === 0) {
            clearInterval(interval);
        }

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [remainingSeconds]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const [services, setServices] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServices())
            .then((data) => setServices(data.slice(0, 5)));
    }, [dispatch]);

    const minimumBid = "41000"; // Replace with your actual minimum bid value

    return (
        <Card align='center'>
            <CardHeader>
                <Heading size='lg'>PLACE YOUR BID</Heading>
            </CardHeader>
            <CardBody>
                <Heading size='xxl' className='digital-clock'>{minimumBid}</Heading>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue'>place bid</Button>
            </CardFooter>

            <SimpleGrid spacing={4} templateColumns='1fr 1fr 1fr'>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>

                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <CardFooter className='remaining-time'>
                <Text fontSize='lg'>Remaining Time: {formatTime(remainingSeconds)}</Text>
            </CardFooter>
            <CardFooter>
                <Button colorScheme='blue'>View here</Button>
            </CardFooter>
        </Card>
    );
}

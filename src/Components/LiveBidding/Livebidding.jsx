
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { CreateBid, getLowestBid } from '../../store/actions/biddingActions';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
// import { getLowestBid } from '../../store/actions/biddingActions';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    SimpleGrid,
    Input,
    Stack,
    List,
    ListItem,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Avatar,
    Box,
} from '@chakra-ui/react';
import {
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import moment from 'moment';
import { getAllServices } from '../../store/actions/vendorActions';
import { UserOutlined } from '@ant-design/icons';
import './Livebidding.css';



// Dummy component to represent a user card
const UserCard = ({ vendor, bid }) => (
    <Box
        p={4}
        // borderWidth="1px"
        // borderRadius="lg"
        // overflow="hidden"
        boxShadow="md"
        // padding="50px"
        margin="10px 50px 0px 10px"

    >

        <UserOutlined size="xl" name={vendor.name} src={vendor.profilePhoto} borderColor="blue.500" />
        <Heading mt={4} size="md">
            {vendor.name}
        </Heading>
        <Text mt={2} color="gray.600">
            Last Bid: {bid}
        </Text>
        <Text mt={2} color="gray.600">
            {moment(vendor.createdAt).format(' h:mm:ss a')}
        </Text>

    </Box>
);
// Dummy component to display three dummy user cards
const DummyUserCards = ({ bids }) => {
    if (!Array.isArray(bids)) {
        // If bids is not an array, handle it accordingly (e.g., show an error message)
        return (
            <Box mb={4}>
                <h2 size="md">
                    Vendors Who Placed Bids
                </h2>
                <Text>Error: Bids data is not available</Text>
            </Box>
        );
    }

    // Exclude the first three bids
    const remainingBids = bids.slice(3);

    return (
        <Box className='table-box'
        >
            <div id='head' className='text-gray text-2xl ' >
                Vendors Who Placed Bids
            </div>
            <div className="table-container">

                <Table variant="striped" colorScheme="blue" title='Bidding List'>
                    <Thead>
                        <Tr>

                            <Th>Vendor Name</Th>
                            <Th>Amount</Th>
                            <Th>Time</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {remainingBids.map((bid) => (
                            <Tr key={bid.id}>

                                <Td>{bid.vendor.name}</Td>
                                <Td>${bid.amount}</Td>
                                {/* You may need to format the time according to your needs */}
                                <Td>{moment(bid.createdAt).format(' h:mm:ss a')}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </Box>
    );
};




export default function Livebidding() {
    const totalSeconds = 24 * 60 * 60; // 24 hours in seconds
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
    const [services, setServices] = useState([]);
    const [showBidInput, setShowBidInput] = useState(false);
    const [bidAmount, setBid] = useState('');
    const [formError, setFormError] = useState(null);
    // Replace with your actual bid value
    const [loading, setLoading] = useState(false);
    const [showAllBids, setShowAllBids] = useState(false);
    const [bidSubmitted, setBidSubmitted] = useState(false);
    const [bidPlaced, setBidPlaced] = useState(false);
    const toast = useToast();


    // Function to toggle between showing limited and all bids

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const serviceId = sessionStorage.getItem("serviceId");
    console.log(serviceId);
    const Lowestbid = useSelector((state) => state.bidding.data);

    // console.log(Lowestbid.vendor);

    const name = Lowestbid;
    console.log(name);


    const minimumBid = "41000"; // Replace with your actual minimum bid value

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const calculateRemainingSeconds = () => {
        const now = new Date();
        const eightAM = new Date(now);
        eightAM.setHours(8, 0, 0, 0); // Set the time to 8 am
        const endTime = eightAM.getTime() + 24 * 60 * 60 * 1000; // 24 hours later

        return Math.max(0, Math.floor((endTime - now.getTime()) / 1000));
    };

    useEffect(() => {
        setRemainingSeconds(calculateRemainingSeconds());

        const interval = setInterval(() => {
            setRemainingSeconds(calculateRemainingSeconds());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const handlePlaceBidClick = () => {

        setShowBidInput(true);
        setBidPlaced(false); // Reset bidPlaced state when placing a new bid
    };


    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setLoading(true);

            // Rest of your code
            const amount = parseInt(bidAmount);

            // Dispatch the CreateBid action
            const response = await dispatch(CreateBid({ amount, serviceId }, navigate));
            setLoading(false);
            console.log("Response:", response);
            if (response?.id) {
                // Bid placed successfully
                setBidPlaced(true);

                // Show success toast
                toast({
                    title: 'Bid Placed Successfully',
                    status: 'success',
                    position: 'top',
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                // Bid placement failed
                toast({
                    title: 'Bid Placement Failed',
                    description: response?.message || 'An error occurred during bid placement.',
                    status: 'error',
                    position: 'top',
                    duration: 3000,
                    isClosable: true,
                    variant: 'solid',
                    colorScheme: 'red',
                });
            }
        } catch (error) {
            // Handle any unexpected errors
            console.error('Bid placement error:', error);
            toast({
                title: 'An error occurred',
                description: 'Please try again later.',
                status: 'error',
                position: 'top',
                duration: 3000,
                isClosable: true,
                variant: 'solid',
                colorScheme: 'red',
            });
        }
    };


    const fetchData = async () => {
        await dispatch(getLowestBid(serviceId));
    };

    useEffect(() => {
        fetchData(); // Initial fetch

        const intervalId = setInterval(() => {
            fetchData(); // Fetch data every 30 seconds
        }, 8000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [dispatch, serviceId]);
    return (
        <Card align='center'>
            <CardHeader>
                <Heading size='lg'>PLACE YOUR BID</Heading>
            </CardHeader>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <CardBody >

                        <Heading size='xxl' className='digital-clock'>
                            {Lowestbid ? Lowestbid[0].amount : 'N / A'}
                        </Heading>


                    </CardBody>
                    <CardFooter>
                        {showBidInput ? (
                            <form onSubmit={handleSubmit}>
                                <FormControl isInvalid={!!formError}>
                                    <InputGroup className='input'>
                                        <Input
                                            placeholder="Enter your bid"
                                            value={bidAmount}
                                            onChange={(e) => setBid(e.target.value)}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button type="submit" colorScheme='blue' onClick={handlePlaceBidClick}>
                                                Submit
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{formError}</FormErrorMessage>
                                </FormControl>
                            </form>
                        ) : (
                            <Button id='place-bid-btn'
                                colorScheme='blue'
                                onClick={handlePlaceBidClick}
                            >
                                Place bid
                            </Button>
                        )}
                    </CardFooter>

                    <CardFooter className='remaining-time'>
                        <Text id='countdown' fontSize='lg'>Remaining Time: {formatTime(remainingSeconds)}</Text>
                    </CardFooter>
                    <CardFooter>

                        <List>
                            <Text fontSize='xl' style={{ fontWeight: "bold", margin: "auto" }}>Last Three Bids</Text>
                            <div style={{ display: "flex" }}>

                                {Lowestbid ? (
                                    Lowestbid.slice(0, 3).map((bid) => (
                                        bid && bid.vendor && (
                                            <UserCard key={bid.vendor.userId} vendor={bid.vendor} bid={bid.amount} />
                                        )
                                    ))
                                ) : (
                                    <Text>No bids available</Text>
                                )}
                            </div>

                        </List>

                    </CardFooter>
                </div>
                <div>
                    <List>
                        {Lowestbid ? (
                            <div>
                                {/* <Button onClick={toggleShowAllBids} colorScheme="blue" size="sm">
                                    {showAllBids ? 'Show Less' : 'View All'}
                                </Button> */}
                                {/* {showAllBids && ( */}
                                {/* // Render DummyUserCards for all bids */}
                                <DummyUserCards bids={Lowestbid || []} />
                                {/* )} */}

                            </div>
                        ) : (
                            // If no bids are available, show a message or loading indicator
                            <Text>No bids available</Text>
                        )}
                    </List>
                </div>
            </div>

        </Card >
    );
}

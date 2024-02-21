import React, { useState, useEffect } from 'react';
import { Form, Input, Button, List, Alert, Statistic } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const LiveBids = () => {
    const [bids, setBids] = useState([]);
    const [biddingEndTime, setBiddingEndTime] = useState(moment().add(1, 'hour'));
    const [form] = Form.useForm();

    const placeBid = () => {
        form.validateFields().then((values) => {
            const bidAmount = parseFloat(values.bidAmount);
            if (!isNaN(bidAmount)) {
                const newBids = [...bids, { amount: bidAmount, time: new Date().getTime() }];
                setBids(newBids);
                form.resetFields();
            }
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeRemaining = biddingEndTime - currentTime;

            if (timeRemaining > 0) {
                setBiddingEndTime(moment(biddingEndTime).subtract(1, 'second'));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [biddingEndTime]);

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <h2>Place Your Bid</h2>
            <Form form={form} onFinish={placeBid} layout="vertical">
                <Form.Item
                    name="bidAmount"
                    label="Bid Amount"
                    rules={[{ required: true, message: 'Please enter your bid amount!' }]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Place Bid
                    </Button>
                </Form.Item>
            </Form>

            <h2>Current Bids</h2>
            <List
                dataSource={bids}
                renderItem={(bid) => (
                    <List.Item>
                        <Alert message={`$${bid.amount.toFixed(2)} - ${moment(bid.time).fromNow()}`} type="info" />
                    </List.Item>
                )}
            />

            <div style={{ marginTop: '10px', fontSize: '18px' }}>
                <Statistic title="Bidding Ends in:" value={biddingEndTime.fromNow(true)} />
            </div>
        </div>
    );
};

export default LiveBids;

import {useTopicQuery} from 'lib/graphql/generated';
import {Box, Button, Typography} from '@material-ui/core';
import {useState} from 'react';

export const Welcome: React.FC = () => {
    const [loadAndDisplay, setLoadAndDisplay] = useState<boolean>(false)
    return loadAndDisplay ? <LoadTopic/> : <Box>
        <Typography>Welcome to the scaffold project. Click on the button below to load (and display) some GraphQL data!</Typography>
        <Button onClick={() => setLoadAndDisplay(true)}>Click me for loading awesomeness</Button>
    </Box>
}

const LoadTopic: React.FC = () => {
    const {
        data,
        error,
        loading
    } = useTopicQuery({variables: {id: 'U:dd1db6ff-f513-4759-9f22-2b6da30e716c:Topic'}})
    if (loading) return <>Loading ...</>
    if (error) return <>Error!</>
    const asString = JSON.stringify(data);
    return <Box><Typography>{asString}</Typography></Box>
}
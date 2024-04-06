import React from 'react';
import { Card, Text } from 'react-native-paper';
import styles from "./styles";

const SingleDay = (props)=>{
    return (
        <Card 
            Type="elevated" 
            style={{borderWidth :1, marginVertical : 5, marginHorizontal: 10 }}>
            <Card.Title 
                title= {props.day} 
                style={styles.card_title}/>
            <Card.Content 
                style={styles.card_contentWrapper}>
                <Text 
                    style={styles.card_contentText}>
                        Status {props.status}
                </Text>
            </Card.Content>
        </Card>
    )
}

export default SingleDay;
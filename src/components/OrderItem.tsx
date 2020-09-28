import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import SkeletonContent from 'react-native-skeleton-content-nonexpo';

function OrderItem({item}){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
        // Cancel the timer while unmounting
        return () => clearTimeout(timer);
      }, []);
    return(
        <SkeletonContent containerStyle={{marginRight: 20}}
            layout={[
                { width: 239, height: 98},
            ]}
            isLoading={loading}>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.split}>
                </View>

                <View style={styles.belowWrapper}>
                    <View style={styles.symbolWrapper}>
                        <Image source={item.symbol}/>
                        <Text style={styles.number}>
                            {item.num}
                        </Text>
                    </View>
                    <View style={{display:'flex', flexDirection: 'row', marginLeft: 20}}>
                        <View style={styles.inactiveWrapper}>
                            <Text style={styles.inactive}>
                                Preparing
                            </Text>
                        </View>
                        <View style={styles.activeWrapper}>
                            <FontAwesomeIcon icon={faCheck} style={styles.icon} size={8}/>
                            <Text style={styles.active}>
                                Paid
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SkeletonContent>
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: '#F6F6F6',
            borderRadius: 10, padding: 12},
    titleWrapper: {display:'flex', flexDirection: 'row', alignItems: 'center', width: '100%'},
    title: {fontSize: 20, minWidth: 150},
    price: {fontSize: 12, marginLeft: 14},
    description: {fontSize: 12, marginTop: 5},
    split: {width:'100%', height: 1, backgroundColor: 'rgba(0,0,0,0.1)', marginTop: 12, marginBottom: 12},
    belowWrapper: {display:'flex', flexDirection: 'row', justifyContent: 'space-between'},
    symbolWrapper: {display:'flex', flexDirection: 'row', alignItems: 'center'},
    // symbol: {},
    number: {marginLeft: 6, fontSize: 11},
    inactiveWrapper: {paddingLeft: 10, paddingRight: 10, borderRadius: 6, borderWidth: 1, borderColor: '#F94D4D', backgroundColor: 'white',
        justifyContent: 'center'},
    activeWrapper: {paddingLeft: 4, paddingRight: 4, borderRadius: 6, borderWidth: 1, borderColor: '#27AE60', backgroundColor: '#27AE60',
        display: 'flex', flexDirection: 'row', marginLeft: 4, alignItems: 'center'},
    inactive: {color: '#F94D4D', fontSize: 11},
    active: {color: 'white', fontSize: 11, marginLeft: 4},
    icon: {color: 'white'}
});
export default OrderItem;
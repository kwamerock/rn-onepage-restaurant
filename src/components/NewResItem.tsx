import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import StarRating from 'react-native-star-rating';

import SkeletonContent from 'react-native-skeleton-content-nonexpo';
function NewResItem({item}){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
        // Cancel the timer while unmounting
        return () => clearTimeout(timer);
      }, []);
    return(
        <SkeletonContent containerStyle={styles.container}
            layout={[
                { width: 116, height: 165},
            ]}
            isLoading={loading}>
            {/* <View style={styles.container}> */}
                <Image resizeMode="cover" style={styles.image} source={item.image}/>
                <View style={styles.extraWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            {/* </View> */}
        </SkeletonContent>
    )
}

const styles = StyleSheet.create({
    container: { minWidth: 116, maxWidth: 200, borderRadius: 5, marginRight: 12},
    extraWrapper: {width: '100%', padding: 12, backgroundColor: '#F6F6F6'},
    image: { width: '100%', height: 109},
    title: { fontSize: 20},
    description: { fontSize: 16, color: 'rgba(0,0,0,0.5)'}
});
export default NewResItem;
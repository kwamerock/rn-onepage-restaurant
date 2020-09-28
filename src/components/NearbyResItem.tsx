import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import StarRating from 'react-native-star-rating';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

function NearbyResItem({item}){
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
                { width: 250, height: 174},
            ]}
            isLoading={loading}>
            {/* <View style={styles.container}> */}
                <Image resizeMode="cover" style={styles.image} source={item.image}/>
                <View style={styles.extraWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: wp('5%')}}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={item.rating}
                            starStyle={styles.star}
                            starSize={wp('3.5%')}
                        />
                        <View style={styles.locationWrapper}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} size={wp('2.5%')}/>
                            <Text style={styles.text}>{item.distance}m</Text>
                        </View>
                    </View>
                </View>
            {/* </View> */}
        </SkeletonContent>
    )
}

const styles = StyleSheet.create({
    container: { width: 250, borderRadius: 10, marginRight: 10},
    extraWrapper: {width: '100%', padding: 10, backgroundColor: '#F6F6F6'},
    image: { width: '100%', height: 104},
    title: { fontSize: 20},
    description: { fontSize: 12, color: 'rgba(0,0,0,0.5)'},
    star: {color: '#FCAD2E', marginRight: 4},
    locationWrapper: { backgroundColor: '#F74B4B', borderRadius: 5, padding: 5,
        display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'},
    icon: {color: 'white'},
    text: {color: 'white', fontSize: 10, fontWeight: 'bold'}
});
export default NearbyResItem;
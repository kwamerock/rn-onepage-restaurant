import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import SkeletonContent from 'react-native-skeleton-content-nonexpo';

function CategoryItem({item}){
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
                { width: 88, height: 99},
            ]}
            isLoading={loading}>
            <View style={[styles.container, {backgroundColor: item.backgroundColor}]}>
                <Image style={styles.image} source={item.image} resizeMode="contain"/>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </SkeletonContent>
    )
}

const styles = StyleSheet.create({
    // container: { width: wp('25%'), height: wp('25%'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: wp('5%')
    // , marginTop: wp('10%'), marginBottom: wp('10%')},
    container: {width: 88, height: 99, borderRadius: 10, padding: 12, alignItems: 'center'},
    image: {width: 40, height: 40},
    text: {color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 12}
});
export default CategoryItem;
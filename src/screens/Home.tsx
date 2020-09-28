import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import NearbyResItem from '../components/NearbyResItem';
import OrderItem from '../components/OrderItem';
import CategoryItem from '../components/CategoryItem';
import NewResItem from '../components/NewResItem';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';

import SkeletonContent from 'react-native-skeleton-content-nonexpo';

const nearby_restaurants = [
    {
        image: require('../assets/nearby_res1.png'),
        title: 'Noon Kabab',
        description: 'Iranian, Icecream',
        rating: 4.5,
        distance: 250
    },
    {
        image: require('../assets/nearby_res2.png'),
        title: 'Noon Kabab2',
        description: 'Iranian, Icecream',
        rating: 3,
        distance: 150
    }
]

const order_lists = [
    {
        title: "Burger King",
        description: "3Meals, and 1 Juices",
        price: 'BD 3.500',
        symbol: require('../assets/symbol1.png'),
        num: 21112
    },
    {
        title: "Long String Testing ....",
        description: "3Meals, and 1 Juices",
        price: 'BD 4.500',
        symbol: require('../assets/symbol2.png'),
        num: 19385
    }
]

const category_lists = [
    {
        title: 'Food',
        image: require('../assets/food.png'),
        backgroundColor: '#F84C4C'
    },
    {
        title: 'Drinks',
        image: require('../assets/drink.png'),
        backgroundColor: '#FCAD2E'
    },
    {
        title: 'Dessert',
        image: require('../assets/dessert.png'),
        backgroundColor: '#F1CF1E'
    },
    {
        title: 'Trucks',
        image: require('../assets/dessert.png'),
        backgroundColor: '#953773'
    }
]

const new_restaurants = [
    {
        image: require('../assets/new_res1.png'),
        title: 'Long testing  .....',
        description: 'Iranian, Icecream'
    },
    {
        image: require('../assets/new_res2.png'),
        title: 'Noon Kabab2',
        description: 'Iranian, Icecream long description'
    },
    {
        image: require('../assets/new_res2.png'),
        title: 'Noon Kabab2',
        description: 'Iranian, Icecream'
    },
    {
        image: require('../assets/new_res2.png'),
        title: 'Noon Kabab2',
        description: 'Iranian, Icecream'
    }
]

const images = [
    require('../assets/carousel1.png'),
    require('../assets/nearby_res1.png'),
    require('../assets/nearby_res2.png')
]

function HomeScreen() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
        // Cancel the timer while unmounting
        return () => clearTimeout(timer);
      }, []);
    const _renderDotIndicator = () => {
        return <PagerDotIndicator pageCount={3} />;
    };
    return (
        <ScrollView style={styles.container}>

            <View style={styles.searchWrapper}>
                <View style={styles.searchLeftWrapper}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <FontAwesomeIcon icon={faSearch} style={styles.icon} />
                    </TouchableOpacity>
                    <TextInput style={styles.searchInput}
                        onChangeText={text => setSearchKeyword(text)} value={searchKeyword} placeholder="Search in Restaurants" />
                </View>

                <TouchableOpacity style={styles.locationWrapper}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.nearbyResWrapper}>
                <Text style={styles.nearbyResTxt}>Nearby restaurants</Text>
                <TouchableOpacity><Text style={styles.nearbyResLink}>View more ></Text></TouchableOpacity>
            </View>
            <View style={styles.nearbyResItemContainer}>
                <FlatList data={nearby_restaurants}  horizontal={true} keyExtractor={(item, index) => 'key'+index}
                    renderItem={({ item, index }) => <NearbyResItem item={item} key={index} />} />
            </View>

            <Text style={styles.orderLabel}>My Orders</Text>
            <View style={styles.nearbyResItemContainer}>
                <FlatList data={order_lists} horizontal={true} keyExtractor={(item, index) => 'key'+index}
                    renderItem={({ item, index }) => <OrderItem item={item} key={index}/>} />
            </View>


            <Text style={styles.orderLabel}>Explore Categories</Text>
            <View style={styles.nearbyResItemContainer}>
                <FlatList data={category_lists} horizontal={true} keyExtractor={(item, index) => 'key'+index}
                    renderItem={({ item, index }) => <CategoryItem item={item} key={index}/>} />
            </View>



            {/* <SkeletonContent containerStyle={{marginTop: wp('5%')}}
                layout={[
                    { height: wp('30%'), width: '100%'},
                ]}
                isLoading={loading}>
                <IndicatorViewPager
                    style={{height: wp('30%'), backgroundColor:'white'}}
                    indicator={_renderDotIndicator()}
                >
                    {images.map((item, index) => (<View style={styles.carouselContainer} key={index}>
                        <Image source={item} style={styles.carouselImage}></Image>
                    </View>
                    ))}
                </IndicatorViewPager>
            </SkeletonContent> */}

            <View style={styles.nearbyResWrapper}>
                <Text style={styles.nearbyResTxt}>New restaurants</Text>
                <TouchableOpacity><Text style={styles.nearbyResLink}>View more ></Text></TouchableOpacity>
            </View>
            <View style={styles.nearbyResItemContainer}>
                <FlatList data={new_restaurants} horizontal={true} keyExtractor={(item, index) => 'key'+index}
                    renderItem={({ item, index }) => <NewResItem item={item} key={index}/>} />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 60, marginLeft: 24, marginRight: 24, marginBottom: 30 },
    searchWrapper: {
        width: '100%', height: 42, padding: 5, borderRadius: 10,
        backgroundColor: '#F0F0F0', display: 'flex', flexDirection: 'row', alignItems: 'center'
    },
    searchLeftWrapper: { display: 'flex', flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#000000' },
    searchIcon: { width: 40, justifyContent: 'center', alignItems: 'center', paddingRight: 5 },
    searchInput: { minWidth: 150, width: wp('100%') - 128, height: 30, paddingTop: 0, paddingBottom: 0},
    locationWrapper: { width: 40, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: 5 },
    icon: { color: '#565656' },
    nearbyResWrapper: {
        marginTop: 28, width: '100%', height: 23,
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    nearbyResTxt: { fontSize: 20 },
    nearbyResLink: { fontSize: 12, color: '#F74B4B' },
    nearbyResItemContainer: { marginTop: 8 },
    orderLabel: { fontSize: 20, marginTop: 40 },

    carouselContainer: {
        width: wp('100%') - 48,
        height: 129,
        borderRadius: wp('2.5%')
    },
    carouselImage:{
        width: '100%',
        height: '100%'
    }
});

export default HomeScreen;
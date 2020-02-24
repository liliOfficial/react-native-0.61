import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const itemHorizontalMargin = wp(2);

export default class OfferCarousel extends Component {
    state = {
        entries: [
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg'
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                illustration: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg'
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg'
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg'
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg'
            }
        ],
        activeSlide: 1
    };

    _renderItem({ item, index }, parallaxProps) {
        const uri = item.illustration;
        return (
            <View style={styles.slide}>
                <View style={styles.shadow} />
                <Image
                    style={styles.image}
                    source={{ uri: uri }}
                />
            </View>
        );
    }
    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.dotContainer}
                dotStyle={styles.dot}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {

        const sliderWidth = Dimensions.get("window").width;
        const itemWidth = sliderWidth - 60;
        const loop = true;
        const autoplay = true;
        const autoplayDelay = 3000;
        return (
            <View style={styles.container}>               
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    loop={loop}
                    autoplay={autoplay}
                    autoplayDelay={autoplayDelay}
                />
                {this.pagination}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 510,
        resizeMode: 'contain',
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    dotContainer: {
        position: "absolute",
        bottom: -10,
        width: '100%',
        padding: 10
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: -3,
        backgroundColor: '#e62429',
    },
    slide: {
        width: '100%',
        position: 'relative',
    },
    
    container: {
        position: 'relative',
        height: 520,
        paddingTop:10,
    
    },
    shadow: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 0,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        borderRadius: 8
    },
})
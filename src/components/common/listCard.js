import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { movieToggleFavourite, toastPopup } from '../../actions';

function ListCard(props) {

    const { data, favouriteButton, movieToggleFavourite, toastPopup } = props;

    const _movieToggleFavourite = () => {
        movieToggleFavourite(data.id);
        const message = data.isFavourite ? `Remove ${data.name} from favourite` : `Add ${data.name} to favourite`;
        toastPopup({ message, autoClose: 1000 });
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.shadow} />
            <View style={styles.cardBox}>
                <Image style={styles.backgroundImage} source={data.background} />
                <View style={styles.contentBox}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text>{data.date}</Text>
                </View>
            </View>
            {favouriteButton &&
                <TouchableHighlight onPress={_movieToggleFavourite}>
                    <Icon name={data.isFavourite ? 'star' : 'star-o'} size={22} style={styles.icon} />
                </TouchableHighlight>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        width: '100%',
    },
    icon: {
        color: '#e62429',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    cardBox: {
        borderRadius: 4,
        height:100,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    shadow: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 0,
        left: 0,
        width: '100%',
        bottom: 0,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        borderRadius: 5
    },
    backgroundImage: {
        width: '15%',
        paddingBottom:'25%',
        marginRight: 10
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        height: 40,
        fontWeight: '600',
        color: '#e62429'
    },
    contentBox: {
        paddingHorizontal: 10,
    },
    subTitle: {
        color: '#666',
        marginVertical: 5
    }
})

const mapStateToProps = state => {
    const { toastMessage } = state.toast;
    return { toastMessage };
}

export default connect(mapStateToProps, { movieToggleFavourite, toastPopup })(ListCard);


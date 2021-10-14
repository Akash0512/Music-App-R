import React from 'react';
import { View, Image, Text } from 'react-native';
import { Album } from '../../types';
import styles from './styles';

export type AlbumProps = {
    album: Album,
}

const AlbumComponent = (props: AlbumProps) => (
    <View style={styles.container}>
        <Image source={{uri: props.album.imageUri}} style={styles.image} />
        <Text style={styles.text}>{props.album.artist}</Text>
    </View>
)
    

export default AlbumComponent;
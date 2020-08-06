import React from 'react'
import { View, Text, Image } from 'react-native'

import minhaFoto from '../../../assets/images/eu.jpg'

import styles from './styles'
import Button from '../Button'

const SubHeader = () => (
    <View style={styles.container}>
        <Image
            style={styles.avatar}
            source={minhaFoto} />
        <View style={styles.profileInfo}>
            <Text style={styles.name}>Giovanni Amorim</Text>
            <Text styles={styles.biografia}>
                Desenvolvedor Angular, Java e Mobile com React-native
            </Text>

            <View style={styles.buttonContainer}>
                <Button style={styles.firstButton}>Mensagem</Button>
                <Button type="outline" >Seguir</Button>
            </View>



        </View>

    </View>
)

export default SubHeader
import React, { Component } from 'react'
import { View } from 'react-native';

import Product from './Product'

import styles from './styles'

export default class ProductList extends Component {
    state = {
        products: [
            {
                id: 1,
                image: 'https://democrata.vteximg.com.br/arquivos/ids/162712-700-884/sapato-metropolitan-skyline-201104-002-democrata1.jpg?v=637322991569030000',
                title: 'Acne Studios',
                description: 'Andrea nappa dusty pink',
                price: 'R$50,00',
            },
            {
                id: 2,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 3,
                image: 'https://img.ltwebstatic.com/images3_pi/2020/06/19/15925656624deac6baa19e7a6cb44ca3ab551701c9_thumbnail_405x552.webp',
                title: 'Biquini Preto',
                description: 'Andrea nappa dusty pink',
                price: 'R$30,00',
            },
            {
                id: 4,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 5,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9vuBI7Wrw6gvvKqOBjmt1tElrAm43sRnx5oVFwdrOPVBgeIjuqu_61wWZ94oQI7A4J8pYGHUc&usqp=CAc',
                title: 'Óculos de Sol',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 6,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 7,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 8,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 9,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            }
        ],
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.products.map(product =>
                    <Product key={product.id} product={product} />
                )}
            </View>
        )
    }

}
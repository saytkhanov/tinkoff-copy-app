import React, { FC } from 'react'
import { Text } from 'react-native'
import Layout from '../../layout/Layout'
import Accounts from './accounts/Accounts'
import ApplyNewProduct from './apply-new-products/ApplyNewProduct'
import Header from './Header'
import Stories from './stories/Stories'

const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Stories />
			<Accounts />
			<ApplyNewProduct />
		</Layout>
	)
}

export default Home

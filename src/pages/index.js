import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <p>Это главная страница</p>
    <Link to="/projects">Мои проекты</Link>
  </Layout>
)

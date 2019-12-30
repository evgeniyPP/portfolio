import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faVk,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import backgroundImage from '../images/bg.png'

const Wrapper = styled.div`
  min-height: 100vh;
  background: center / cover no-repeat url(${backgroundImage});
  color: #fff;
  display: flex;
  flex-wrap: wrap;
`
const LeftSide = styled.div`
  flex: 1;
  align-self: center;
  margin-left: 3rem;

  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: normal;
    margin-bottom: 1.5rem;
  }
`

const Links = styled.div`
  a {
    color: #fff;
    margin-right: 1rem;
  }
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`

const RightSide = styled.div`
  margin: 2rem 1rem;
  max-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AboutMe = styled.div`
  h3 {
  }

  div {
    display: flex;
  }

  p {
  }

  img {
    display: block;
    max-width: 100%;
    align-self: flex-start;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
`

const Navbar = styled.div`
  width: 70%;
  margin: 0 auto;
`

const NavItem = styled(Link)`
  color: #fff;
  display: block;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 1px solid #fff;
  transition: all 0.2s;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;

  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.2s;
  }
`

export default () => (
  <Wrapper>
    <LeftSide>
      <h1>Евгений Петрянкин</h1>
      <h2>Веб-разработчик</h2>
      <Links>
        <a
          href="https://github.com/evgeniyPP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faGithub} />
        </a>
        <a
          href="https://vk.com/fkeromanov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faVk} />
        </a>
        <a
          href="https://t.me/evgeniy_pp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faTelegramPlane} />
        </a>
      </Links>
    </LeftSide>

    <RightSide>
      <AboutMe>
        <h3>Обо мне</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim
            quibusdam consectetur inventore, dolore atque corporis obcaecati
            architecto exercitationem blanditiis voluptates veritatis eligendi
            quod ipsum? Voluptas earum voluptatibus rem dolorum fugiat autem
            dolor ex dolore. Commodi expedita ad alias eius dolore incidunt,
            inventore laboriosam earum ea sapiente vitae perspiciatis
            exercitationem?
          </p>
          <img
            src="https://i.picsum.photos/id/902/150/150.jpg"
            alt="my avatar"
          />
        </div>
      </AboutMe>

      <Navbar>
        <NavItem to="/skills">Мой стек</NavItem>
        <NavItem to="/projects">Мои проекты</NavItem>
        <NavItem to="/contactme">Связаться со мной</NavItem>
      </Navbar>
    </RightSide>
  </Wrapper>
)

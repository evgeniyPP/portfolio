import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faVk,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/index.module.less'

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.leftSide}>
      <h1>Евгений Петрянкин</h1>
      <h2>Веб-разработчик</h2>
      <div className={styles.links}>
        <a
          href="https://github.com/evgeniyPP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
        <a
          href="https://vk.com/fkeromanov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faVk} />
        </a>
        <a
          href="https://t.me/evgeniy_pp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faTelegramPlane} />
        </a>
      </div>
    </div>

    <div className={styles.rightSide}>
      <div className={styles.aboutMe}>
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
      </div>

      <div className={styles.navbar}>
        <Link className={styles.navItem} to="/skills">
          Мой стек
        </Link>
        <Link className={styles.navItem} to="/projects">
          Мои проекты
        </Link>
        <Link className={styles.navItem} to="/contactme">
          Связаться со мной
        </Link>
      </div>
    </div>
  </div>
)

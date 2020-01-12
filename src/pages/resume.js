import React from 'react'
import Header from '../components/header'
import Helmet from '../components/helmet'
import styles from '../styles/resume.module.less'
import imgDocx from '../images/resume-docx.png'
import imgPdf from '../images/resume-pdf.png'

export default () => {
  return (
    <div className="wrapper">
      <Helmet title="Резюме" />
      <div>
        <Header>Моё резюме</Header>
        <section className={styles.content}>
          <div className={styles.download}>
            <a href="/resume.docx" download>
              <img src={imgDocx} alt="resume docx" />
              <p>Скачать в .DOCX</p>
            </a>
          </div>
          <div className={styles.download}>
            <a href="/resume.pdf" download>
              <img src={imgPdf} alt="resume pdf" />
              <p>Скачать в .PDF</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

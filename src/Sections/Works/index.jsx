import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import { get } from 'lodash'

// Components
import WorksCollection from 'Components/WorksCollection'

import './styles.scss'

Modal.setAppElement('#root')

const Works = ({ works }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [activeWorks, setActiveWorks] = useState([])

    const openModal = (works) => {
        document.getElementById('root').classList.add('modal-open')
        setActiveWorks(works)
        setModalIsOpen(true)
    }
    const closeModal = () => {
        document.getElementById('root').classList.remove('modal-open')
        setModalIsOpen(false)
    }

    return (
        <Fragment>
            <section id="works" className="section section-works">
                <div className="container">
                    <h2>WORK</h2>
                    <div className="works-collections-container">
                        {
                            works.map((work, i) => <WorksCollection openModal={openModal} key={i} {...work} />)
                        }
                    </div>
                </div>
            </section>
            <Modal
                className="works-modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                    <button className="works-modal__close" onClick={closeModal}>X</button>
                    <div className="works-modal__content">
                        {
                            activeWorks.map((work, i) => <div key={i} className="works-modal__work-container"><img className="works-modal__work" src={get(work, 'projectAsset.url')} /></div>)
                        }
                    </div>
            </Modal>
        </Fragment>
    )
}

export default Works
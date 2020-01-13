import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import { get } from 'lodash'

// Components
import WorksCollection from 'Components/WorksCollection'

import './styles.scss'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '80%',
      height                : '80%',
    }
};

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
            <section id="works" className="container section section-works">
                <h2>WORK</h2>
                <div className="works-collections-container">
                    {
                        works.map((work, i) => <WorksCollection openModal={openModal} key={i} {...work} />)
                    }
                </div>
            </section>
            <Modal
                className="works-modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
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
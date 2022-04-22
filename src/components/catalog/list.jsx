import React, { useState } from "react";
import Logo from '../../img/poster.png'
import './list.scss'
import {
    Button,
    Table,
    Modal,
    ModalBody,
    ModalHeader,
} from 'reactstrap'
import axios from "axios"
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { MdLocationPin } from "react-icons/md"
import { MdDateRange } from 'react-icons/md'
// import FormDashboard from './form'

export default function List({ list }) {

    const [data, setData] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [updatedId, setUpdatedId] = useState(null)
    const [action, setAction] = useState(null)


    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4000/delete-event/${id}`)
            .then(() => {
                const updateData = data.filter(v => v.id !== id)
                setData(updateData)
                toast.success('Berhasil dihapus', {
                    position: "top-center",
                    autoClose: 800,
                })
                setTimeout(function () { window.location = '/dashboard' }, 1000)

            })
            .catch((err) => console.log(err))

    }
    const handleEdit = (id) => {
        setUpdatedId(id);
        setAction('Edit');
        setModalVisible(true)
    }

    function formatDate(s) {
        var months = 'January February Maret April May June July August September October November December'.split(' ');
        var b = s.split(/\D/);
        return b[2] + ' ' + months[b[1] - 1] + ' ' + b[0];
    }
    return (
            <div className='blogItem-wrap'>
                <img src={Logo} alt='test' />
                <p className="katagori">{list.katagori}</p>
                <h3>{list.nameEvent}</h3>
                <p className="description">{list.description}</p>

                <footer>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <MdLocationPin />
                            <p className="location">{list.location}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <MdDateRange />
                            <p className="date">{formatDate(`${list.date}`)}</p>
                        </div>
                    </div>
                    <div>
                        <Button className='btn-delete' color='danger' onClick={() => handleDelete(list.id)}> Delete</Button>
                        <Button className='btn-edit' color='success' onClick={() => handleEdit(list.id)}> Edit</Button>
                    </div>
                </footer>
                {/* <Modal isOpen={modalVisible} toggle={() => setModalVisible(!modalVisible)}>
                    <ModalHeader>{`Form ${action} Data`}</ModalHeader>
                    <ModalBody>
                        <FormDashboard
                            actionForm={action}
                            data={data}
                            setData={setData}
                            setModalVisible={setModalVisible}
                            updatedId={updatedId}
                        />
                    </ModalBody>
                </Modal> */}
            </div>
    )
}
import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import axios from 'axios'
import { useParams } from "react-router-dom";

export default function FormDashboard({
    actionForm,
    data,
    updatedId,
    setModalVisible }) {

    const params = useParams()

    const initialFormValue = {
        NameEvent: "",
        organized: "",
        katagori: "",
        location: "",
        price: 0,
        ticket: 0,
        description: ""
    }

    const [form, setForm] = useState(initialFormValue);
    const createData = async () => {
        await axios.post('http://localhost:4000/make-event', form)
            .then(() => {
                data.push(form)
            })
            .catch((err) => console.log(err))
        setModalVisible(false)
    }
    const updateData = async () => {
        await axios.put(`http://localhost:4000/update_event/${params.id}`, form)
            .then(() => {
                const updatedDataIndex = data.findIndex((p) => p.id === updatedId)
                data[updatedDataIndex] = form;
            })
            .catch((err) => console.log(err))
        setModalVisible(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault() // ignore cara kerja by default html tag
        if (actionForm === 'Create') return createData()
        return updateData()
        //edit
    }
    useEffect(() => {
        if (actionForm === 'Edit') {
            // create new object edited data from referal data
            const editedData = Object.assign({}, data.find(v => v.id === updatedId))
            delete editedData.id
            setForm(editedData)
        }
    }, [data, updatedId, actionForm])//initial data
    // console.log({ updatedId })
    return (

        <div>
            <form onSubmit={handleSubmit}>
                {Object.keys(form).map((key, idx) => (
                    // <div hidden={key === "id"} key={idx}>
                    <div key={idx}>
                        <FormGroup>
                            <Label>
                                {key}
                            </Label>
                            <Input
                                value={form[key]}
                                onChange={(e) => setForm(prev => ({
                                    ...prev, [key]: e.target.value
                                }))} />
                        </FormGroup>

                    </div>

                ))}
                <br />
                <Button color="primary" type="submit">Submit</Button>
                <Button onClick={() => setModalVisible(false)}>Cancel</Button>
            </form>
        </div>
    )


}

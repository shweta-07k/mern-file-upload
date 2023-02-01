import React, { useEffect, useState } from 'react'
import axios from "axios"


export default function MultipleImage() {
    const [name, setname] = useState("kate")
    const [documents, setdocuments] = useState()
    const [users, setusers] = useState([])

    const userInstance = axios.create({ baseURL: 'http://localhost:5000' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("name", name)
        for (let d of documents) {
            fd.append("doc", d)
            // console.log(d);
        }
        // for (const x of fd.entries()) {
        //     console.log(x);
        // }
        const { data } = await userInstance.post("/user/add-to-gallery", fd)
        console.log(data);
    }
    const getAllusers = async (e) => {
        const { data: { result } } = await userInstance.get("/user/fetch")
        console.log(result);
        setusers(result)
    }
    useEffect(() => {
        getAllusers()
    }, [])

    return <>
        <pre>{JSON.stringify(documents, null, 2)}</pre>
        <form onSubmit={handleSubmit}>
            <div className="container mt-5">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Upload Image</div>
                        <div class="card-body">
                            <input type="text" value={name} onChange={e => setname(e.target.value)} className='form-control' placeholder='Enter Name' /><br />

                            <input type="file" multiple onChange={e => setdocuments(e.target.files)} className='form-control' name="" id="" placeholder='Please Choose docs' /><br /><br />

                            <button type="submit" class="btn btn-primary">Add Docs</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div className="container mt-5">
            {
                users.map(item => <>
                    <h1>{item.name}</h1>
                    {
                        item.docs.map(url =>
                            <img src={`http://localhost:5000/${url}`} height={100} className="img-fluid" alt="" />)
                    }
                </>)
            }
        </div>
    </>
}

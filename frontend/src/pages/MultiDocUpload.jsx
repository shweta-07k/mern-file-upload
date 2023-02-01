import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MultiDocUpload() {
    const [userDoc, setuserDoc] = useState([])
    const [documents, setdocuments] = useState({
        dob: "", aadhar: "", tc: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("dob", dob)
        fd.append("aadhar", aadhar)
        fd.append("tc", tc)
        const { data } = await axios.post("/doc/add", fd)
        console.log(data);
    }
    const getAlldocs = async () => {
        const { data: { result } } = await axios.get("http://localhost:5000/doc")
        // console.log(data);
        setuserDoc(result)
    }
    useEffect(() => {
        getAlldocs()
    }, [])

    return <>

        {JSON.stringify(documents, null, 2)}
        {JSON.stringify(userDoc, null, 2)}


        {
            userDoc.map(item =>
                <div class="card">
                    <div class="card-header"><strong>MultiImage Upload</strong></div>
                    <div class="card-body">
                        <>
                            <img src={`http://localhost:5000/${item.userDob}`} height={100} alt="" /><br /><br />
                            <img src={`http://localhost:5000/${item.userAdhar}`} height={100} alt="" /><br /><br />
                            <img src={`http://localhost:5000/${item.userTc}`} height={100} alt="" /></>
                    </div>

                </div>

            )
        }
        <form onSubmit={handleSubmit}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header">Upload Multiple Document</div>
                            <div class="card-body">
                                <input onChange={e => setdocuments({ ...documents, dob: e.target.files })} type="file" /><br /><br />
                                <input onChange={e => setdocuments({ ...documents, aadhar: e.target.files })} type="file" /><br /><br />
                                <input onChange={e => setdocuments({ ...documents, tc: e.target.files })} type="file" /><br /><br />
                                <button type="button" class="btn btn-primary">Submit All Document</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>


    </>
}

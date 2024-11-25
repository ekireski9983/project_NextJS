'use client'
import Card from '../../../../../components/card';
import ConfigDialog from '../../../../../components/ConfirmDialog'
import { useState } from 'react'

export default function AdminBlogsForm() {
    const [modal, setModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalMessage, setModalMessage] = useState("")
    const [data, setData] = useState({
        title:'',
        subTitle:'',
        content:'',
    });

    const clearData = ()=>{
        setData({
            title:'',
            subTitle:'',
            content:'',
        })
    }

    const inputHandler= (e) =>{
        setData({...data, [e.target.name]: e.target.value })
    }

    const onCancel=()=>{
        setModal(false)
        setModalTitle('')
        setModalMessage('')
        clearData()
    }

    async function onSubmitData() {
        try{
          let res = await fetch('/api/blogs', {
            method:'POST',
            body: JSON.stringify(data),
          })
          let resData = await res.json()
          if(!resData.data){
            throw Error(resData.message)
          }
          setModal(true)
          setModalTitle('Info')
          setModalMessage(resData.message)
          

        }catch(err){
          console.error("ERR", err.message)
          setModal(true)
          setModalTitle('Err')
          setModalMessage(err.message)
        }
      }

    return (
    <>

        <Card title="Blogs Form">
            <div className="w-full my-2">
                <label>Title</label>
                    <input 
                        name='title'
                        value={data.title}
                        onChange={inputHandler}
                        type="text" 
                        className="w-full border my-input-text"/>
            </div>

            <div className="w-full my-2">
                <label>Sub Title</label>
                    <input 
                        name='subTitle'
                        value={data.subTitle}
                        onChange={inputHandler}
                        className="w-full border my-input-text"/>
            </div>

            <div className="w-full my-2">
                <label>Content</label>
                    <input 
                        name='content'
                        value={data.content}
                        onChange={inputHandler}
                        className="w-full border my-input-text"/>
            </div>

            <button  className="btn-primary" onClick={onSubmitData}>
                <span className="relative text-sm font-semibold text-white">
                    Save Data
                </span>
            </button>
        </Card>

        <ConfigDialog  
            onOkOny={()=>onCancel()} 
            showDialog={modal}
            title={modalTitle}
            message={modalMessage}
            onCancel={()=>onCancel()} 
            onOk={()=>onCancel()} 
            isOkOnly={true} />
    </>
    )
}
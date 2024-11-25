'use client'
import Card from '../../../../../components/card';
import { useState } from 'react'

export default function AdminBlogsForm() {
    const [data, setData] = useState({
        title:'',
        id:'',
        subTitle:'',
        content:'',
      });

    const inputHandler= (e) =>{
        setData({...data, [e.target.name]: e.target.value })
    }

    return (
    <>
        <Card title="Blogs Form">
            <div className="w-full my-2">
                <label>Title</label>
                    <input 
                        name='title'
                        value={data.startDate}
                        onChange={inputHandler}
                        type="text" 
                        className="w-full border my-input-text"/>
            </div>

            <div className="w-full my-2">
                <label>Sub Title</label>
                    <input 
                        name='subTitle'
                        value={data.startDate}
                        onChange={inputHandler}
                        className="w-full border my-input-text"/>
            </div>

            <div className="w-full my-2">
                <label>Content</label>
                    <input 
                        name='subTitle'
                        value={data.startDate}
                        onChange={inputHandler}
                        className="w-full border my-input-text"/>
            </div>

            <button  className="btn-primary">
                <span className="relative text-sm font-semibold text-white">
                    Save Data
                </span>
            </button>
        </Card>
    </>
    )
}
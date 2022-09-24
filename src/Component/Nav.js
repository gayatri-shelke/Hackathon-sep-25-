import React,{useState} from 'react'
// import {Link } from 'react-router-dom'

function  Nav(){
    const [otp,setOtp]= useState(new Array(4).fill(''))
    const handleChange=(element,index)=>{
        if(isNaN(element.value)) return false
            setOtp([...otp.map((d,idx)=>(idx===index)?element.value:d)])
        if(element.nextsibling){
            element.nextsibling.focus();
        }
    }
    const handleSubmit=(element)=>{
              alert(element.target)
    }
    return( <>
        <div className='container'>
            <h1>ENTER  NUMBER</h1>
                <div className='userInput'>
                    {otp.map((data,index)=>{
                        return(
                            <input type='text'  maxLength='4' 
                            key={index} value={data} onChange={e=>handleChange(e.target,index)}
                            onFocus={e=>e.target.select()} />

                            )
                    })}
                    
                </div>

                <div className='main'>
                    <button  className='but1'  onSubmit={handleSubmit}>submit</button>
                    <button className='but3' onClick={e=>setOtp([...otp.map(v=>'')])}>Delete</button>


                </div>
                
        </div>
        </>
    )
}
export default Nav;





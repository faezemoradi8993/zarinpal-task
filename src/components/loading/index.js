import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='loading '>
            <ReactLoading type="spin" color="white" height={"30px"} width={"100px"} />
            <p>لطفا منتظر بمانید</p>
        </div>
    )
}

export default Loading
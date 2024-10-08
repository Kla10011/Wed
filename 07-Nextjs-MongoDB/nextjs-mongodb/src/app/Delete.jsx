'use client'

import React from 'react'

function DeleteBtn({id}) {
    const hadleDelete = async() => {
        const confirmed =  confirm('Are you sure?')
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
                method: 'DElETE'
            })

            if (res.ok) {
                window.location.reload()
            }
        }
    }


  return (
    <a onClick={hadleDelete} className='bg-red-500 text-white border py-2 px-2 rounded-md text-lg'>
        Delete
    </a>
  )
}

export default DeleteBtn
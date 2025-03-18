// import React from 'react'

const Navbar = () => {
  return (
    <div>
        <table border={1} width={'100%'}>
         <tr>
          <td>
            <a href='/'> Home</a>
          </td>
          <td>
             <a href='/create'> Create Emp</a>
          </td>
          <td>
             <a href='/read'> Read Emp</a>
          </td>
          <td>
          <a href='/update'> Update Emp</a>
          </td>
          <td>
          <a href='/delete'> Delete Emp</a>
          </td>
         </tr>
      </table>
    </div>
  )
}

export default Navbar
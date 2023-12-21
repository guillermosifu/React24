import  { useState } from 'react'


const FormRegister = () => {

    const [nombre,setNombre]= useState("")
    const[apellido,setApellido]= useState("")

    const handleInputName =(e)=>{

        setNombre(e.target.value)
    }


  return (
    <div>
        <h4>Formulario de Registro</h4>
        <h4>Nombre: {nombre}</h4>
        <h4>Apellido: {apellido}</h4>

        <form action="">
            <input type="text" placeholder='ingres tu nombre' onChange={handleInputName} />
            <input type="text" placeholder='ingresa tu apellido' />
        </form>
    </div>
  )
}

export default FormRegister
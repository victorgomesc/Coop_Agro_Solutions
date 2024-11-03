import React from 'react'

const Navbar = () => {
  return (
    <div className="mt-10 flex">
      <div className="flex items-center justify-center gap-16">

            <h1 className="text-2xl foont-bold hover:text-blue-600">
                Inicio
            </h1>
            <h1 className="text-2xl foont-bold hover:text-blue-600">
                Equipe
            </h1>
            <h1 className="text-2xl foont-bold hover:text-blue-600">
                Produto
            </h1>
            <h1 className="text-2xl foont-bold hover:text-blue-600">
                Deixe sua opnião
            </h1>
        
      </div>
    </div>
  )
}

export default Navbar

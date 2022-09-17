import React from "react"


const ContainerExpenses =({children}) =>{

    return (
        <main className="expenses">
            <div className={"expensesCard"}>
                {children}  
            </div>
        </main>
    )
}

export default ContainerExpenses
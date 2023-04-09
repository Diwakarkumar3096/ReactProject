function Dropdown({items}) {
  console.log(items)

  return(
    <div className="dropdown_list">
                <ul>
             {
                items.map((index) => {
                    return (
                        <li>{index}</li>
                    )
                })
             }

                 </ul>
        </div>
       


     
  )
  
  ;
}

export default Dropdown;

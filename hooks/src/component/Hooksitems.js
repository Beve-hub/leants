import  {useState} from 'react'

function Hooksitems() {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([... items, {
            id: items.lenght,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItems}>Add a number</button>
            <ul>
                { items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))

                }
            </ul>

        </div>
    )
}

export default Hooksitems
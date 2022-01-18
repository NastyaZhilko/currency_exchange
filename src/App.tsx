import React, {useEffect, useState} from 'react';
import './App.css';
import Board, {ItemType} from "./components/Board/Board";
import Footer from "./components/Footer/Footer";
import Account from "./components/Account/Account";

let initialItems = [
    {
        position: 3,
        data: {
            sum: 35.24, title: 'USD',
            description: 'Current account',
            color: 'red'
        }
    },
    {
        position: 9,
        data: {
            sum: 35.24, title: 'USD',
            description: 'Account',
            color: 'green'
        }
    }
]


function App() {

    const [items, setItems] = useState<Array<ItemType>>(initialItems)
    const [currentAndTarget, setCurrentAndTarget] = useState<[number, number]>([0, 0])

    useEffect(() => onChange(), [currentAndTarget]);
    const onDrop = (current: number, target: number) => {
        console.log(current, target)
        setCurrentAndTarget([current, target])

    }


    const onChange = () => {
        setItems(items.map((item) => {
            if (item.position === currentAndTarget[0]) {
                return {...item, position: currentAndTarget[1]}

            }
            if (item.position === currentAndTarget[1]) {
                return {...item, position: currentAndTarget[0]}
                //console.log('show modal')
            }
            return item
        }))
    }


    return (<div>
            <Board items={items}
                   renderItem={({data}) => (<Account {...data}/>)}
                   onDrop={onDrop}
            />
            <Footer/>

        </div>

    );
}

export default App;

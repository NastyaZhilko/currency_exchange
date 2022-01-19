import React, {useCallback, useState} from 'react';
import './App.css';
import Board, {ItemType} from "./components/Board/Board";
import Footer from "./components/Footer/Footer";
import Account from "./components/Account/Account";
import Modal from "./components/common/Modal/Modal";
import CurrencyTransferForm from "./components/CurrencyTransferForm/CurrencyTransferForm";

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
    },
    {
        position: 5,
        data: {
            sum: 35.24, title: 'EUR',
            description: 'Current account',
            color: 'blue'
        }
    }

]

function App() {

    const [items, setItems] = useState<Array<ItemType>>(initialItems)
    const [modalData, setModalData] = useState(null)


    console.log(modalData)
    const onDrop = useCallback((current: number, target: number) => {
        console.log(current, target)
        if (items.some(item => item.position === target)) {
            // @ts-ignore
            setModalData({current: current, target: target})
        } else {
            setItems(items => items.map(item => {
                if (item.position === current) {
                    return {
                        ...item, position: target
                    }
                } else {
                    return item
                }
            }))

        }
    }, [items])

    return (<div>
            <Modal open={modalData!==null} onClose={()=>setModalData(null)}>
            <CurrencyTransferForm data={setModalData}/>
            </Modal>
            <Board items={items}
                   renderItem={({data}) => (<Account {...data}/>)}
                   onDrop={onDrop}
            />
            <Footer/>
        </div>

    );
}

export default App;

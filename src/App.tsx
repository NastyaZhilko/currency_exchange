import React, {useCallback, useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";
import Account from "./components/Account/Account";
import Modal from "./components/Modal/Modal";
import CurrencyTransferForm from "./components/CurrencyTransferForm/CurrencyTransferForm";
import Card from "./components/Card/Card";


export type Item = {
    position: number
    data: {
        sum: number
        title: string
        description: string
        color: string
    }
}

let initialItems = [
    {
        position: 1,
        data: {
            sum: 35.24, title: 'USD',
            description: 'Current account',
            color: 'red'
        }
    },
    {
        position: 13,
        data: {
            sum: 50, title: 'RYB',
            description: 'Account',
            color: 'green'
        }
    },
    {
        position: 25,
        data: {
            sum: 80.59, title: 'EUR',
            description: 'Current account',
            color: 'blue'
        }
    }

]


function App() {

    const [items, setItems] = useState<Item[]>(initialItems)
    const [modalData, setModalData] = useState(null)

    const onDrop = useCallback((current: number, target: number) => {
        if (items.some(item => item.position === target)) {
            let currentAccount = items.find(item => item.position === current)
            let targetAccount = items.find(item => item.position === target)
            // @ts-ignore
            setModalData([currentAccount.data, targetAccount.data])

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
            <Modal open={modalData !== null} onClose={() => setModalData(null)}>
                {modalData && <CurrencyTransferForm data={modalData}/>}
            </Modal>
            <Board items={items}
                   renderItem={({data}) => (<Account {...data}/>)}
                   onDrop={onDrop}
            />
            <Footer/>
        </div>

    )
}

export default App;

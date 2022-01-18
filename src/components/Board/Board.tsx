import React, {ReactElement, useMemo} from 'react'
import {DndProvider} from "react-dnd";
import Square from "../Square/Square";
import {HTML5Backend} from "react-dnd-html5-backend";
import style from "./Board.module.css"

export type ItemType = {
    data: {
        sum: number,
        title: string,
        description: string,
        color: string
    }
    position: number
}

export type BoardPropsType = {
    items: ItemType[]
    renderItem: (item: ItemType) => ReactElement
    onDrop: (current: number, target: number) => void
}


const Board: React.FC<BoardPropsType> = ({items, renderItem, onDrop}) => {

    const renderingItems = useMemo(() => {
        //fix 'any'
        const positionsItems: any = {}
        console.log(typeof (positionsItems))
        let maxPosition = 0
        items.forEach((item) => {
                positionsItems[item.position] = item
           // console.log(positionsItems[item.position])
                maxPosition = Math.max(maxPosition, item.position)
            }
        )

        const boardSquare = []

        for (let i = 1; i <= 24; i++) {
            const square = (<Square key={i} id={i} onDrop={onDrop}>
                {positionsItems[i] ? renderItem(positionsItems[i]) : (undefined)}
            </Square>);
            boardSquare.push(square);

        }
        return boardSquare

    }, [items, renderItem])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.container}>
                {renderingItems}
            </div>
        </DndProvider>
    )
}

export default Board

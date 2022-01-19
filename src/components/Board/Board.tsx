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

export type PositionsItemsType = {
    [key: number]: ItemType
}


const Board: React.FC<BoardPropsType> = ({items, renderItem, onDrop}) => {

    const renderingItems = useMemo(() => {
        const positionsItems: PositionsItemsType = {}
        let maxPosition = 0
        items.forEach((item) => {
                positionsItems[item.position] = item
                maxPosition = Math.max(maxPosition, item.position)
            }
        )
        const boardSquare = []
        for (let i = 1; i <= 64; i++) {
            const square = (<Square key={i} position={i} onDrop={onDrop}>
                {positionsItems[i] ? renderItem(positionsItems[i]) : undefined}
            </Square>);
            boardSquare.push(square);
        }
        return boardSquare
    }, [items, renderItem, onDrop])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.container}>
                {renderingItems}
            </div>
        </DndProvider>
    )
}

export default Board

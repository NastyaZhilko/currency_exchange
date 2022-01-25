import React, {ReactElement, useMemo} from 'react'
import {DndProvider} from "react-dnd";
import Square from "../Square/Square";
import {HTML5Backend} from "react-dnd-html5-backend";
import style from "./Board.module.css"

interface ItemType {
    position: number
}

interface BoardPropsType<Type extends ItemType>  {
    items: Type[]
    renderItem: (item: Type) => ReactElement
    onDrop: (current: number, target: number) => void
}

interface PositionsItemsType<Type> {
    [key: number]: Type
}


const Board = <Type extends ItemType>({items, renderItem, onDrop}: BoardPropsType<Type>) => {

    const renderingItems = useMemo(() => {
        const positionsItems: PositionsItemsType<Type> = {}
        let maxPosition = 0
        items.forEach((item) => {
                positionsItems[item.position] = item
                maxPosition = Math.max(maxPosition, item.position)
            }
        )
        const boardSquare = []
        for (let i = 1; i <= 60; i++) {
            const square = (<Square
                key={i} position={i} onDrop={onDrop}>
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

import React, {ReactChild} from 'react'
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../../constants/constants";
import style from "./Square.module.css"

type SquarePropsType = {
    children?: ReactChild
    onDrop?: (current: number, target: number) => void
    position: number
}

type DragObject = {
    position: number
}

const Square: React.FC<SquarePropsType> = ({
                                               children,
                                               position,
                                               onDrop
                                           }) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.ELEMENT,
        item: {position},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    const [{isOver}, drop] = useDrop(
        () => ({
            accept: ItemTypes.ELEMENT,
            drop: (e: DragObject) => {

                if (onDrop && e.position !== position) {
                    onDrop(e.position, position)
                }
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            })
        }), [onDrop]
    )


    return <div ref={drop} className={style.isDropping}>
        {children ?
            <div ref={drag} className={style.isDragging} style={{
                opacity: isDragging ? 0 : 1
            }}>
                {children}
            </div>
            :
            (<div className={style.square}/>
            )
        }

        {isOver && (
            <div className={style.expectedSquare}/>
        )}
    </div>
}

export default Square
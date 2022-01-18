import React, {ReactChild} from 'react'
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../../constants/constants";

type SquarePropsType = {
    children?: ReactChild
    onDrop?: (current: number, target: number) => void
    id: number
}

const Square: React.FC<SquarePropsType> = ({
                                               children,
                                               id,
                                               onDrop
                                           }) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.ELEMENT,
        item: {id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    const [{isOver}, drop] = useDrop(
        () => ({
            accept: ItemTypes.ELEMENT,
            drop: (e, item) => {
                // console.log(e)
                // @ts-ignore
                onDrop(e.id, id)
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            })
        })
    )


    return <div ref={drop} style={{
        position: 'relative',
        width: '100%',
        height: '100%'
    }}>
        {children ?
            <div ref={drag} style={{
                opacity: isDragging ? 0 : 1,
                cursor: 'move',
            }}>
                {children}
            </div>
            :
            (<div className="card">
                <div className="content">
                    <div className="center">
                        Content
                    </div>
                </div>
            </div>)

        }

        {isOver && (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'yellow',
                }}
            />
        )}
    </div>
}

export default Square
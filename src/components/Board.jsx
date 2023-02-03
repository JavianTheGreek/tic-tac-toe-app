import Box from './Box'

function Board({ boxes, onClick, style }) {
    // const style = nextPlayer === 'X' ? " x" : "box o"

    return (
        <div className="border-[4px] border-[#29ABA4] rounded-lg grid grid-cols-3">
            {boxes.map((box, i, style) => (
                <Box key={i} value={box} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board
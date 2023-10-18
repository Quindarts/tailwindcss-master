import React from 'react'

function OtherStatesTailwind() {
    return (
        <div>
            <div className="cusor-pointer group">
                <div className="group-hover:text-red-400">Text 1</div>
                <div className="group-hover:text-yellow-300">Text 2</div>
            </div>
            <div className="is-show-block group">
                <div className="hidden h-10 w-10 bg-slate-500 group-[.is-show-block]:block ">
                    Text demo
                </div>
            </div>
        </div>
    )
}

export default OtherStatesTailwind

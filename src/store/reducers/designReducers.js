const initialState = {
    designs: [
        { id: 1, name: 'one', tshirtcolor: 'black' },
        { id: 2, name: 'two', tshirtcolor: 'blue' }
    ]
}

const designReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'save_Design':
            console.log('design is saved in DB', action.design)
    }

    return state
}

export default designReducer
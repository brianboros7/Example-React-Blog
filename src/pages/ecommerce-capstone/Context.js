import React, {useState, useEffect} from 'react';

const Context = React.createContext()

function ContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [allPhotos, setAllPhotos] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const loadData = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }
    useEffect(() => {
        loadData()
    }, [])
    
    console.log(allPhotos)

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }


    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))

    }


    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 
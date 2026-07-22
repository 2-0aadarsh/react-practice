import { useState } from 'react'

const ShoppingCart = () => {
  const [products, setProducts] = useState([
                                    {
                                        id: 1,
                                        name: "MacBook Air M4",
                                        category: "Laptop",
                                        price: 119999,
                                        quantity: 0,
                                        image:
                                        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
                                    },
                                    {
                                        id: 2,
                                        name: "Mechanical Keyboard",
                                        category: "Keyboard",
                                        price: 4999,
                                        quantity: 1,
                                        image:
                                        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
                                    },
                                    {
                                        id: 3,
                                        name: "Wireless Mouse",
                                        category: "Mouse",
                                        price: 2499,
                                        quantity: 1,
                                        image:
                                        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
                                    },
                                    {
                                        id: 4,
                                        name: "27-inch Monitor",
                                        category: "Monitor",
                                        price: 18999,
                                        quantity: 1,
                                        image:
                                        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
                                    },
                                    {
                                        id: 5,
                                        name: "Gaming Headset",
                                        category: "Headphones",
                                        price: 3499,
                                        quantity: 0,
                                        image:
                                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
                                    },
                            ])








    const handleIncrement = (id) => {
        setProducts(prevProducts => prevProducts.map((item) => (
            item.id === id ? {...item, quantity : item.quantity+1} : item
        )))
    }                        

    const handleDecrement = (id) => {
        setProducts(prevProducts => prevProducts.map((item) => {
            // 1. Skip items that don't match the clicked ID
            if(item.id !== id) return item;

            // 2. Early Return Logic (Optimized inside the loop)
            if(item.quantity === 0) return item;

            // 3. Otherwise, decrease the count safely
            return {...item, quantity : item.quantity-1};
        }))
    }

    return (
        <div  className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
            <div className="flex flex-wrap gap-16 justify-between items-start">
                {products.map((item) => (
                <div key={item.id} className="rounded bg-slate-900 px-3 py-4 flex flex-col gap-1">
                    <div className="h-32 w-44">
                        <img className='h-full w-full' src={item.image} alt="" />
                    </div>
                    <div className="w-44 flex items-center justify-between">
                        <p className='text-sm' >{item.name}</p>
                        <p className='text-[10px]' >Rs. {item.price}</p>
                    </div>

                    {/* Add to cart */}
                    <div className="mt-2">
                        {item.quantity === 0 ? 
                                        <button onClick={() =>handleIncrement(item.id)} className='w-full px-2 py-1 text-sm bg-pink-400 rounded cursor-pointer'>Add to cart</button> : 
                                        
                                        <div className='flex gap-2'>
                                            <button onClick={() =>handleIncrement(item.id)} className='w-1/2 px-2 py-1 text-sm bg-pink-400 rounded cursor-pointer'>+</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => handleDecrement(item.id)} disabled={item.quantity === 0} className='w-1/2 px-2 py-1 text-sm bg-pink-400 rounded cursor-pointer disabled:opacity-50 disabled:cursor-auto'>-</button>
                                        </div>
                        }
                    </div>
                </div>
            ))}
            </div>
        </div>
  )
}

export default ShoppingCart
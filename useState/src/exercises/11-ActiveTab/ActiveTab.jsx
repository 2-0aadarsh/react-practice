import React, { useState } from 'react'
import Home from '../../components/Tabs/Home';
import Product from '../../components/Tabs/Product';
import Cart from '../../components/Tabs/Cart';
import Contact from '../../components/Tabs/Contact';

const ActiveTab = () => { 
  const tabs = [ 
                { id: 10,
                  tabName: "Home",
                  component: Home,
                },
                
                { id: 20,
                  tabName: "Product",
                  component: Product,
                },

                { id: 34,
                  tabName: "Cart",
                  component: Cart,
                },

                { id: 48,
                  tabName: "Contact",
                  component: Contact,
                },
              ]

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  // console.log(tabs[activeTab].component) 
  // let ActiveComponent = tabs[activeTab-1].component;
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const ActiveComponent = activeTabData?.component;
  
  const handleSwitchTab = (id) => {
    // console.log(activeTabData.id);
    setActiveTab(id);
  }

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-center gap-4'>
      
      {/* Navigation to different tabs */}
      <nav className="tabs w-1/2 flex justify-between text-xl border-b py-2 px-2">
        {tabs.map((item) => (
          <div onClick={() => handleSwitchTab(item.id)} key={item.id} className={`cursor-pointer ${ activeTab === item.id? "text-pink-400 border-b-2 border-pink-400" : "text-white"}`}> {item.tabName}  </div>
        ))}
      </nav>
        
      {/* Displaying Active Tab */}
      <div className="">
        {/* {tabs[activeTab].component} */}
        <ActiveComponent />
      </div>

    
    </div>
  )
}

export default ActiveTab
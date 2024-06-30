import  { useState, useEffect } from 'react';
const images=[
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=ais_user",
    "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE3MTg4OTU3MzN8MA&ixlib=rb-4.0.3",
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
]

function Footer() {
    const [currImage,setCurrImage]=useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrImage(currImage => (currImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds (3000ms)
    
        return () => clearInterval(interval);
      }, []);
    
  return (
    <div className="footer mt-20 bg-slate-500 w-screen flex-1  ">
      <div className=" flex justify-center">
      { <img className="w-72 h-20 "src={images[currImage]}  /> }
        {/* <img className='w-72 h-20'
        src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE3MTg4OTU3MzN8MA&ixlib=rb-4.0.3"
        /> */}
      </div>
    </div>
  )
}

export default Footer

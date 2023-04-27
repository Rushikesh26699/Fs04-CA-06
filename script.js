function Navbar(){
    return <div className='navbar' style={{width:"100%",height:"10vh"}}>
        <div className='navbar1'>
            <button><p>LOGO</p></button>
            <button><p>PLATFORM</p></button>
            <button><p>PLANS</p></button>
            <button><p>EXPERIENCE</p></button>
            <button><p>RESOURCES</p></button>
            <button><p>EDUCATION</p></button>
        </div>
        <div className='navbar2'>
            
            <button>Contact Us</button>
            <button>Login</button>
            <button id='btn1'>Sign Up</button>
            
        </div>
    </div>
}

function Body(){
    return <div className='body' style={{width:"100%",height:"50vh",}}>
         <h1>See Value from Social Sooner</h1>
        <p>Our Training and Strategic services have helped <br/> thousands of organisations succeed on social.</p>
        <button id='btn1'>Request Demo</button>
    </div>
}


function Lower(){
    return <div className='lower'>
     <div className='lower1'style={{width:"34%"}}>
        <img src="https://images.smiletemplates.com/uploads/screenshots/102/0000102664/powerpoint-template-icons-b.jpg" width="300px" height="200px" ></img>
        <p>enterprise organizations successfully launched</p>
     </div>
     <div className='lower2'style={{width:"30%"}}>
     <img src="https://images.smiletemplates.com/uploads/screenshots/102/0000102664/powerpoint-template-icons-b.jpg" width="300px" height="200px"></img>
        <p>enterprise users onboard seamlessly</p>
     </div>
     <div className='lower3'style={{width:"35%"}}>
     <img src="https://images.smiletemplates.com/uploads/screenshots/102/0000102664/powerpoint-template-icons-b.jpg" width="300px" height="200px"></img>
        <p>professionals trained on product& energy</p>
     </div>
    </div>
}


function UI(){
    return <div>
        <Navbar/>
        <Body/>
        <Lower/>
    </div>
}

ReactDOM.render(<UI/>,document.getElementById('root'));
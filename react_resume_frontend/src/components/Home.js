import React from "react";
function Home(props) {
      let user
      if(props.user.name){
            user = props.user.name
      }

return (
     <React.Fragment>
        <h1>Welcome {user}</h1>
        
      </React.Fragment>
)
}

export default Home;
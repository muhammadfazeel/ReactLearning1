import React, { Component } from 'react';
function Contact(props) {
  const styles={
        width:250,
        marginTop:20,
        marginLeft:20,
        marginRight:20
    }
// Understanding Map Function
// const nums=[1,2,3,4,5];
// const double = nums.map((numbers)=>{
//   return  numbers*2;
// })
// console.log(double);


    return(
        <div className="card text-white bg-dark mb-3" style={styles}>
            <img className="card-img-top " src={props.contact.imgUrl} />
            <h3 className="card-title text-center">{props.contact.name}</h3>
            <p className="card-text text-center">{props.contact.phone}</p>
            <p className="card-text text-center">{props.contact.email}</p>
        </div>
        
    )
}
export default Contact;
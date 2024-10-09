function Hello()
{
  let myName="suyash";
  //dynamic using method
  //ch-15
  let fullName= ()=>{
    return "suyyash patel";
  }
  return <h3>
    hello this is the future speaking. I am {myName}.My fullname is {fullName()}
  </h3>
}

export default Hello;
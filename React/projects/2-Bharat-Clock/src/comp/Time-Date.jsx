function Time_Date()
{
  let time=new Date();
  return <div className="current-time">
  This is the current date & time: {time.toLocaleDateString()} & {time.toLocaleTimeString()}
</div>  

}
export default Time_Date
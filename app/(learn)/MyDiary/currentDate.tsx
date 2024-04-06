export default function CurrentDateTime() {
    // Create a new Date object
    const now = new Date();
  
    // Options for formatting the date and time
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
    //   hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    };
  
    // Format the date and time
    //@ts-ignore
    const dateTimeStr = now.toLocaleDateString('en-US', options) ;
    return (
      <div className="date-time text-lg my-3 text-neutral-400">
        {dateTimeStr}
      </div>
    );
}
const Heading = ({ title, subtitle, center }) => {
    return (
      <div className={center ? 'text-center' : 'text-start'}>
        <div className='text-2xl font-bold capitalize'>{title}</div>
        <div className='font-light capitalize text-neutral-500 mt-2'>{subtitle}</div>
      </div>
    )
  }
  
  export default Heading
 

const Alert = ({alert}) => {
  return (

    <div className={`${alert.error ? 'from-red-400 to-red-800 ':'from-sky-400 to-sky-800'}
    bg-gradient-to-br text-center p-3 rounded-lg uppercase text-white font-bold text-sm my-10   ` }>
      {alert.msg}
       
    </div>
  )
}

export default Alert

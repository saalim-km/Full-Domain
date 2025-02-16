
const Child = ({sendMessToParent}) => {
  return (
    <div>
        <button onClick={()=> sendMessToParent("hii from child")}>
            Send Data to parent
        </button>
    </div>
  )
}

export default Child

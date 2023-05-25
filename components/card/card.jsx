export default function Main({ title, onClick }) {
  return <a onClick={onClick} className="
    group px-5 py-4 transition-colors 
    rounded-lg border border-gray-300 
    bg-gradient-to-b from-transparent to-blue-100
    hover:border-gray-300 hover:drop-shadow-2xl
    cursor-pointer
    " >
    <div className='mb-3 flex flex-col gap-x-4 justify-center md:justify-between'>
      <h2 className={`flex-1 text-2xl font-semibold md:text-left`}>
        {title}
      </h2>
      <h2 className={`text-sm`}>
          Learn More 
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
    </div>
  </a>
}